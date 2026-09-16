# DiscoveryMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidate_count** | **int** |  | [optional] [default to 0]
**contract_version** | **str** |  | [optional] [default to 'travel.discovery.v1']
**snapshot_version** | **str** |  | [optional] 
**usage** | [**DiscoveryUsage**](DiscoveryUsage.md) |  | [optional] 

## Example

```python
from myescapeplan.models.discovery_meta import DiscoveryMeta

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryMeta from a JSON string
discovery_meta_instance = DiscoveryMeta.from_json(json)
# print the JSON string representation of the object
print(DiscoveryMeta.to_json())

# convert the object into a dict
discovery_meta_dict = discovery_meta_instance.to_dict()
# create an instance of DiscoveryMeta from a dict
discovery_meta_from_dict = DiscoveryMeta.from_dict(discovery_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


