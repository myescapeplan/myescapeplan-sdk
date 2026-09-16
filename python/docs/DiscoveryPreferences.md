# DiscoveryPreferences


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_preferences** | **List[str]** |  | [optional] 
**event_types** | **List[str]** |  | [optional] 
**interests** | **List[str]** |  | [optional] 
**pace** | **str** |  | [optional] 
**trip_dimensions** | **List[str]** |  | [optional] 
**weather** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.discovery_preferences import DiscoveryPreferences

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryPreferences from a JSON string
discovery_preferences_instance = DiscoveryPreferences.from_json(json)
# print the JSON string representation of the object
print(DiscoveryPreferences.to_json())

# convert the object into a dict
discovery_preferences_dict = discovery_preferences_instance.to_dict()
# create an instance of DiscoveryPreferences from a dict
discovery_preferences_from_dict = DiscoveryPreferences.from_dict(discovery_preferences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


