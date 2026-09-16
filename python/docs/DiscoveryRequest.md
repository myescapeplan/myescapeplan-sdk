# DiscoveryRequest

Synchronous `/api/v1/business/discovery` request body.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budget** | [**DiscoveryBudget**](DiscoveryBudget.md) |  | [optional] 
**budget_tier** | **str** |  | [optional] 
**categories** | **List[str]** |  | [optional] 
**currency** | **str** |  | [optional] 
**dates** | [**DiscoveryDates**](DiscoveryDates.md) |  | [optional] 
**destination_airport_iata_codes** | **List[str]** |  | [optional] 
**destination_ids** | **List[UUID]** |  | [optional] 
**flight** | [**StructuredFlight**](StructuredFlight.md) |  | [optional] 
**language** | **str** |  | [optional] [default to 'en']
**limit** | **int** |  | [optional] 
**origin** | [**DiscoveryOrigin**](DiscoveryOrigin.md) |  | [optional] 
**party** | [**DiscoveryParty**](DiscoveryParty.md) |  | [optional] 
**preferences** | [**DiscoveryPreferences**](DiscoveryPreferences.md) |  | [optional] 
**query** | **str** |  | [optional] 
**stay** | [**StructuredStay**](StructuredStay.md) |  | [optional] 

## Example

```python
from myescapeplan.models.discovery_request import DiscoveryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryRequest from a JSON string
discovery_request_instance = DiscoveryRequest.from_json(json)
# print the JSON string representation of the object
print(DiscoveryRequest.to_json())

# convert the object into a dict
discovery_request_dict = discovery_request_instance.to_dict()
# create an instance of DiscoveryRequest from a dict
discovery_request_from_dict = DiscoveryRequest.from_dict(discovery_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


