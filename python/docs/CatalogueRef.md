# CatalogueRef

Stable customer-owned identity for one reusable catalogue product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalogue_id** | **str** |  | [optional] [default to 'default']
**external_id** | **str** |  | 
**revision** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.catalogue_ref import CatalogueRef

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogueRef from a JSON string
catalogue_ref_instance = CatalogueRef.from_json(json)
# print the JSON string representation of the object
print(CatalogueRef.to_json())

# convert the object into a dict
catalogue_ref_dict = catalogue_ref_instance.to_dict()
# create an instance of CatalogueRef from a dict
catalogue_ref_from_dict = CatalogueRef.from_dict(catalogue_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


