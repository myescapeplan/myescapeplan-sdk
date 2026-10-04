# StandardizedEvent

Provider-normalized event representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**category** | **str** |  | [optional] 
**date_unverified** | **bool** |  | [optional] [default to False]
**debug_info** | **Dict[str, object]** |  | [optional] 
**description** | **str** |  | [optional] 
**duration_minutes** | **int** |  | [optional] 
**end** | **datetime** |  | [optional] 
**experience_type** | **str** |  | [optional] 
**fx_as_of** | **date** |  | [optional] 
**geo_unverified** | **bool** |  | [optional] [default to False]
**id** | **str** |  | [optional] 
**image_url** | **str** |  | [optional] 
**image_urls** | **List[str]** |  | [optional] 
**is_approx** | **bool** |  | [optional] [default to False]
**is_time_bounded** | **bool** |  | [optional] [default to True]
**kind** | **str** |  | [optional] [default to 'event']
**latitude** | **float** |  | [optional] 
**location_name** | **str** |  | [optional] 
**location_ref** | **str** |  | [optional] 
**longitude** | **float** |  | [optional] 
**money_display** | [**Money**](Money.md) |  | [optional] 
**money_original** | [**Money**](Money.md) |  | [optional] 
**price_note** | **str** |  | [optional] 
**provider** | **str** |  | [optional] 
**provider_product_id** | **str** |  | [optional] 
**provider_urls** | [**List[ProviderUrl]**](ProviderUrl.md) |  | [optional] [default to []]
**rating** | **float** |  | [optional] 
**reviews** | **int** |  | [optional] 
**start** | **datetime** |  | [optional] 
**ticket_url** | **str** |  | [optional] 
**timezone** | **str** |  | [optional] 
**title** | **str** |  | 
**venue** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.standardized_event import StandardizedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of StandardizedEvent from a JSON string
standardized_event_instance = StandardizedEvent.from_json(json)
# print the JSON string representation of the object
print(StandardizedEvent.to_json())

# convert the object into a dict
standardized_event_dict = standardized_event_instance.to_dict()
# create an instance of StandardizedEvent from a dict
standardized_event_from_dict = StandardizedEvent.from_dict(standardized_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


