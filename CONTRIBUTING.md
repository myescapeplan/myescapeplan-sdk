# Contributing

## Generated sources

The API and model files in `typescript/src`, `python/myescapeplan`, and their
generated documentation are produced from the Business OpenAPI contract. Do
not normally edit generated API or model files by hand.

Canonical API changes originate in the Voyager repository and its OpenAPI
generation/post-processing logic. The local generation command synchronises
the checked-in contract snapshots, package metadata, manifests, and generated
clients into this repository:

```bash
cd ../Voyager/backend
uv run python scripts/generate_public_sdks.py --output ../../myescapeplan-sdk
```

This assumes `Voyager` and `myescapeplan-sdk` are sibling directories. Use an
explicit absolute path instead if your checkout layout differs.

SDK v0.1 is generated from `openapi/sdk-v0.1.json`, which intentionally omits
the progressive streaming endpoint present in `openapi/openapi.json`.

Generated files are tracked in `typescript/.mep-generated-files.json` and
`python/.mep-generated-files.json`. A regeneration may overwrite generated
changes, so a pull request changing generated code should include the
corresponding Voyager/OpenAPI or generator change.

## Local validation

TypeScript package:

```bash
cd typescript
npm ci
npm run build
npm pack --dry-run
```

Python package:

```bash
cd python
python -m build
python -m twine check dist/*
```

The CI workflow additionally installs the packed artifacts into clean Node.js
and Python environments and tests the public imports. Do not publish packages
from local development or ordinary CI.

## Python packaging metadata

Modern PEP 517 builds use `pyproject.toml` as the authoritative metadata
source. `setup.py` remains aligned for legacy tooling; removing that deliberate
duplication is deferred until a separate packaging cleanup so this release
does not risk changing installation behavior.
