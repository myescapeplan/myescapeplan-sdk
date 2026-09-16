# BusinessUsageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowance_scope** | **str** |  | [optional] [default to 'client']
**as_of** | **datetime** |  | 
**concurrency** | [**BusinessConcurrencyUsage**](BusinessConcurrencyUsage.md) |  | 
**discovery** | [**BusinessUsageCounter**](BusinessUsageCounter.md) |  | 
**environment** | **str** |  | 
**period** | [**BusinessUsagePeriod**](BusinessUsagePeriod.md) |  | 
**plan_tier** | **str** |  | 
**rate_limits** | [**BusinessRateLimits**](BusinessRateLimits.md) |  | 
**scopes** | **List[str]** |  | [optional] 
**verified_searches** | [**BusinessVerifiedSearchUsage**](BusinessVerifiedSearchUsage.md) |  | 

## Example

```python
from myescapeplan.models.business_usage_response import BusinessUsageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessUsageResponse from a JSON string
business_usage_response_instance = BusinessUsageResponse.from_json(json)
# print the JSON string representation of the object
print(BusinessUsageResponse.to_json())

# convert the object into a dict
business_usage_response_dict = business_usage_response_instance.to_dict()
# create an instance of BusinessUsageResponse from a dict
business_usage_response_from_dict = BusinessUsageResponse.from_dict(business_usage_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


