# PriceInsight

A truthful, display-ready claim about one exact price identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basis** | [**PriceBasis**](PriceBasis.md) |  | 
**change_amount** | **float** |  | [optional] 
**change_percent** | **float** |  | [optional] 
**comparison_key** | **str** |  | 
**confidence** | **float** |  | [optional] 
**currency** | **str** |  | 
**current_amount** | **float** |  | 
**expires_at** | **datetime** |  | [optional] 
**explanation** | **str** |  | 
**id** | **str** |  | 
**is_new_low** | **bool** |  | [optional] 
**kind** | [**PriceInsightKind**](PriceInsightKind.md) |  | 
**label** | **str** |  | 
**observation_count** | **int** |  | [optional] 
**observed_at** | **datetime** |  | 
**previous_amount** | **float** |  | [optional] 
**provider_name** | **str** |  | [optional] 
**relative_band** | **str** |  | [optional] 
**scope** | [**PriceInsightScope**](PriceInsightScope.md) |  | 
**source** | [**PriceInsightSource**](PriceInsightSource.md) |  | 
**threshold_amount** | **float** |  | [optional] 

## Example

```python
from myescapeplan.models.price_insight import PriceInsight

# TODO update the JSON string below
json = "{}"
# create an instance of PriceInsight from a JSON string
price_insight_instance = PriceInsight.from_json(json)
# print the JSON string representation of the object
print(PriceInsight.to_json())

# convert the object into a dict
price_insight_dict = price_insight_instance.to_dict()
# create an instance of PriceInsight from a dict
price_insight_from_dict = PriceInsight.from_dict(price_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


