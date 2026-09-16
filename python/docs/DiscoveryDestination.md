# DiscoveryDestination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** |  | [optional] 
**country_name** | **str** |  | [optional] 
**display_name** | **str** |  | 
**id** | **UUID** |  | 
**image** | [**ImageObject**](ImageObject.md) |  | [optional] 
**kind** | **str** |  | [optional] 
**name** | **str** |  | 
**region** | **str** |  | [optional] 
**subtitle** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.discovery_destination import DiscoveryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryDestination from a JSON string
discovery_destination_instance = DiscoveryDestination.from_json(json)
# print the JSON string representation of the object
print(DiscoveryDestination.to_json())

# convert the object into a dict
discovery_destination_dict = discovery_destination_instance.to_dict()
# create an instance of DiscoveryDestination from a dict
discovery_destination_from_dict = DiscoveryDestination.from_dict(discovery_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


