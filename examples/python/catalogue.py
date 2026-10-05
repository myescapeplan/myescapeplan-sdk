"""Minimal catalogue matching example."""

import asyncio
import os
from uuid import UUID

from myescapeplan import ApiClient, BusinessTravelAPIApi, Configuration
from myescapeplan.models.catalogue_item import CatalogueItem
from myescapeplan.models.catalogue_match_request import CatalogueMatchRequest
from myescapeplan.models.catalogue_ref import CatalogueRef


async def main() -> None:
    api_key = os.environ.get("MYESCAPEPLAN_API_KEY")
    if not api_key:
        raise RuntimeError("Set MYESCAPEPLAN_API_KEY before running this example.")

    destination_id_value = os.environ.get("MYESCAPEPLAN_DESTINATION_ID")
    if not destination_id_value:
        raise RuntimeError(
            "Set MYESCAPEPLAN_DESTINATION_ID before running this example."
        )
    destination_id = UUID(destination_id_value)

    configuration = Configuration()
    configuration.api_key["BusinessApiKey"] = api_key

    async with ApiClient(configuration) as client:
        api = BusinessTravelAPIApi(client)
        response = await api.match_catalogue(
            catalogue_match_request=CatalogueMatchRequest(
                destination_ids=[destination_id],
                items=[
                    CatalogueItem(
                        destination_ids=[destination_id],
                        kind="stay",
                        ref=CatalogueRef(
                            external_id="example-beach-hotel",
                        ),
                        title="Example beach hotel",
                        tags=["beach", "family"],
                    )
                ],
            )
        )

        print(
            {
                "destinations": response.destinations,
                "unmatched_refs": response.unmatched_refs,
            }
        )


if __name__ == "__main__":
    asyncio.run(main())
