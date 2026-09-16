# BusinessDetailDateOption

Date-option detail without the disabled event inventory track.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidate_id** | **str** |  | [optional] 
**date_option_kind** | [**DateOptionKind**](DateOptionKind.md) |  | [optional] 
**dates** | [**DateRange**](DateRange.md) |  | 
**flight_summary** | [**DateOptionComponentSummary**](DateOptionComponentSummary.md) |  | [optional] 
**hotel_summary** | [**DateOptionComponentSummary**](DateOptionComponentSummary.md) |  | [optional] 
**price_insights** | [**List[PriceInsight]**](PriceInsight.md) |  | [optional] 
**primary_price_insight** | [**PriceInsight**](PriceInsight.md) |  | [optional] 
**rental_summary** | [**DateOptionComponentSummary**](DateOptionComponentSummary.md) |  | [optional] 
**required_categories** | **List[str]** |  | [optional] 
**status** | **str** |  | [optional] 
**total_price** | [**TripPrice**](TripPrice.md) |  | [optional] 

## Example

```python
from myescapeplan.models.business_detail_date_option import BusinessDetailDateOption

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessDetailDateOption from a JSON string
business_detail_date_option_instance = BusinessDetailDateOption.from_json(json)
# print the JSON string representation of the object
print(BusinessDetailDateOption.to_json())

# convert the object into a dict
business_detail_date_option_dict = business_detail_date_option_instance.to_dict()
# create an instance of BusinessDetailDateOption from a dict
business_detail_date_option_from_dict = BusinessDetailDateOption.from_dict(business_detail_date_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


