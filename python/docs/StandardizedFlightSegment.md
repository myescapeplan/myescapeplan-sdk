# StandardizedFlightSegment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aircraft** | **str** |  | [optional] 
**arrival_airport** | **str** |  | [optional] 
**arrival_time_local** | **str** |  | [optional] 
**arrival_time_utc** | **datetime** |  | [optional] 
**arrival_timezone** | **str** |  | [optional] 
**cabin_class** | **str** |  | [optional] 
**departure_airport** | **str** |  | [optional] 
**departure_time_local** | **str** |  | [optional] 
**departure_time_utc** | **datetime** |  | [optional] 
**departure_timezone** | **str** |  | [optional] 
**duration_minutes** | **int** |  | [optional] 
**flight_number** | **str** |  | [optional] 
**marketing_carrier** | **str** |  | [optional] 
**operating_carrier** | **str** |  | [optional] 
**segment_index** | **int** |  | 

## Example

```python
from myescapeplan.models.standardized_flight_segment import StandardizedFlightSegment

# TODO update the JSON string below
json = "{}"
# create an instance of StandardizedFlightSegment from a JSON string
standardized_flight_segment_instance = StandardizedFlightSegment.from_json(json)
# print the JSON string representation of the object
print(StandardizedFlightSegment.to_json())

# convert the object into a dict
standardized_flight_segment_dict = standardized_flight_segment_instance.to_dict()
# create an instance of StandardizedFlightSegment from a dict
standardized_flight_segment_from_dict = StandardizedFlightSegment.from_dict(standardized_flight_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


