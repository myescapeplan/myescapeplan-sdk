# MyEscapePlan SDKs

Official TypeScript and Python clients for the MyEscapePlan Business Travel
API.

## Security warning

MyEscapePlan Business API keys are server-side credentials. Do not expose them
in browser bundles, mobile applications, public source code, or other
client-side environments. Call the MyEscapePlan Business API from your trusted
backend.

## Install

TypeScript:

```bash
npm install @myescapeplan/sdk
```

Python:

```bash
pip install myescapeplan
```

For local development, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Authenticate

Obtain a MyEscapePlan Business API key and pass it to the generated client.
The SDK sends it as `X-API-KEY`.

TypeScript:

```ts
import { BusinessTravelAPIApi, Configuration } from "@myescapeplan/sdk";

const api = new BusinessTravelAPIApi(
  new Configuration({ apiKey: "YOUR_API_KEY" }),
);
```

Python:

```python
from myescapeplan import ApiClient, Configuration

configuration = Configuration()
configuration.api_key["BusinessApiKey"] = "YOUR_API_KEY"
api_client = ApiClient(configuration)
```

The default API origin is `https://api.myescapeplan.app`. It already includes
the `/api/v1/business/...` paths, so do not append `/api/v1/business` to the
configured host/base path.

## Discovery and Search

Discovery finds destination/date opportunities without live shopping. A
verified search then shops a selected opportunity:

```ts
const discovery = await api.createDiscovery({
  idempotencyKey: crypto.randomUUID(),
  discoveryRequest: { query: "three nights in Lisbon in October" },
});

const opportunity = discovery.opportunities?.[0];
if (!opportunity) {
  throw new Error("No discovery opportunities returned");
}

const job = await api.createSearch({
  idempotencyKey: crypto.randomUUID(),
  businessSearchCreateRequest: {
    discoveryId: discovery.discoveryId,
    opportunityId: opportunity.opportunityId,
  },
});

const results = await api.getSearchResults({ searchId: job.id });
```

The equivalent Python methods are `create_discovery`, `create_search`, and
`get_search_results`. See the language-specific README and API docs for the
complete request models and method surface.

The canonical OpenAPI contract includes the progressive NDJSON streaming
endpoint. The generated TypeScript and Python SDKs intentionally exclude it
from SDK v0.1; use the standard polling/search-result flow in v0.1. A raw
streaming HTTP client is required until a streaming helper is released.

## Contract and versioning

- `openapi/openapi.json` is the canonical Business API contract, including
  the streaming route.
- `openapi/sdk-v0.1.json` is the exact filtered contract used to generate both
  clients for SDK v0.1.
- `typescript/` contains the `@myescapeplan/sdk` TypeScript Fetch client.
- `python/` contains the `myescapeplan` Python client.

The SDK package version is `0.1.0`; the API/OpenAPI contract version is
`1.0.0`. These are independent versioning schemes. SDK package releases are
generated against a defined Business API contract snapshot and may version
independently from that contract.

Regenerate clients when the SDK input or generator configuration changes, and
review the generated diff before releasing a new version.

## Support

For API access, keys, or contract questions, contact MyEscapePlan support or
open an issue in the public SDK repository.

## License and API terms

The SDK source code is licensed under the MIT License; see [LICENSE](LICENSE).
Use of the MyEscapePlan API, including data and service limits, is governed by
the applicable MyEscapePlan API terms.
