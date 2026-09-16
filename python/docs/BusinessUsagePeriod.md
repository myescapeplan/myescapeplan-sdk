# BusinessUsagePeriod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **datetime** |  | 
**start** | **datetime** |  | 

## Example

```python
from myescapeplan.models.business_usage_period import BusinessUsagePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessUsagePeriod from a JSON string
business_usage_period_instance = BusinessUsagePeriod.from_json(json)
# print the JSON string representation of the object
print(BusinessUsagePeriod.to_json())

# convert the object into a dict
business_usage_period_dict = business_usage_period_instance.to_dict()
# create an instance of BusinessUsagePeriod from a dict
business_usage_period_from_dict = BusinessUsagePeriod.from_dict(business_usage_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


