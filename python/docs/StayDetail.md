# StayDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stay** | [**SlimStandardizedStay**](SlimStandardizedStay.md) |  | 

## Example

```python
from myescapeplan.models.stay_detail import StayDetail

# TODO update the JSON string below
json = "{}"
# create an instance of StayDetail from a JSON string
stay_detail_instance = StayDetail.from_json(json)
# print the JSON string representation of the object
print(StayDetail.to_json())

# convert the object into a dict
stay_detail_dict = stay_detail_instance.to_dict()
# create an instance of StayDetail from a dict
stay_detail_from_dict = StayDetail.from_dict(stay_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


