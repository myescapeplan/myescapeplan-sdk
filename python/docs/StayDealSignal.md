# StayDealSignal

Public provider deal context for a stay.  This is display/explainability data only. It should not be treated as a Voyager learned-price baseline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**direction** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**percent_delta** | **int** |  | [optional] 
**source** | **str** |  | [optional] [default to 'provider']

## Example

```python
from myescapeplan.models.stay_deal_signal import StayDealSignal

# TODO update the JSON string below
json = "{}"
# create an instance of StayDealSignal from a JSON string
stay_deal_signal_instance = StayDealSignal.from_json(json)
# print the JSON string representation of the object
print(StayDealSignal.to_json())

# convert the object into a dict
stay_deal_signal_dict = stay_deal_signal_instance.to_dict()
# create an instance of StayDealSignal from a dict
stay_deal_signal_from_dict = StayDealSignal.from_dict(stay_deal_signal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


