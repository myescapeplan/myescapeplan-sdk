# DestinationAccessSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **str** |  | [optional] [default to 'medium']
**crosses_border** | **bool** |  | [optional] [default to False]
**destination_name** | **str** |  | 
**destination_place_id** | **str** |  | 
**estimated_duration_minutes** | **int** |  | [optional] 
**gateway_name** | **str** |  | 
**gateway_place_id** | **str** |  | 
**summary_text** | **str** |  | 
**transfer_mode** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.destination_access_summary import DestinationAccessSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationAccessSummary from a JSON string
destination_access_summary_instance = DestinationAccessSummary.from_json(json)
# print the JSON string representation of the object
print(DestinationAccessSummary.to_json())

# convert the object into a dict
destination_access_summary_dict = destination_access_summary_instance.to_dict()
# create an instance of DestinationAccessSummary from a dict
destination_access_summary_from_dict = DestinationAccessSummary.from_dict(destination_access_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


