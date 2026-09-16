# DiscoveryOpportunity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_options** | [**List[DiscoveryDateOption]**](DiscoveryDateOption.md) |  | [optional] 
**destination** | [**DiscoveryDestination**](DiscoveryDestination.md) |  | 
**destination_airport_iata_codes** | **List[str]** |  | [optional] 
**fit** | [**DiscoveryFit**](DiscoveryFit.md) |  | [optional] 
**opportunity_id** | **str** |  | 
**origin_airport_iata_codes** | **List[str]** |  | [optional] 
**rank** | **int** |  | 
**reasons** | **List[str]** |  | [optional] 
**search_inputs_available** | [**DiscoverySearchInputsAvailable**](DiscoverySearchInputsAvailable.md) |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**verification_status** | **str** |  | [optional] [default to 'not_verified']

## Example

```python
from myescapeplan.models.discovery_opportunity import DiscoveryOpportunity

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryOpportunity from a JSON string
discovery_opportunity_instance = DiscoveryOpportunity.from_json(json)
# print the JSON string representation of the object
print(DiscoveryOpportunity.to_json())

# convert the object into a dict
discovery_opportunity_dict = discovery_opportunity_instance.to_dict()
# create an instance of DiscoveryOpportunity from a dict
discovery_opportunity_from_dict = DiscoveryOpportunity.from_dict(discovery_opportunity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


