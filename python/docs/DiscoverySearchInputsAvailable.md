# DiscoverySearchInputsAvailable

Whether this opportunity contains enough safe data to search each track.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accommodation** | **bool** |  | [optional] [default to False]
**events** | **bool** |  | [optional] [default to False]
**flights** | **bool** |  | [optional] [default to False]

## Example

```python
from myescapeplan.models.discovery_search_inputs_available import DiscoverySearchInputsAvailable

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoverySearchInputsAvailable from a JSON string
discovery_search_inputs_available_instance = DiscoverySearchInputsAvailable.from_json(json)
# print the JSON string representation of the object
print(DiscoverySearchInputsAvailable.to_json())

# convert the object into a dict
discovery_search_inputs_available_dict = discovery_search_inputs_available_instance.to_dict()
# create an instance of DiscoverySearchInputsAvailable from a dict
discovery_search_inputs_available_from_dict = DiscoverySearchInputsAvailable.from_dict(discovery_search_inputs_available_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


