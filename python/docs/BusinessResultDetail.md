# BusinessResultDetail

Rich Business result detail backed by the consumer result contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_links** | [**List[AffiliateLink]**](AffiliateLink.md) |  | [optional] 
**destination_access** | [**DestinationAccessSummary**](DestinationAccessSummary.md) |  | [optional] 
**detail** | [**BusinessTripResultDetail**](BusinessTripResultDetail.md) |  | 
**flights** | [**List[SlimStandardizedFlightOffer]**](SlimStandardizedFlightOffer.md) |  | [optional] 
**has_more_flights** | **bool** |  | [optional] [default to False]
**has_more_hotels** | **bool** |  | [optional] [default to False]
**has_more_rentals** | **bool** |  | [optional] [default to False]
**hotels** | [**List[SlimStandardizedStay]**](SlimStandardizedStay.md) |  | [optional] 
**rentals** | [**List[SlimStandardizedStay]**](SlimStandardizedStay.md) |  | [optional] 
**result** | [**BusinessSearchResult**](BusinessSearchResult.md) |  | 
**weather** | [**WeatherHint**](WeatherHint.md) |  | [optional] 
**weather_data** | [**List[WeatherObservation]**](WeatherObservation.md) |  | [optional] 
**weather_status** | **str** |  | [optional] [default to 'unavailable']

## Example

```python
from myescapeplan.models.business_result_detail import BusinessResultDetail

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessResultDetail from a JSON string
business_result_detail_instance = BusinessResultDetail.from_json(json)
# print the JSON string representation of the object
print(BusinessResultDetail.to_json())

# convert the object into a dict
business_result_detail_dict = business_result_detail_instance.to_dict()
# create an instance of BusinessResultDetail from a dict
business_result_detail_from_dict = BusinessResultDetail.from_dict(business_result_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


