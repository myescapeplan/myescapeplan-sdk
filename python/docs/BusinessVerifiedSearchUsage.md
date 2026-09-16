# BusinessVerifiedSearchUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowance** | **int** |  | 
**allowance_used** | **int** |  | 
**consumed** | **int** |  | 
**remaining** | **int** |  | 
**reserved** | **int** |  | 

## Example

```python
from myescapeplan.models.business_verified_search_usage import BusinessVerifiedSearchUsage

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessVerifiedSearchUsage from a JSON string
business_verified_search_usage_instance = BusinessVerifiedSearchUsage.from_json(json)
# print the JSON string representation of the object
print(BusinessVerifiedSearchUsage.to_json())

# convert the object into a dict
business_verified_search_usage_dict = business_verified_search_usage_instance.to_dict()
# create an instance of BusinessVerifiedSearchUsage from a dict
business_verified_search_usage_from_dict = BusinessVerifiedSearchUsage.from_dict(business_verified_search_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


