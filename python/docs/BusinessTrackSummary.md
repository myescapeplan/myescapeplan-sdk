# BusinessTrackSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** |  | [optional] 
**min_total** | **float** |  | [optional] 
**option_count** | **int** |  | [optional] [default to 0]
**price_basis** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 
**status** | **str** |  | 

## Example

```python
from myescapeplan.models.business_track_summary import BusinessTrackSummary

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessTrackSummary from a JSON string
business_track_summary_instance = BusinessTrackSummary.from_json(json)
# print the JSON string representation of the object
print(BusinessTrackSummary.to_json())

# convert the object into a dict
business_track_summary_dict = business_track_summary_instance.to_dict()
# create an instance of BusinessTrackSummary from a dict
business_track_summary_from_dict = BusinessTrackSummary.from_dict(business_track_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


