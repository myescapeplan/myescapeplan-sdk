# DateOptionComponentSummary

Lightweight component inventory for one exact date option.  Component metadata is deliberately scoped to the DateOption instead of the destination card. This prevents a selected sibling date from displaying a flight/stay count or \"from\" price that belongs to another date variant.  Keep property/destination metadata such as amenities, images, descriptions, reviews, and static events OUT of this model. Those are deduped at their natural property/destination scope and selected by candidate/date identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_price** | [**TripPrice**](TripPrice.md) |  | [optional] 
**option_count** | **int** |  | [optional] 

## Example

```python
from myescapeplan.models.date_option_component_summary import DateOptionComponentSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DateOptionComponentSummary from a JSON string
date_option_component_summary_instance = DateOptionComponentSummary.from_json(json)
# print the JSON string representation of the object
print(DateOptionComponentSummary.to_json())

# convert the object into a dict
date_option_component_summary_dict = date_option_component_summary_instance.to_dict()
# create an instance of DateOptionComponentSummary from a dict
date_option_component_summary_from_dict = DateOptionComponentSummary.from_dict(date_option_component_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


