# TripAnchorDestination

Location of a known external commitment.  MCP/agent callers may send a human place query when they do not know an MEP UUID. Voyager resolves it through the existing canonical explicit-place policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**place_id** | **UUID** |  | [optional] 
**query** | **str** | Place to resolve, e.g. &#39;Barcelona, Spain&#39;. Use place_id when a canonical MyEscapePlan destination id is already known. | [optional] 

## Example

```python
from myescapeplan.models.trip_anchor_destination import TripAnchorDestination

# TODO update the JSON string below
json = "{}"
# create an instance of TripAnchorDestination from a JSON string
trip_anchor_destination_instance = TripAnchorDestination.from_json(json)
# print the JSON string representation of the object
print(TripAnchorDestination.to_json())

# convert the object into a dict
trip_anchor_destination_dict = trip_anchor_destination_instance.to_dict()
# create an instance of TripAnchorDestination from a dict
trip_anchor_destination_from_dict = TripAnchorDestination.from_dict(trip_anchor_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


