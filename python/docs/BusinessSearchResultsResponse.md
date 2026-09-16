# BusinessSearchResultsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generated_at** | **datetime** |  | 
**results** | [**List[BusinessSearchResult]**](BusinessSearchResult.md) |  | 
**search_id** | **UUID** |  | 
**status** | [**BusinessJobStatus**](BusinessJobStatus.md) |  | 

## Example

```python
from myescapeplan.models.business_search_results_response import BusinessSearchResultsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessSearchResultsResponse from a JSON string
business_search_results_response_instance = BusinessSearchResultsResponse.from_json(json)
# print the JSON string representation of the object
print(BusinessSearchResultsResponse.to_json())

# convert the object into a dict
business_search_results_response_dict = business_search_results_response_instance.to_dict()
# create an instance of BusinessSearchResultsResponse from a dict
business_search_results_response_from_dict = BusinessSearchResultsResponse.from_dict(business_search_results_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


