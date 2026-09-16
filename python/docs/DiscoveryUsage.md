# DiscoveryUsage

Commercial usage snapshot for an authenticated Business API caller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidate_count** | **int** |  | 
**discoveries_used** | **int** |  | 
**metering_basis** | **str** |  | [optional] [default to 'request']
**plan_period_allowance** | **int** |  | 

## Example

```python
from myescapeplan.models.discovery_usage import DiscoveryUsage

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryUsage from a JSON string
discovery_usage_instance = DiscoveryUsage.from_json(json)
# print the JSON string representation of the object
print(DiscoveryUsage.to_json())

# convert the object into a dict
discovery_usage_dict = discovery_usage_instance.to_dict()
# create an instance of DiscoveryUsage from a dict
discovery_usage_from_dict = DiscoveryUsage.from_dict(discovery_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


