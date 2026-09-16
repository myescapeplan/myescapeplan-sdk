# DiscoveryDestinationReference

Canonical destination identity from the active Discovery planner snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** |  | [optional] 
**display_name** | **str** |  | 
**id** | **UUID** |  | 
**kind** | **str** |  | [optional] 
**lat** | **float** |  | [optional] 
**lon** | **float** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from myescapeplan.models.discovery_destination_reference import DiscoveryDestinationReference

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryDestinationReference from a JSON string
discovery_destination_reference_instance = DiscoveryDestinationReference.from_json(json)
# print the JSON string representation of the object
print(DiscoveryDestinationReference.to_json())

# convert the object into a dict
discovery_destination_reference_dict = discovery_destination_reference_instance.to_dict()
# create an instance of DiscoveryDestinationReference from a dict
discovery_destination_reference_from_dict = DiscoveryDestinationReference.from_dict(discovery_destination_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


