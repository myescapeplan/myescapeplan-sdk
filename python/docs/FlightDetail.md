# FlightDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flight** | [**SlimStandardizedFlightOffer**](SlimStandardizedFlightOffer.md) |  | 

## Example

```python
from myescapeplan.models.flight_detail import FlightDetail

# TODO update the JSON string below
json = "{}"
# create an instance of FlightDetail from a JSON string
flight_detail_instance = FlightDetail.from_json(json)
# print the JSON string representation of the object
print(FlightDetail.to_json())

# convert the object into a dict
flight_detail_dict = flight_detail_instance.to_dict()
# create an instance of FlightDetail from a dict
flight_detail_from_dict = FlightDetail.from_dict(flight_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


