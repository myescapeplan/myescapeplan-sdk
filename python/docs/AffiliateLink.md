# AffiliateLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | 
**company** | **str** |  | 
**name** | **str** |  | 
**offer_ref** | **str** |  | [optional] 
**provider** | **str** |  | 
**target_url** | **str** |  | 
**tracking_url** | **str** |  | [optional] 
**url** | **str** |  | 

## Example

```python
from myescapeplan.models.affiliate_link import AffiliateLink

# TODO update the JSON string below
json = "{}"
# create an instance of AffiliateLink from a JSON string
affiliate_link_instance = AffiliateLink.from_json(json)
# print the JSON string representation of the object
print(AffiliateLink.to_json())

# convert the object into a dict
affiliate_link_dict = affiliate_link_instance.to_dict()
# create an instance of AffiliateLink from a dict
affiliate_link_from_dict = AffiliateLink.from_dict(affiliate_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


