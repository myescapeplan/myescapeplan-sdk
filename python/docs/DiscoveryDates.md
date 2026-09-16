# DiscoveryDates


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_text** | **str** |  | [optional] 
**duration_nights** | **int** |  | [optional] 
**end** | [**DiscoveryDateBound**](DiscoveryDateBound.md) |  | [optional] 
**end_date** | **date** |  | [optional] 
**outer_window** | [**DiscoveryOuterWindow**](DiscoveryOuterWindow.md) |  | [optional] 
**start** | [**DiscoveryDateBound**](DiscoveryDateBound.md) |  | [optional] 
**start_date** | **date** |  | [optional] 

## Example

```python
from myescapeplan.models.discovery_dates import DiscoveryDates

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryDates from a JSON string
discovery_dates_instance = DiscoveryDates.from_json(json)
# print the JSON string representation of the object
print(DiscoveryDates.to_json())

# convert the object into a dict
discovery_dates_dict = discovery_dates_instance.to_dict()
# create an instance of DiscoveryDates from a dict
discovery_dates_from_dict = DiscoveryDates.from_dict(discovery_dates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


