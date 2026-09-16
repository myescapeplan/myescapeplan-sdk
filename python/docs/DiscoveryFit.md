# DiscoveryFit

Stable qualitative fit. Raw planner scores are deliberately private.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** |  | [optional] [default to 'unknown']
**reason** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.discovery_fit import DiscoveryFit

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryFit from a JSON string
discovery_fit_instance = DiscoveryFit.from_json(json)
# print the JSON string representation of the object
print(DiscoveryFit.to_json())

# convert the object into a dict
discovery_fit_dict = discovery_fit_instance.to_dict()
# create an instance of DiscoveryFit from a dict
discovery_fit_from_dict = DiscoveryFit.from_dict(discovery_fit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


