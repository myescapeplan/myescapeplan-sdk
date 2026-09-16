# DiscoveryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovery_id** | **str** |  | 
**expires_at** | **datetime** |  | 
**idempotency_key** | **str** |  | [optional] 
**interpreted_request** | [**DiscoveryInterpretation**](DiscoveryInterpretation.md) |  | 
**meta** | [**DiscoveryMeta**](DiscoveryMeta.md) |  | [optional] 
**opportunities** | [**List[DiscoveryOpportunity]**](DiscoveryOpportunity.md) |  | [optional] 
**reason** | **str** |  | [optional] 
**request_id** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from myescapeplan.models.discovery_response import DiscoveryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryResponse from a JSON string
discovery_response_instance = DiscoveryResponse.from_json(json)
# print the JSON string representation of the object
print(DiscoveryResponse.to_json())

# convert the object into a dict
discovery_response_dict = discovery_response_instance.to_dict()
# create an instance of DiscoveryResponse from a dict
discovery_response_from_dict = DiscoveryResponse.from_dict(discovery_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


