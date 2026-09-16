# BusinessErrorEnvelope


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**BusinessApiError**](BusinessApiError.md) |  | 

## Example

```python
from myescapeplan.models.business_error_envelope import BusinessErrorEnvelope

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessErrorEnvelope from a JSON string
business_error_envelope_instance = BusinessErrorEnvelope.from_json(json)
# print the JSON string representation of the object
print(BusinessErrorEnvelope.to_json())

# convert the object into a dict
business_error_envelope_dict = business_error_envelope_instance.to_dict()
# create an instance of BusinessErrorEnvelope from a dict
business_error_envelope_from_dict = BusinessErrorEnvelope.from_dict(business_error_envelope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


