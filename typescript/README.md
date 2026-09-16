# @myescapeplan/sdk

The TypeScript Fetch client for the MyEscapePlan Business Travel API.

## Security warning

Business API keys are server-side credentials. Do not expose them in browser
bundles, mobile applications, public source code, or other client-side
environments. Call the MyEscapePlan Business API from your trusted backend.
The fact that this Fetch client can run in environments with `fetch` does not
make it appropriate for a public frontend application.

## Install

```bash
npm install @myescapeplan/sdk
```

For a local checkout, use the contributor instructions in the repository root.

## Quickstart

```ts
import { BusinessTravelAPIApi, Configuration } from "@myescapeplan/sdk";

const configuration = new Configuration({
  apiKey: "YOUR_API_KEY",
});
const api = new BusinessTravelAPIApi(configuration);

const usage = await api.getUsage();
console.log(usage);
```

The client defaults to https://api.myescapeplan.app and already includes the
/api/v1/business/... paths. Do not append /api/v1/business to
Configuration.basePath.

The canonical OpenAPI contract includes the progressive NDJSON streaming
endpoint. It is intentionally omitted from the generated TypeScript and
Python SDKs for SDK v0.1; use the standard polling/search-result flow in v0.1.

SDK package version `0.1.0` is independent from the API/OpenAPI contract
version `1.0.0`; this client is generated against a defined contract snapshot.

## Build

```bash
cd typescript
npm ci
npm run build
```

## License

MIT. See the repository [LICENSE](../LICENSE).
