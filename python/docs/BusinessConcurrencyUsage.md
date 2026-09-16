# BusinessConcurrencyUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **int** |  | 
**limit** | **int** |  | 
**remaining** | **int** |  | 

## Example

```python
from myescapeplan.models.business_concurrency_usage import BusinessConcurrencyUsage

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessConcurrencyUsage from a JSON string
business_concurrency_usage_instance = BusinessConcurrencyUsage.from_json(json)
# print the JSON string representation of the object
print(BusinessConcurrencyUsage.to_json())

# convert the object into a dict
business_concurrency_usage_dict = business_concurrency_usage_instance.to_dict()
# create an instance of BusinessConcurrencyUsage from a dict
business_concurrency_usage_from_dict = BusinessConcurrencyUsage.from_dict(business_concurrency_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


