# AirportRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | 
**country** | **str** |  | 
**iata** | **str** |  | 
**name** | **str** |  | 

## Example

```python
from myescapeplan.models.airport_ref import AirportRef

# TODO update the JSON string below
json = "{}"
# create an instance of AirportRef from a JSON string
airport_ref_instance = AirportRef.from_json(json)
# print the JSON string representation of the object
print(AirportRef.to_json())

# convert the object into a dict
airport_ref_dict = airport_ref_instance.to_dict()
# create an instance of AirportRef from a dict
airport_ref_from_dict = AirportRef.from_dict(airport_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


