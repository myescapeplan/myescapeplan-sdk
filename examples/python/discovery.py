"""Minimal Travel Discovery API example."""

import asyncio
import os
import uuid

from myescapeplan import ApiClient, BusinessTravelAPIApi, Configuration
from myescapeplan.models.discovery_request import DiscoveryRequest


async def main() -> None:
    api_key = os.environ.get("MYESCAPEPLAN_API_KEY")
    if not api_key:
        raise RuntimeError("Set MYESCAPEPLAN_API_KEY before running this example.")

    configuration = Configuration()
    configuration.api_key["BusinessApiKey"] = api_key

    async with ApiClient(configuration) as client:
        api = BusinessTravelAPIApi(client)
        discovery = await api.create_discovery(
            idempotency_key=f"example-{uuid.uuid4()}",
            discovery_request=DiscoveryRequest(
                query="four nights next month, somewhere warm, under 500 GBP",
                limit=5,
            ),
        )

        print({
            "discovery_id": discovery.discovery_id,
            "opportunities": discovery.opportunities,
        })


if __name__ == "__main__":
    asyncio.run(main())
