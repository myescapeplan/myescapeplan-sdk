# DiscoveryParty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adults** | **int** |  | [optional] [default to 1]
**children** | **int** |  | [optional] [default to 0]

## Example

```python
from myescapeplan.models.discovery_party import DiscoveryParty

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryParty from a JSON string
discovery_party_instance = DiscoveryParty.from_json(json)
# print the JSON string representation of the object
print(DiscoveryParty.to_json())

# convert the object into a dict
discovery_party_dict = discovery_party_instance.to_dict()
# create an instance of DiscoveryParty from a dict
discovery_party_from_dict = DiscoveryParty.from_dict(discovery_party_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


