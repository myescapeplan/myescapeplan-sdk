# BusinessApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**details** | **Dict[str, object]** |  | [optional] 
**message** | **str** |  | 
**retryable** | **bool** |  | [optional] [default to False]

## Example

```python
from myescapeplan.models.business_api_error import BusinessApiError

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessApiError from a JSON string
business_api_error_instance = BusinessApiError.from_json(json)
# print the JSON string representation of the object
print(BusinessApiError.to_json())

# convert the object into a dict
business_api_error_dict = business_api_error_instance.to_dict()
# create an instance of BusinessApiError from a dict
business_api_error_from_dict = BusinessApiError.from_dict(business_api_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


