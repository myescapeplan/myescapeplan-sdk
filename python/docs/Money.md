# Money

Internal Money representation. amount_minor: integer value of the currency (e.g., cents) currency: ISO 4217 currency code (e.g., \"USD\", \"EUR\") raw_text: original raw text string if available currency_source: source of currency inference (provider, symbol_inferred, unknown) currency_confidence: confidence level of inference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_minor** | **int** |  | 
**currency** | **str** |  | 
**currency_confidence** | **str** |  | [optional] [default to 'low']
**currency_source** | **str** |  | [optional] [default to 'unknown']
**raw_text** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.money import Money

# TODO update the JSON string below
json = "{}"
# create an instance of Money from a JSON string
money_instance = Money.from_json(json)
# print the JSON string representation of the object
print(Money.to_json())

# convert the object into a dict
money_dict = money_instance.to_dict()
# create an instance of Money from a dict
money_from_dict = Money.from_dict(money_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


