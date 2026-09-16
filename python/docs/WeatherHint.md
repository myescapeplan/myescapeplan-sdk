# WeatherHint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **str** |  | 
**is_approx** | **bool** |  | 
**source** | **str** |  | 
**typical_high_c** | **float** |  | 
**typical_low_c** | **float** |  | 

## Example

```python
from myescapeplan.models.weather_hint import WeatherHint

# TODO update the JSON string below
json = "{}"
# create an instance of WeatherHint from a JSON string
weather_hint_instance = WeatherHint.from_json(json)
# print the JSON string representation of the object
print(WeatherHint.to_json())

# convert the object into a dict
weather_hint_dict = weather_hint_instance.to_dict()
# create an instance of WeatherHint from a dict
weather_hint_from_dict = WeatherHint.from_dict(weather_hint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


