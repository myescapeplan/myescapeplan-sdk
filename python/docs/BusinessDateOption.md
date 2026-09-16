# BusinessDateOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_option_id** | **str** |  | 
**date_type** | **str** |  | [optional] [default to 'unknown']
**end_date** | **date** |  | 
**flights** | [**BusinessTrackSummary**](BusinessTrackSummary.md) |  | [optional] 
**hotels** | [**BusinessTrackSummary**](BusinessTrackSummary.md) |  | [optional] 
**nights** | **int** |  | 
**price_insights** | [**List[PriceInsight]**](PriceInsight.md) |  | [optional] 
**pricing** | [**BusinessPrice**](BusinessPrice.md) |  | [optional] 
**primary_price_insight** | [**PriceInsight**](PriceInsight.md) |  | [optional] 
**rentals** | [**BusinessTrackSummary**](BusinessTrackSummary.md) |  | [optional] 
**start_date** | **date** |  | 
**status** | **str** |  | [optional] [default to 'pending']
**unpriced_reason** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.business_date_option import BusinessDateOption

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessDateOption from a JSON string
business_date_option_instance = BusinessDateOption.from_json(json)
# print the JSON string representation of the object
print(BusinessDateOption.to_json())

# convert the object into a dict
business_date_option_dict = business_date_option_instance.to_dict()
# create an instance of BusinessDateOption from a dict
business_date_option_from_dict = BusinessDateOption.from_dict(business_date_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


