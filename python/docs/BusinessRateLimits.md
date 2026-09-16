# BusinessRateLimits


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovery_per_minute** | **int** |  | 

## Example

```python
from myescapeplan.models.business_rate_limits import BusinessRateLimits

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessRateLimits from a JSON string
business_rate_limits_instance = BusinessRateLimits.from_json(json)
# print the JSON string representation of the object
print(BusinessRateLimits.to_json())

# convert the object into a dict
business_rate_limits_dict = business_rate_limits_instance.to_dict()
# create an instance of BusinessRateLimits from a dict
business_rate_limits_from_dict = BusinessRateLimits.from_dict(business_rate_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


