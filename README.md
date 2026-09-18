# MyEscapePlan Travel Discovery API SDKs

[![Developer docs](https://img.shields.io/badge/docs-Travel%20Discovery%20API-00A8C2)](https://business.myescapeplan.app/developers)
[![SDK CI](https://github.com/myescapeplan/myescapeplan-sdk/actions/workflows/sdk-ci.yml/badge.svg)](https://github.com/myescapeplan/myescapeplan-sdk/actions/workflows/sdk-ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-071A2D)](LICENSE)
[![TypeScript](https://img.shields.io/badge/SDK-TypeScript-2D62D6)](typescript/README.md)
[![Python](https://img.shields.io/badge/SDK-Python-6A4FD0)](python/README.md)

Official TypeScript and Python SDKs for the **MyEscapePlan Travel Discovery API**.
Turn open-ended travel intent into ranked destinations and date opportunities
before downstream flight, hotel or other inventory shopping.

**Developer hub:** https://business.myescapeplan.app/developers
**Discovery overview:** https://business.myescapeplan.app/discovery
**OpenAPI:** https://api.myescapeplan.app/api/v1/business/openapi.json
**Runnable examples:** [TypeScript and Python examples](examples/)

> MyEscapePlan is a travel planning and pre-shopping decision layer, not an
> inventory supplier. Discovery decides what is worth shopping; Verified Search
> can then check selected opportunities against providers.

## Why a Travel Discovery API?

Inventory APIs are excellent when the destination and dates are already known.
Conversational travel search starts earlier:

```text
"Somewhere warm for four nights next month, under £500"
                         │
                         ▼
              MyEscapePlan Discovery
                         │
                         ▼
           ranked destinations + dates
                         │
                         ▼
       supplier / flight / hotel shopping APIs
```

Use MyEscapePlan to reduce an open-ended request into a smaller, explicit set of
travel opportunities that downstream systems can shop, verify or present.

### Common use cases

| Use case | What MyEscapePlan provides |
| --- | --- |
| AI travel agents | Structured destinations and dates from natural-language intent |
| Conversational OTA search | A pre-shopping shortlist before inventory fan-out |
| Destination recommendation | Ranked places with reasons and qualitative fit |
| Flexible-date travel search | Date opportunities and trip lengths around user constraints |
| Advisor and travel-platform workflows | Discovery first, optional provider-backed verification second |

## Use the SDKs

The public SDK repository is the reproducible distribution source. The
TypeScript and Python packages are not published to npm or PyPI yet, so do not
use registry install commands for these package names.

```bash
git clone https://github.com/myescapeplan/myescapeplan-sdk.git
cd myescapeplan-sdk

# TypeScript client
cd typescript
npm ci
npm run build

# From your trusted backend project, install the built local package
cd /path/to/your-backend
npm install /path/to/myescapeplan-sdk/typescript

# Python client (from the SDK checkout)
cd /path/to/myescapeplan-sdk/python
python -m pip install -e .
```

The SDKs are server-side clients. MyEscapePlan Business API keys are credentials
and must not be exposed in browser bundles, public mobile applications, public
source code or other untrusted clients.

## TypeScript quick start

```ts
import { BusinessTravelAPIApi, Configuration } from "@myescapeplan/sdk";

const api = new BusinessTravelAPIApi(
  new Configuration({ apiKey: process.env.MYESCAPEPLAN_API_KEY! }),
);

const discovery = await api.createDiscovery({
  idempotencyKey: crypto.randomUUID(),
  discoveryRequest: {
    query: "four nights next month, somewhere warm, under £500",
  },
});

for (const opportunity of discovery.opportunities ?? []) {
  console.log(opportunity.destination?.displayName, opportunity.dateOptions);
}
```

## Python quick start

```python
import asyncio
import os
import uuid

from myescapeplan import ApiClient, BusinessTravelAPIApi, Configuration
from myescapeplan.models.discovery_request import DiscoveryRequest


async def main() -> None:
    configuration = Configuration()
    configuration.api_key["BusinessApiKey"] = os.environ["MYESCAPEPLAN_API_KEY"]

    async with ApiClient(configuration) as client:
        api = BusinessTravelAPIApi(client)
        discovery = await api.create_discovery(
            idempotency_key=str(uuid.uuid4()),
            discovery_request=DiscoveryRequest(
                query="four nights next month, somewhere warm, under 500 GBP"
            ),
        )
        for opportunity in discovery.opportunities or []:
            print(opportunity.destination, opportunity.date_options)


asyncio.run(main())
```

## Discovery → Verified Search

Discovery is synchronous planning and makes no live supplier calls. If your
integration needs provider-backed flight or accommodation checks, hand one of
the returned opportunities into the separately scoped Verified Search workflow.

```ts
const opportunity = discovery.opportunities?.[0];
if (!opportunity) throw new Error("No discovery opportunities returned");

const job = await api.createSearch({
  idempotencyKey: crypto.randomUUID(),
  businessSearchCreateRequest: {
    discoveryId: discovery.discoveryId,
    opportunityId: opportunity.opportunityId,
  },
});

let search = await api.getSearch({ searchId: job.id });
for (let attempt = 0; attempt < 30; attempt += 1) {
  if (search.status === "completed" || search.status === "partial") break;
  if (search.status === "failed" || search.status === "cancelled") {
    throw new Error(`Verified Search ended with status: ${search.status}`);
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  search = await api.getSearch({ searchId: job.id });
}

if (search.status !== "completed" && search.status !== "partial") {
  throw new Error("Verified Search did not reach a result-ready status in time");
}

const results = await api.getSearchResults({ searchId: job.id });
```

## API surface

The generated clients expose the current Business v1 contract, including:

- Discovery: natural-language and structured travel discovery.
- Destination lookup: destination resolution against the active planner snapshot.
- Verified Search: asynchronous provider-backed search for selected opportunities.
- Search results and details: canonical verified travel-result retrieval.
- Usage: allowances, consumption, concurrency and scopes.

The canonical OpenAPI contract includes the progressive NDJSON streaming route.
The generated TypeScript and Python SDKs intentionally exclude streaming in SDK
v0.1; use the polling/search-result flow or a raw streaming HTTP client.

## Contract and versioning

- `openapi/openapi.json` is the canonical Business API contract.
- `openapi/sdk-v0.1.json` is the filtered contract used to generate SDK v0.1.
- `typescript/` contains the `@myescapeplan/sdk` TypeScript Fetch client.
- `python/` contains the `myescapeplan` Python client.

The SDK package version and API/OpenAPI contract version are independent. SDK
releases are generated from an explicit Business API contract snapshot.

## Developer resources

- **Developer documentation:** https://business.myescapeplan.app/developers
- **Travel Discovery API overview:** https://business.myescapeplan.app/discovery
- **OpenAPI contract:** https://api.myescapeplan.app/api/v1/business/openapi.json
- **API terms:** https://business.myescapeplan.app/api-terms
- **Consumer demo:** https://myescapeplan.app — useful for seeing the planning experience; Business integrations should start from the developer hub.
- **Contributing:** [CONTRIBUTING.md](CONTRIBUTING.md)
- **Security:** [SECURITY.md](SECURITY.md)

## Support

For API access, pilot keys or integration questions, start at the
[MyEscapePlan developer hub](https://business.myescapeplan.app/developers) or
open an issue for SDK-specific problems.

## License

The SDK source is licensed under the [MIT License](LICENSE). Use of the
MyEscapePlan API is governed by the applicable
[API terms](https://business.myescapeplan.app/api-terms).
