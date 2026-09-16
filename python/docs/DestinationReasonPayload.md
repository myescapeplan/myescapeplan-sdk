# DestinationReasonPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailed_reasons** | **List[str]** |  | [optional] 
**reasons** | **List[str]** |  | [optional] 
**summary** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from myescapeplan.models.destination_reason_payload import DestinationReasonPayload

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationReasonPayload from a JSON string
destination_reason_payload_instance = DestinationReasonPayload.from_json(json)
# print the JSON string representation of the object
print(DestinationReasonPayload.to_json())

# convert the object into a dict
destination_reason_payload_dict = destination_reason_payload_instance.to_dict()
# create an instance of DestinationReasonPayload from a dict
destination_reason_payload_from_dict = DestinationReasonPayload.from_dict(destination_reason_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


