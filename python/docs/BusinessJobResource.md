# BusinessJobResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_reference** | **str** |  | [optional] 
**completed_at** | **datetime** |  | [optional] 
**created_at** | **datetime** |  | 
**environment** | **str** |  | 
**error** | [**BusinessApiError**](BusinessApiError.md) |  | [optional] 
**id** | **UUID** |  | 
**links** | [**BusinessJobLinks**](BusinessJobLinks.md) |  | 
**started_at** | **datetime** |  | [optional] 
**status** | [**BusinessJobStatus**](BusinessJobStatus.md) |  | 

## Example

```python
from myescapeplan.models.business_job_resource import BusinessJobResource

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessJobResource from a JSON string
business_job_resource_instance = BusinessJobResource.from_json(json)
# print the JSON string representation of the object
print(BusinessJobResource.to_json())

# convert the object into a dict
business_job_resource_dict = business_job_resource_instance.to_dict()
# create an instance of BusinessJobResource from a dict
business_job_resource_from_dict = BusinessJobResource.from_dict(business_job_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


