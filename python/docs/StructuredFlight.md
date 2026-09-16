# StructuredFlight


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cabin_class** | **str** |  | [optional] 
**direction** | **str** |  | [optional] [default to 'prefer']
**directions** | **Dict[str, str]** |  | [optional] 
**exclude_airlines** | **List[str]** |  | [optional] 
**include_airlines** | **List[str]** |  | [optional] 
**max_stops** | **int** |  | [optional] 

## Example

```python
from myescapeplan.models.structured_flight import StructuredFlight

# TODO update the JSON string below
json = "{}"
# create an instance of StructuredFlight from a JSON string
structured_flight_instance = StructuredFlight.from_json(json)
# print the JSON string representation of the object
print(StructuredFlight.to_json())

# convert the object into a dict
structured_flight_dict = structured_flight_instance.to_dict()
# create an instance of StructuredFlight from a dict
structured_flight_from_dict = StructuredFlight.from_dict(structured_flight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


