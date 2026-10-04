# CatalogueItemMatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_basis** | **str** |  | [optional] [default to 'destination']
**ref** | [**CatalogueRef**](CatalogueRef.md) |  | 

## Example

```python
from myescapeplan.models.catalogue_item_match import CatalogueItemMatch

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogueItemMatch from a JSON string
catalogue_item_match_instance = CatalogueItemMatch.from_json(json)
# print the JSON string representation of the object
print(CatalogueItemMatch.to_json())

# convert the object into a dict
catalogue_item_match_dict = catalogue_item_match_instance.to_dict()
# create an instance of CatalogueItemMatch from a dict
catalogue_item_match_from_dict = CatalogueItemMatch.from_dict(catalogue_item_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


