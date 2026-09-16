# myescapeplan

The Python client for the MyEscapePlan Business Travel API.

## Install

```bash
pip install myescapeplan
```

For a local checkout, use the contributor instructions in the repository root.

## Quickstart

```python
import asyncio
import os

from myescapeplan import ApiClient, BusinessTravelAPIApi, Configuration

async def main() -> None:
    configuration = Configuration()
    configuration.api_key["BusinessApiKey"] = os.environ["MYESCAPEPLAN_API_KEY"]

    async with ApiClient(configuration) as api_client:
        api = BusinessTravelAPIApi(api_client)
        usage = await api.get_usage()
        print(usage)


asyncio.run(main())
```

The client defaults to https://api.myescapeplan.app and already includes the
/api/v1/business/... paths. Do not set Configuration.host to a value that
also appends /api/v1/business.

The canonical OpenAPI contract includes the progressive NDJSON streaming
endpoint. It is intentionally omitted from the generated TypeScript and
Python SDKs for SDK v0.1; use the standard polling/search-result flow in v0.1.

SDK package version `0.1.0` is independent from the API/OpenAPI contract
version `1.0.0`; this client is generated against a defined contract snapshot.

## Verify the package

```bash
cd python
python -m compileall myescapeplan
```

## License

MIT. See the repository [LICENSE](../LICENSE).
