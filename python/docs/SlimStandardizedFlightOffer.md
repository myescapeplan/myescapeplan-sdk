# SlimStandardizedFlightOffer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_unlock_return** | **bool** |  | [optional] [default to False]
**currency** | **str** |  | [optional] 
**emissions_grams_co2e** | **int** |  | [optional] 
**emissions_level** | **str** |  | [optional] 
**legs** | [**List[StandardizedFlightLeg]**](StandardizedFlightLeg.md) |  | 
**marketing_carriers** | **List[str]** |  | [optional] 
**max_segment_duration_minutes** | **int** |  | [optional] 
**offer_id** | **str** |  | 
**operating_carriers** | **List[str]** |  | [optional] 
**outbound_selection_id** | **str** |  | [optional] 
**price_breakdown** | **Dict[str, int]** |  | [optional] 
**price_insights** | [**List[PriceInsight]**](PriceInsight.md) |  | [optional] 
**price_provenance** | **str** |  | 
**price_total** | **float** |  | [optional] 
**primary_price_insight** | [**PriceInsight**](PriceInsight.md) |  | [optional] 
**provider** | **str** |  | 
**provider_urls** | [**List[ProviderUrl]**](ProviderUrl.md) |  | [optional] 
**total_duration_minutes** | **int** |  | [optional] 
**trip_type** | **str** |  | 

## Example

```python
from myescapeplan.models.slim_standardized_flight_offer import SlimStandardizedFlightOffer

# TODO update the JSON string below
json = "{}"
# create an instance of SlimStandardizedFlightOffer from a JSON string
slim_standardized_flight_offer_instance = SlimStandardizedFlightOffer.from_json(json)
# print the JSON string representation of the object
print(SlimStandardizedFlightOffer.to_json())

# convert the object into a dict
slim_standardized_flight_offer_dict = slim_standardized_flight_offer_instance.to_dict()
# create an instance of SlimStandardizedFlightOffer from a dict
slim_standardized_flight_offer_from_dict = SlimStandardizedFlightOffer.from_dict(slim_standardized_flight_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


