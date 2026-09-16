# BusinessSearchListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_cursor** | **str** |  | [optional] 
**searches** | [**List[BusinessJobResource]**](BusinessJobResource.md) |  | [optional] 

## Example

```python
from myescapeplan.models.business_search_list_response import BusinessSearchListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessSearchListResponse from a JSON string
business_search_list_response_instance = BusinessSearchListResponse.from_json(json)
# print the JSON string representation of the object
print(BusinessSearchListResponse.to_json())

# convert the object into a dict
business_search_list_response_dict = business_search_list_response_instance.to_dict()
# create an instance of BusinessSearchListResponse from a dict
business_search_list_response_from_dict = BusinessSearchListResponse.from_dict(business_search_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


