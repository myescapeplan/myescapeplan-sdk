# Releasing

This file documents the post-approval configuration needed for the release
workflow. It does not configure external services or publish packages.

The workflow is triggered only when an owner publishes a GitHub Release. Its
validation job builds, tests, and checks both exact package artifacts before
either publication job can run.

## GitHub

1. Make `myescapeplan/myescapeplan-sdk` public only after the owner approves
   the repository contents and confirms the security contact.
2. Protect `main`, require the SDK CI check, and require pull requests before
   merge as appropriate for the project.
3. Create a `release` environment and add the desired manual approvers.
4. Keep direct pushes to `main` disabled and consider requiring conversation
   resolution.
5. Complete the first-publish setup below before creating the approved
   `v0.1.0` tag and GitHub Release.

## npm

### First npm release

npm Trusted Publisher settings are configured from an existing package. Make a
one-time bootstrap publication before configuring the publisher:

1. Confirm the public package name `@myescapeplan/sdk` is available and owned
   by the MyEscapePlan npm scope.
2. In a throwaway worktree or clone, build the SDK and temporarily set its
   version to a prerelease such as `0.1.0-rc.0`:

   ```bash
   cd typescript
   npm ci
   npm run build
   npm version 0.1.0-rc.0 --no-git-tag-version
   npm publish --access public --tag next
   ```

   Use a maintainer's interactive npm login/2FA for this one-time publication;
   do not put those credentials in the repository. Do not commit this
   temporary version or create a GitHub Release for it. The purpose is only to
   create the npm package so its settings are available.
3. In the existing npm package settings, add a GitHub Actions Trusted Publisher
   for repository `myescapeplan/myescapeplan-sdk`, workflow filename
   `release.yml`, and environment `release`.
4. In **Allowed actions**, enable direct `npm publish`. Trusted Publisher
   configurations created after September 3, 2026 may default to staged
   publishing only; the release workflow intentionally uses direct publishing
   after the GitHub `release` environment approval. `npm stage publish` may be
   enabled as an additional action, but is not used by this workflow.
5. Do not add an npm token to repository secrets. The workflow requests the
   GitHub OIDC identity token and npm Trusted Publishing supplies short-lived
   credentials; npm generates provenance for a compatible public trusted
   publication.
6. After the npm publisher is configured, complete the PyPI setup below and
   then create the approved `v0.1.0` tag and GitHub Release. The workflow will
   publish the real `0.1.0` package version.

### Subsequent npm releases

1. Keep the existing Trusted Publisher configuration pointed at
   `myescapeplan/myescapeplan-sdk`, `release.yml`, and the `release` environment.
2. Confirm direct `npm publish` remains enabled in **Allowed actions**.
3. Update the SDK version, run the local validation commands, create the
   matching `vX.Y.Z` tag, and publish the GitHub Release. The workflow publishes
   the exact validated tarball with:
   `npm publish npm-package/*.tgz --access public`.
4. Do not add or rotate an npm token for this workflow.

## PyPI

### First PyPI release

1. Confirm the project name `myescapeplan` is available and owned by the
   MyEscapePlan PyPI account.
2. In the PyPI account's **Publishing** settings, add a **pending** GitHub
   Actions Trusted Publisher for owner `myescapeplan`, repository
   `myescapeplan-sdk`, workflow `release.yml`, and environment `release`.
3. The first successful `v0.1.0` publication creates the PyPI project and
   converts the pending publisher into a normal publisher.
4. Do not add a PyPI API token to repository secrets. The release workflow uses
   the PyPA Trusted Publishing action with GitHub OIDC.

### Subsequent PyPI releases

1. Keep the normal Trusted Publisher configuration in the `myescapeplan`
   project settings with the same repository, workflow, and `release`
   environment.
2. Create the matching GitHub tag and Release after validation. The workflow
   uploads the validated Python artifacts with OIDC.

## Local validation

Before creating a release, run the validation commands documented in
`CONTRIBUTING.md`. The release workflow repeats the package builds and tests
the exact npm tarball and Python wheel that it is about to publish.
