# DiscoveryDateOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_option_id** | **str** |  | [optional] 
**date_type** | **str** |  | [optional] [default to 'unknown']
**end_date** | **date** |  | 
**nights** | **int** |  | 
**start_date** | **date** |  | 

## Example

```python
from myescapeplan.models.discovery_date_option import DiscoveryDateOption

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryDateOption from a JSON string
discovery_date_option_instance = DiscoveryDateOption.from_json(json)
# print the JSON string representation of the object
print(DiscoveryDateOption.to_json())

# convert the object into a dict
discovery_date_option_dict = discovery_date_option_instance.to_dict()
# create an instance of DiscoveryDateOption from a dict
discovery_date_option_from_dict = DiscoveryDateOption.from_dict(discovery_date_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


