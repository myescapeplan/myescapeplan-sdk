# myescapeplan — Python Travel Discovery API SDK

Server-side Python client for the **MyEscapePlan Travel Discovery API**. Use it
to turn natural-language travel intent into ranked destination and date
opportunities before downstream inventory shopping.

- Developer guide: https://business.myescapeplan.app/developers
- Discovery overview: https://business.myescapeplan.app/discovery
- Public SDK source: https://github.com/myescapeplan/myescapeplan-sdk

## Security

Business API keys are server-side credentials. Do not expose them in browser
bundles, public mobile applications, public source code or other untrusted
clients.

## Use from a local checkout

The package is not published to PyPI yet. Clone the [public SDK repository](https://github.com/myescapeplan/myescapeplan-sdk), then run
`python -m pip install -e .` from `python/`.

## Quick start

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
        print(discovery.opportunities)


asyncio.run(main())
```

The client defaults to `https://api.myescapeplan.app` and already includes the
`/api/v1/business/...` paths. Do not append `/api/v1/business` to
`Configuration.host`.

## Trip anchors

The generated `DiscoveryRequest` and `BusinessSearchCreateRequest` models expose
`trip_anchor` for caller-known commitments such as events, fixtures, conferences,
cruises, tours or appointments. The caller supplies the destination and required
local calendar dates; MyEscapePlan plans around them but does not discover or
verify the external commitment. The default `mode="cover"` requires the complete
date interval; `mode="overlap"` requires at least one shared local date. V1 does
not guarantee arrival before a specific clock time.

## Discovery and verification

Discovery is the planning step and makes no live supplier calls. Use Verified
Search when a selected opportunity needs provider-backed flight or accommodation
checks. See the [developer guide](https://business.myescapeplan.app/developers)
for the handoff flow, usage endpoint, response models and current capability
boundaries.

The canonical OpenAPI contract contains progressive NDJSON streaming, which is
intentionally omitted from SDK v0.1. Use the polling/search-result flow or a raw
streaming client for that route.

## Verify the package

```bash
cd python
python -m compileall myescapeplan
```

## License

MIT. See the repository [LICENSE](../LICENSE). API usage is governed by the
[MyEscapePlan API terms](https://business.myescapeplan.app/api-terms).
