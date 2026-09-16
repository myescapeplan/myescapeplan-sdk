# BusinessSearchCreateRequest

Detached verified search over the shared Business travel intent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budget** | [**DiscoveryBudget**](DiscoveryBudget.md) |  | [optional] 
**budget_tier** | **str** |  | [optional] 
**categories** | **List[str]** |  | [optional] 
**currency** | **str** |  | [optional] 
**date_option_id** | **str** |  | [optional] 
**dates** | [**DiscoveryDates**](DiscoveryDates.md) |  | [optional] 
**destination_airport_iata_codes** | **List[str]** |  | [optional] 
**destination_ids** | **List[UUID]** |  | [optional] 
**discovery_id** | **str** |  | [optional] 
**flight** | [**StructuredFlight**](StructuredFlight.md) |  | [optional] 
**include_images** | **bool** | Whether destination and offer image metadata should be included in results and details. | [optional] [default to True]
**language** | **str** |  | [optional] [default to 'en']
**max_results** | **int** |  | [optional] [default to 10]
**opportunity_id** | **str** |  | [optional] 
**origin** | [**DiscoveryOrigin**](DiscoveryOrigin.md) |  | [optional] 
**party** | [**DiscoveryParty**](DiscoveryParty.md) |  | [optional] 
**preferences** | [**DiscoveryPreferences**](DiscoveryPreferences.md) |  | [optional] 
**query** | **str** |  | [optional] 
**stay** | [**StructuredStay**](StructuredStay.md) |  | [optional] 

## Example

```python
from myescapeplan.models.business_search_create_request import BusinessSearchCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessSearchCreateRequest from a JSON string
business_search_create_request_instance = BusinessSearchCreateRequest.from_json(json)
# print the JSON string representation of the object
print(BusinessSearchCreateRequest.to_json())

# convert the object into a dict
business_search_create_request_dict = business_search_create_request_instance.to_dict()
# create an instance of BusinessSearchCreateRequest from a dict
business_search_create_request_from_dict = BusinessSearchCreateRequest.from_dict(business_search_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


