# ImageAttribution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**photographer_name** | **str** |  | [optional] 
**photographer_profile_url** | **str** |  | [optional] 
**provider_name** | **str** |  | [optional] 
**provider_url** | **str** |  | [optional] 
**text** | **str** |  | [optional] 

## Example

```python
from myescapeplan.models.image_attribution import ImageAttribution

# TODO update the JSON string below
json = "{}"
# create an instance of ImageAttribution from a JSON string
image_attribution_instance = ImageAttribution.from_json(json)
# print the JSON string representation of the object
print(ImageAttribution.to_json())

# convert the object into a dict
image_attribution_dict = image_attribution_instance.to_dict()
# create an instance of ImageAttribution from a dict
image_attribution_from_dict = ImageAttribution.from_dict(image_attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


