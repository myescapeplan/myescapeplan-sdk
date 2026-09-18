# @myescapeplan/sdk — TypeScript Travel Discovery API SDK

Server-side TypeScript Fetch client for the **MyEscapePlan Travel Discovery
API**. Use it to turn natural-language travel intent into ranked destination and
date opportunities before downstream inventory shopping.

- Developer guide: https://business.myescapeplan.app/developers
- Discovery overview: https://business.myescapeplan.app/discovery
- Public SDK source: https://github.com/myescapeplan/myescapeplan-sdk

## Security

Business API keys are server-side credentials. Do not expose them in browser
bundles, mobile applications, public source code or other client-side
environments. The fact this client uses `fetch` does not make it appropriate for
a public frontend application.

## Use from a local checkout

The package is not published to npm yet. Clone the [public SDK repository](https://github.com/myescapeplan/myescapeplan-sdk), run
`npm ci` and `npm run build` from `typescript/`, then install that built local
package into your trusted backend with `npm install /path/to/myescapeplan-sdk/typescript`.

## Quick start

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

console.log(discovery.opportunities);
```

The client defaults to `https://api.myescapeplan.app` and already includes the
`/api/v1/business/...` paths. Do not append `/api/v1/business` to
`Configuration.basePath`.

## Discovery and verification

Discovery is the planning step and makes no live supplier calls. Use Verified
Search when a selected opportunity needs provider-backed flight or accommodation
checks. See the [developer guide](https://business.myescapeplan.app/developers)
for the handoff flow, usage endpoint, response models and current capability
boundaries.

The canonical OpenAPI contract contains progressive NDJSON streaming, which is
intentionally omitted from SDK v0.1. Use the polling/search-result flow or a raw
streaming client for that route.

## Build

```bash
cd typescript
npm ci
npm run build
```

## License

MIT. See the repository [LICENSE](../LICENSE). API usage is governed by the
[MyEscapePlan API terms](https://business.myescapeplan.app/api-terms).
