# DiscoveryBudget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | 
**currency** | **str** |  | 
**min_amount** | **int** |  | [optional] 
**scope** | **str** |  | [optional] [default to 'per_person']

## Example

```python
from myescapeplan.models.discovery_budget import DiscoveryBudget

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryBudget from a JSON string
discovery_budget_instance = DiscoveryBudget.from_json(json)
# print the JSON string representation of the object
print(DiscoveryBudget.to_json())

# convert the object into a dict
discovery_budget_dict = discovery_budget_instance.to_dict()
# create an instance of DiscoveryBudget from a dict
discovery_budget_from_dict = DiscoveryBudget.from_dict(discovery_budget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


