# EventDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**StandardizedEvent**](StandardizedEvent.md) |  | 

## Example

```python
from myescapeplan.models.event_detail import EventDetail

# TODO update the JSON string below
json = "{}"
# create an instance of EventDetail from a JSON string
event_detail_instance = EventDetail.from_json(json)
# print the JSON string representation of the object
print(EventDetail.to_json())

# convert the object into a dict
event_detail_dict = event_detail_instance.to_dict()
# create an instance of EventDetail from a dict
event_detail_from_dict = EventDetail.from_dict(event_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


