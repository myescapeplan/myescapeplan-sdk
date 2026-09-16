# BusinessTravelAPIApi

The generated Business Travel API client for MyEscapePlan.

## Supported v0.1 operations

- create_discovery - discover destination/date opportunities.
- lookup_destinations - resolve destinations from the active planner snapshot.
- create_search - create a detached verified-search job.
- list_searches - list the caller's verified searches.
- get_usage - read current Business API usage and allowances.
- get_search - read verified-search status.
- get_search_results - read canonical verified travel results.
- get_search_result - read one verified result.
- get_search_result_details - read rich details for one verified result.
- cancel_search - cancel a verified search.

All methods use the canonical /api/v1/business/... paths with the default API
origin https://api.myescapeplan.app.

The canonical route remains in `openapi/openapi.json`, but progressive NDJSON
event streaming is intentionally excluded from the generated v0.1 SDK. Use
the standard polling/search-result flow or a raw streaming HTTP client.
