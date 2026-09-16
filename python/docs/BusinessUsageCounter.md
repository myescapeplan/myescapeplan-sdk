# BusinessUsageCounter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowance** | **int** |  | 
**remaining** | **int** |  | 
**used** | **int** |  | 

## Example

```python
from myescapeplan.models.business_usage_counter import BusinessUsageCounter

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessUsageCounter from a JSON string
business_usage_counter_instance = BusinessUsageCounter.from_json(json)
# print the JSON string representation of the object
print(BusinessUsageCounter.to_json())

# convert the object into a dict
business_usage_counter_dict = business_usage_counter_instance.to_dict()
# create an instance of BusinessUsageCounter from a dict
business_usage_counter_from_dict = BusinessUsageCounter.from_dict(business_usage_counter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


