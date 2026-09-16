# DiscoveryDateBound


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earliest** | **date** |  | [optional] 
**latest** | **date** |  | [optional] 

## Example

```python
from myescapeplan.models.discovery_date_bound import DiscoveryDateBound

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryDateBound from a JSON string
discovery_date_bound_instance = DiscoveryDateBound.from_json(json)
# print the JSON string representation of the object
print(DiscoveryDateBound.to_json())

# convert the object into a dict
discovery_date_bound_dict = discovery_date_bound_instance.to_dict()
# create an instance of DiscoveryDateBound from a dict
discovery_date_bound_from_dict = DiscoveryDateBound.from_dict(discovery_date_bound_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


