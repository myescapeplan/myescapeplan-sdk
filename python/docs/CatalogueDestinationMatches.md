# CatalogueDestinationMatches


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_id** | **UUID** |  | 
**matches** | [**List[CatalogueItemMatch]**](CatalogueItemMatch.md) |  | [optional] 
**opportunity_id** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.catalogue_destination_matches import CatalogueDestinationMatches

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogueDestinationMatches from a JSON string
catalogue_destination_matches_instance = CatalogueDestinationMatches.from_json(json)
# print the JSON string representation of the object
print(CatalogueDestinationMatches.to_json())

# convert the object into a dict
catalogue_destination_matches_dict = catalogue_destination_matches_instance.to_dict()
# create an instance of CatalogueDestinationMatches from a dict
catalogue_destination_matches_from_dict = CatalogueDestinationMatches.from_dict(catalogue_destination_matches_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


