# CatalogueItem

Reusable customer-owned supply.  Catalogue products deliberately narrow the shared component vocabulary: itinerary-only constructs such as notes and free time are not products. ``subtype`` carries product specificity without widening the stable kind enum. ``description`` is matching/internal catalogue copy; ``client_description`` remains explicit client-facing copy when the item is materialised.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_description** | **str** |  | [optional] [default to '']
**description** | **str** |  | [optional] [default to '']
**destination_ids** | **List[UUID]** |  | 
**inclusions** | **str** |  | [optional] [default to '']
**kind** | **str** |  | 
**ref** | [**CatalogueRef**](CatalogueRef.md) |  | 
**subtype** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**title** | **str** |  | 

## Example

```python
from myescapeplan.models.catalogue_item import CatalogueItem

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogueItem from a JSON string
catalogue_item_instance = CatalogueItem.from_json(json)
# print the JSON string representation of the object
print(CatalogueItem.to_json())

# convert the object into a dict
catalogue_item_dict = catalogue_item_instance.to_dict()
# create an instance of CatalogueItem from a dict
catalogue_item_from_dict = CatalogueItem.from_dict(catalogue_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


