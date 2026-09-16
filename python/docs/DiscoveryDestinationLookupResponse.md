# DiscoveryDestinationLookupResponse

Public destination lookup result for clients authoring destination_ids.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | [**List[DiscoveryDestinationReference]**](DiscoveryDestinationReference.md) |  | [optional] 
**query** | **str** |  | 

## Example

```python
from myescapeplan.models.discovery_destination_lookup_response import DiscoveryDestinationLookupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryDestinationLookupResponse from a JSON string
discovery_destination_lookup_response_instance = DiscoveryDestinationLookupResponse.from_json(json)
# print the JSON string representation of the object
print(DiscoveryDestinationLookupResponse.to_json())

# convert the object into a dict
discovery_destination_lookup_response_dict = discovery_destination_lookup_response_instance.to_dict()
# create an instance of DiscoveryDestinationLookupResponse from a dict
discovery_destination_lookup_response_from_dict = DiscoveryDestinationLookupResponse.from_dict(discovery_destination_lookup_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


