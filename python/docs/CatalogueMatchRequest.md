# CatalogueMatchRequest

Match products against an owned Discovery or explicit known destinations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_ids** | **List[UUID]** |  | [optional] 
**discovery_id** | **str** |  | [optional] 
**items** | [**List[CatalogueItem]**](CatalogueItem.md) |  | 

## Example

```python
from myescapeplan.models.catalogue_match_request import CatalogueMatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogueMatchRequest from a JSON string
catalogue_match_request_instance = CatalogueMatchRequest.from_json(json)
# print the JSON string representation of the object
print(CatalogueMatchRequest.to_json())

# convert the object into a dict
catalogue_match_request_dict = catalogue_match_request_instance.to_dict()
# create an instance of CatalogueMatchRequest from a dict
catalogue_match_request_from_dict = CatalogueMatchRequest.from_dict(catalogue_match_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


