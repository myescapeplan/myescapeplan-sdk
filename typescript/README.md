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

## Trip anchors

The generated `DiscoveryRequest` and `BusinessSearchCreateRequest` models expose
`tripAnchor`, serialized on the wire as `trip_anchor`, for caller-known commitments
such as events, fixtures, conferences, cruises, tours or appointments. The caller
supplies the destination and required local calendar dates; MyEscapePlan plans
around them but does not discover or verify the external commitment. The default
`mode="cover"` requires the complete date interval; `mode="overlap"` requires at
least one shared local date. V1 does not guarantee arrival before a specific
clock time.

TypeScript models OpenAPI `format: date` values as `Date`. For date-only trip
anchors, construct them from an ISO calendar-date string so UTC serialization
preserves the intended date:

```ts
const requiredPresence = {
  startDate: new Date("2026-11-18"),
  endDate: new Date("2026-11-18"),
};
```

Avoid constructing a date-only value with local-midnight components such as
`new Date(2026, 10, 18)`, because converting that value to UTC can change the
calendar date in some time zones.

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
