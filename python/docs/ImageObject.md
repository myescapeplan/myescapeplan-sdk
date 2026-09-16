# ImageObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution** | [**ImageAttribution**](ImageAttribution.md) |  | [optional] 
**blur_hash** | **str** |  | [optional] 
**credits** | **str** |  | [optional] 
**download_location** | **str** |  | [optional] 
**height** | **int** |  | [optional] 
**is_fallback** | **bool** |  | [optional] 
**license** | **str** |  | [optional] 
**original_url** | **str** |  | [optional] 
**provider** | **str** |  | [optional] 
**provider_asset_id** | **str** |  | [optional] 
**source_url** | **str** |  | [optional] 
**url** | **str** |  | 
**usage_kind** | **str** |  | [optional] 
**width** | **int** |  | [optional] 

## Example

```python
from myescapeplan.models.image_object import ImageObject

# TODO update the JSON string below
json = "{}"
# create an instance of ImageObject from a JSON string
image_object_instance = ImageObject.from_json(json)
# print the JSON string representation of the object
print(ImageObject.to_json())

# convert the object into a dict
image_object_dict = image_object_instance.to_dict()
# create an instance of ImageObject from a dict
image_object_from_dict = ImageObject.from_dict(image_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


