# StandardizedStayOffer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_in_date** | **str** |  | [optional] 
**check_out_date** | **str** |  | [optional] 
**currency** | **str** |  | [optional] 
**nightly_price** | **float** |  | [optional] 
**price_insights** | [**List[PriceInsight]**](PriceInsight.md) |  | [optional] 
**price_total** | **float** |  | [optional] 
**primary_price_insight** | [**PriceInsight**](PriceInsight.md) |  | [optional] 
**taxes_fees_included** | **bool** |  | [optional] 

## Example

```python
from myescapeplan.models.standardized_stay_offer import StandardizedStayOffer

# TODO update the JSON string below
json = "{}"
# create an instance of StandardizedStayOffer from a JSON string
standardized_stay_offer_instance = StandardizedStayOffer.from_json(json)
# print the JSON string representation of the object
print(StandardizedStayOffer.to_json())

# convert the object into a dict
standardized_stay_offer_dict = standardized_stay_offer_instance.to_dict()
# create an instance of StandardizedStayOffer from a dict
standardized_stay_offer_from_dict = StandardizedStayOffer.from_dict(standardized_stay_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


