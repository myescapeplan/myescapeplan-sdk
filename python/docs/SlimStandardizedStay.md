# SlimStandardizedStay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**amenity_types** | **List[str]** |  | [optional] 
**bathrooms_min** | **int** |  | [optional] 
**bedrooms_min** | **int** |  | [optional] 
**check_in_time** | **str** |  | [optional] 
**check_out_time** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**country_code** | **str** |  | [optional] 
**deal** | [**StayDealSignal**](StayDealSignal.md) |  | [optional] 
**description** | **str** |  | [optional] 
**distance_from_beach_km** | **float** |  | [optional] 
**eco_certified** | **bool** |  | [optional] 
**free_cancellation** | **bool** |  | [optional] 
**hotel_class** | **int** |  | [optional] 
**id** | **str** |  | [readonly] 
**images** | [**List[ImageObject]**](ImageObject.md) |  | [optional] 
**is_vacation_rental** | **bool** |  | 
**lat** | **float** |  | [optional] 
**location_rating** | **float** |  | [optional] 
**lon** | **float** |  | [optional] 
**name** | **str** |  | 
**nearby_places** | [**List[StayNearbyPlace]**](StayNearbyPlace.md) |  | [optional] 
**offer_snapshot** | [**StandardizedStayOffer**](StandardizedStayOffer.md) |  | [optional] 
**price_insights** | [**List[PriceInsight]**](PriceInsight.md) |  | [optional] 
**primary_price_insight** | [**PriceInsight**](PriceInsight.md) |  | [optional] 
**property_token** | **str** |  | [optional] 
**property_type** | **str** |  | [optional] 
**provider** | **str** |  | 
**provider_property_id** | **str** |  | 
**provider_urls** | [**List[ProviderUrl]**](ProviderUrl.md) |  | [optional] 
**rating_bucket** | **str** |  | [optional] 
**rating_count** | **int** |  | [optional] 
**rating_distribution** | [**List[StayRatingBucket]**](StayRatingBucket.md) |  | [optional] 
**rating_value** | **float** |  | [optional] 
**raw_amenities** | **List[str]** |  | [optional] 
**region** | **str** |  | [optional] 
**review_topics** | [**List[StayReviewTopic]**](StayReviewTopic.md) |  | [optional] 
**sleeps** | **int** |  | [optional] 
**special_offers** | **bool** |  | [optional] 
**stay_kind** | **str** |  | 

## Example

```python
from myescapeplan.models.slim_standardized_stay import SlimStandardizedStay

# TODO update the JSON string below
json = "{}"
# create an instance of SlimStandardizedStay from a JSON string
slim_standardized_stay_instance = SlimStandardizedStay.from_json(json)
# print the JSON string representation of the object
print(SlimStandardizedStay.to_json())

# convert the object into a dict
slim_standardized_stay_dict = slim_standardized_stay_instance.to_dict()
# create an instance of SlimStandardizedStay from a dict
slim_standardized_stay_from_dict = SlimStandardizedStay.from_dict(slim_standardized_stay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


