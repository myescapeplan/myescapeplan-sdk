# StructuredStay

Only amenities with an existing provider parameter and post-filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amenities** | **List[str]** |  | [optional] 
**direction** | **str** |  | [optional] [default to 'prefer']
**property_type** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.structured_stay import StructuredStay

# TODO update the JSON string below
json = "{}"
# create an instance of StructuredStay from a JSON string
structured_stay_instance = StructuredStay.from_json(json)
# print the JSON string representation of the object
print(StructuredStay.to_json())

# convert the object into a dict
structured_stay_dict = structured_stay_instance.to_dict()
# create an instance of StructuredStay from a dict
structured_stay_from_dict = StructuredStay.from_dict(structured_stay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


