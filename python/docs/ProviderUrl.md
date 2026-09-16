# ProviderUrl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**url** | **str** |  | 

## Example

```python
from myescapeplan.models.provider_url import ProviderUrl

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderUrl from a JSON string
provider_url_instance = ProviderUrl.from_json(json)
# print the JSON string representation of the object
print(ProviderUrl.to_json())

# convert the object into a dict
provider_url_dict = provider_url_instance.to_dict()
# create an instance of ProviderUrl from a dict
provider_url_from_dict = ProviderUrl.from_dict(provider_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


