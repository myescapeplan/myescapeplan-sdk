# TripPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breakdown** | **Dict[str, object]** |  | [optional] 
**currency** | **str** |  | 
**total** | **float** |  | 

## Example

```python
from myescapeplan.models.trip_price import TripPrice

# TODO update the JSON string below
json = "{}"
# create an instance of TripPrice from a JSON string
trip_price_instance = TripPrice.from_json(json)
# print the JSON string representation of the object
print(TripPrice.to_json())

# convert the object into a dict
trip_price_dict = trip_price_instance.to_dict()
# create an instance of TripPrice from a dict
trip_price_from_dict = TripPrice.from_dict(trip_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


