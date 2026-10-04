# CatalogueMatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | [**List[CatalogueDestinationMatches]**](CatalogueDestinationMatches.md) |  | [optional] 
**discovery_id** | **str** |  | [optional] 
**unmatched_refs** | [**List[CatalogueRef]**](CatalogueRef.md) |  | [optional] 

## Example

```python
from myescapeplan.models.catalogue_match_response import CatalogueMatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogueMatchResponse from a JSON string
catalogue_match_response_instance = CatalogueMatchResponse.from_json(json)
# print the JSON string representation of the object
print(CatalogueMatchResponse.to_json())

# convert the object into a dict
catalogue_match_response_dict = catalogue_match_response_instance.to_dict()
# create an instance of CatalogueMatchResponse from a dict
catalogue_match_response_from_dict = CatalogueMatchResponse.from_dict(catalogue_match_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


