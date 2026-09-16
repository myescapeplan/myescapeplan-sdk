# StayReviewTopic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | 
**negative** | **int** |  | [optional] [default to 0]
**neutral** | **int** |  | [optional] [default to 0]
**positive** | **int** |  | [optional] [default to 0]
**positive_ratio** | **float** |  | [optional] 
**total_mentioned** | **int** |  | [optional] [default to 0]

## Example

```python
from myescapeplan.models.stay_review_topic import StayReviewTopic

# TODO update the JSON string below
json = "{}"
# create an instance of StayReviewTopic from a JSON string
stay_review_topic_instance = StayReviewTopic.from_json(json)
# print the JSON string representation of the object
print(StayReviewTopic.to_json())

# convert the object into a dict
stay_review_topic_dict = stay_review_topic_instance.to_dict()
# create an instance of StayReviewTopic from a dict
stay_review_topic_from_dict = StayReviewTopic.from_dict(stay_review_topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


