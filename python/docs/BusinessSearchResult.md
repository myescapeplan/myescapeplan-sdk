# BusinessSearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_pricing** | [**Dict[str, BusinessPrice]**](BusinessPrice.md) |  | [optional] 
**data_status** | **Dict[str, object]** |  | [optional] 
**date_options** | [**List[BusinessDateOption]**](BusinessDateOption.md) |  | [optional] 
**dates** | [**BusinessResultDates**](BusinessResultDates.md) |  | [optional] 
**description** | **str** |  | [optional] 
**destination_access** | [**DestinationAccessSummary**](DestinationAccessSummary.md) |  | [optional] 
**destination_id** | **UUID** |  | 
**details_url** | **str** |  | [optional] 
**display_name** | **str** |  | [optional] 
**features** | **List[str]** |  | [optional] 
**flights** | [**BusinessTrackSummary**](BusinessTrackSummary.md) |  | 
**hotels** | [**BusinessTrackSummary**](BusinessTrackSummary.md) |  | 
**images** | [**List[ImageObject]**](ImageObject.md) |  | [optional] 
**price_insights** | [**List[PriceInsight]**](PriceInsight.md) |  | [optional] 
**pricing** | [**BusinessPrice**](BusinessPrice.md) |  | [optional] 
**rank** | **int** |  | [optional] 
**reason** | **str** |  | [optional] 
**rentals** | [**BusinessTrackSummary**](BusinessTrackSummary.md) |  | 
**requested_categories** | **List[str]** |  | [optional] 
**result_id** | **str** |  | 
**verified_at** | **datetime** |  | [optional] 
**weather** | [**WeatherHint**](WeatherHint.md) |  | [optional] 
**weather_data** | [**List[WeatherObservation]**](WeatherObservation.md) |  | [optional] 
**weather_status** | **str** |  | [optional] [default to 'unavailable']
**weather_summary** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.business_search_result import BusinessSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessSearchResult from a JSON string
business_search_result_instance = BusinessSearchResult.from_json(json)
# print the JSON string representation of the object
print(BusinessSearchResult.to_json())

# convert the object into a dict
business_search_result_dict = business_search_result_instance.to_dict()
# create an instance of BusinessSearchResult from a dict
business_search_result_from_dict = BusinessSearchResult.from_dict(business_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


