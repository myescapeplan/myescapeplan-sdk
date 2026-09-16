# BusinessPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basis** | **str** |  | [optional] [default to 'unknown']
**bookable_package_price** | **bool** |  | [optional] [default to False]
**currency** | **str** |  | [optional] 
**total** | **float** |  | [optional] 

## Example

```python
from myescapeplan.models.business_price import BusinessPrice

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessPrice from a JSON string
business_price_instance = BusinessPrice.from_json(json)
# print the JSON string representation of the object
print(BusinessPrice.to_json())

# convert the object into a dict
business_price_dict = business_price_instance.to_dict()
# create an instance of BusinessPrice from a dict
business_price_from_dict = BusinessPrice.from_dict(business_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


