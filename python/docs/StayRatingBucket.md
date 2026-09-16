# StayRatingBucket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**stars** | **int** |  | 

## Example

```python
from myescapeplan.models.stay_rating_bucket import StayRatingBucket

# TODO update the JSON string below
json = "{}"
# create an instance of StayRatingBucket from a JSON string
stay_rating_bucket_instance = StayRatingBucket.from_json(json)
# print the JSON string representation of the object
print(StayRatingBucket.to_json())

# convert the object into a dict
stay_rating_bucket_dict = stay_rating_bucket_instance.to_dict()
# create an instance of StayRatingBucket from a dict
stay_rating_bucket_from_dict = StayRatingBucket.from_dict(stay_rating_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


