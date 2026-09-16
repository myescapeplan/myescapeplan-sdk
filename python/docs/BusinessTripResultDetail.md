# BusinessTripResultDetail

Consumer detail projection with event inventory intentionally disabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_links** | [**List[AffiliateLink]**](AffiliateLink.md) |  | [optional] 
**airport_refs** | [**Dict[str, AirportRef]**](AirportRef.md) |  | [optional] 
**date_options** | [**List[BusinessDetailDateOption]**](BusinessDetailDateOption.md) |  | [optional] 
**description** | **str** |  | [optional] 
**destination_access** | [**DestinationAccessSummary**](DestinationAccessSummary.md) |  | [optional] 
**destination_reason** | [**DestinationReasonPayload**](DestinationReasonPayload.md) |  | [optional] 
**display_name** | **str** |  | [optional] 
**error_message** | **str** |  | [optional] 
**flights** | [**List[FlightDetail]**](FlightDetail.md) |  | [optional] 
**has_more_flights** | **bool** |  | [optional] 
**has_more_hotels** | **bool** |  | [optional] 
**has_more_vacation_rentals** | **bool** |  | [optional] 
**hotels** | [**List[StayDetail]**](StayDetail.md) |  | [optional] 
**images** | [**List[ImageObject]**](ImageObject.md) |  | [optional] 
**price_insights** | [**List[PriceInsight]**](PriceInsight.md) |  | [optional] 
**primary_price_insight** | [**PriceInsight**](PriceInsight.md) |  | [optional] 
**reason** | **str** |  | [optional] 
**rentals** | [**List[StayDetail]**](StayDetail.md) |  | [optional] 
**requested_categories** | **List[str]** |  | [optional] 
**run_id** | **str** |  | [optional] 
**search_id** | **str** |  | [optional] 
**spec_hash** | **str** |  | [optional] 
**status** | **str** |  | 
**total_flights_count** | **int** |  | [optional] 
**total_hotels_count** | **int** |  | [optional] 
**total_price** | [**TripPrice**](TripPrice.md) |  | [optional] 
**total_vacation_rentals_count** | **int** |  | [optional] 
**trip_dates** | [**DateRange**](DateRange.md) |  | [optional] 

## Example

```python
from myescapeplan.models.business_trip_result_detail import BusinessTripResultDetail

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessTripResultDetail from a JSON string
business_trip_result_detail_instance = BusinessTripResultDetail.from_json(json)
# print the JSON string representation of the object
print(BusinessTripResultDetail.to_json())

# convert the object into a dict
business_trip_result_detail_dict = business_trip_result_detail_instance.to_dict()
# create an instance of BusinessTripResultDetail from a dict
business_trip_result_detail_from_dict = BusinessTripResultDetail.from_dict(business_trip_result_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


