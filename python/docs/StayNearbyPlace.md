# StayNearbyPlace


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**transportations** | [**List[StayTransportOption]**](StayTransportOption.md) |  | [optional] 

## Example

```python
from myescapeplan.models.stay_nearby_place import StayNearbyPlace

# TODO update the JSON string below
json = "{}"
# create an instance of StayNearbyPlace from a JSON string
stay_nearby_place_instance = StayNearbyPlace.from_json(json)
# print the JSON string representation of the object
print(StayNearbyPlace.to_json())

# convert the object into a dict
stay_nearby_place_dict = stay_nearby_place_instance.to_dict()
# create an instance of StayNearbyPlace from a dict
stay_nearby_place_from_dict = StayNearbyPlace.from_dict(stay_nearby_place_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


