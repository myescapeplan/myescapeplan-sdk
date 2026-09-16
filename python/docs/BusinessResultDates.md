# BusinessResultDates

Verified stay window. A bare dict here would document as a free-form map.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **date** |  | 
**start_date** | **date** |  | 

## Example

```python
from myescapeplan.models.business_result_dates import BusinessResultDates

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessResultDates from a JSON string
business_result_dates_instance = BusinessResultDates.from_json(json)
# print the JSON string representation of the object
print(BusinessResultDates.to_json())

# convert the object into a dict
business_result_dates_dict = business_result_dates_instance.to_dict()
# create an instance of BusinessResultDates from a dict
business_result_dates_from_dict = BusinessResultDates.from_dict(business_result_dates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


