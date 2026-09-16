# StayTransportOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_minutes** | **int** |  | [optional] 
**duration_text** | **str** |  | 
**mode** | **str** |  | 

## Example

```python
from myescapeplan.models.stay_transport_option import StayTransportOption

# TODO update the JSON string below
json = "{}"
# create an instance of StayTransportOption from a JSON string
stay_transport_option_instance = StayTransportOption.from_json(json)
# print the JSON string representation of the object
print(StayTransportOption.to_json())

# convert the object into a dict
stay_transport_option_dict = stay_transport_option_instance.to_dict()
# create an instance of StayTransportOption from a dict
stay_transport_option_from_dict = StayTransportOption.from_dict(stay_transport_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


