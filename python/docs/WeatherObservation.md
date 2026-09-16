# WeatherObservation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_temp_c** | **float** |  | [optional] 
**condition** | **str** |  | [optional] 
**var_date** | **str** |  | 
**description** | **str** |  | 
**max_temp_c** | **float** |  | [optional] 
**min_temp_c** | **float** |  | [optional] 
**source** | **str** |  | 
**temperature_celsius** | **float** |  | 

## Example

```python
from myescapeplan.models.weather_observation import WeatherObservation

# TODO update the JSON string below
json = "{}"
# create an instance of WeatherObservation from a JSON string
weather_observation_instance = WeatherObservation.from_json(json)
# print the JSON string representation of the object
print(WeatherObservation.to_json())

# convert the object into a dict
weather_observation_dict = weather_observation_instance.to_dict()
# create an instance of WeatherObservation from a dict
weather_observation_from_dict = WeatherObservation.from_dict(weather_observation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


