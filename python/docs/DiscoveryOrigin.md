# DiscoveryOrigin

Stable origin input independent of consumer planning artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airport_iata_codes** | **List[str]** |  | [optional] 
**country_code** | **str** |  | [optional] 
**iata_code** | **str** |  | [optional] 
**lat** | **float** |  | [optional] 
**lon** | **float** |  | [optional] 
**place_id** | **UUID** |  | [optional] 
**query** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.discovery_origin import DiscoveryOrigin

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryOrigin from a JSON string
discovery_origin_instance = DiscoveryOrigin.from_json(json)
# print the JSON string representation of the object
print(DiscoveryOrigin.to_json())

# convert the object into a dict
discovery_origin_dict = discovery_origin_instance.to_dict()
# create an instance of DiscoveryOrigin from a dict
discovery_origin_from_dict = DiscoveryOrigin.from_dict(discovery_origin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


