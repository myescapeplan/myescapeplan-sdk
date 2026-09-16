# DiscoveryInterpretation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adults** | **int** |  | [optional] [default to 1]
**budget_amount** | [**BudgetAmount**](BudgetAmount.md) |  | [optional] 
**budget_currency** | **str** |  | [optional] 
**budget_scope** | **str** |  | [optional] 
**categories** | **List[str]** |  | [optional] 
**children** | **int** |  | [optional] [default to 0]
**date_mode** | **str** |  | [optional] 
**date_text** | **str** |  | [optional] 
**duration_nights** | **int** |  | [optional] 
**end_date** | **str** |  | [optional] 
**origin** | **str** |  | [optional] 
**start_date** | **str** |  | [optional] 
**title** | **str** |  | 
**warnings** | **List[str]** |  | [optional] 

## Example

```python
from myescapeplan.models.discovery_interpretation import DiscoveryInterpretation

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryInterpretation from a JSON string
discovery_interpretation_instance = DiscoveryInterpretation.from_json(json)
# print the JSON string representation of the object
print(DiscoveryInterpretation.to_json())

# convert the object into a dict
discovery_interpretation_dict = discovery_interpretation_instance.to_dict()
# create an instance of DiscoveryInterpretation from a dict
discovery_interpretation_from_dict = DiscoveryInterpretation.from_dict(discovery_interpretation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


