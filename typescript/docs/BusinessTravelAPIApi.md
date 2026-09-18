# BusinessTravelAPIApi

The generated MyEscapePlan Travel Discovery API client.

Canonical developer documentation: https://business.myescapeplan.app/developers

## Security warning

Business API keys are server-side credentials. Do not expose them in browser
bundles, mobile applications, public source code, or other client-side
environments. Call the MyEscapePlan Business API from your trusted backend.

## Supported v0.1 operations

- createDiscovery — discover destination/date opportunities.
- lookupDestinations — resolve destinations from the active planner snapshot.
- createSearch — create a detached verified-search job.
- listSearches — list the caller's verified searches.
- getUsage — read current Business API usage and allowances.
- getSearch — read verified-search status.
- getSearchResults — read canonical verified travel results.
- getSearchResult — read one verified result.
- getSearchResultDetails — read rich details for one verified result.
- cancelSearch — cancel a verified search.

All methods use the canonical /api/v1/business/... paths with the default API
origin https://api.myescapeplan.app.

The canonical route remains in `openapi/openapi.json`, but progressive NDJSON
event streaming is intentionally excluded from the generated v0.1 SDK. Use
the standard polling/search-result flow or a raw streaming HTTP client.
