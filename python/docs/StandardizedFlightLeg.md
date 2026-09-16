# StandardizedFlightLeg


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arrival_airport** | **str** |  | [optional] 
**arrival_time_local** | **str** |  | [optional] 
**arrival_time_utc** | **datetime** |  | [optional] 
**arrival_timezone** | **str** |  | [optional] 
**departure_airport** | **str** |  | [optional] 
**departure_time_local** | **str** |  | [optional] 
**departure_time_utc** | **datetime** |  | [optional] 
**departure_timezone** | **str** |  | [optional] 
**duration_minutes** | **int** |  | [optional] 
**layover_minutes_total** | **int** |  | [optional] 
**leg_index** | **int** |  | 
**segments** | [**List[StandardizedFlightSegment]**](StandardizedFlightSegment.md) |  | 
**stop_count** | **int** |  | [optional] 

## Example

```python
from myescapeplan.models.standardized_flight_leg import StandardizedFlightLeg

# TODO update the JSON string below
json = "{}"
# create an instance of StandardizedFlightLeg from a JSON string
standardized_flight_leg_instance = StandardizedFlightLeg.from_json(json)
# print the JSON string representation of the object
print(StandardizedFlightLeg.to_json())

# convert the object into a dict
standardized_flight_leg_dict = standardized_flight_leg_instance.to_dict()
# create an instance of StandardizedFlightLeg from a dict
standardized_flight_leg_from_dict = StandardizedFlightLeg.from_dict(standardized_flight_leg_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


