# TripAnchor

Known external commitment that a trip must satisfy.  MEP does not discover or verify this event/appointment. The caller provides its known place and required local calendar dates. `cover` (the public default) requires the trip to contain the complete date interval. `overlap` requires at least one shared local calendar day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**TripAnchorDestination**](TripAnchorDestination.md) |  | 
**external_reference** | **str** | Optional provenance/reference supplied by the caller. MEP does not fetch or reinterpret this reference during planning. | [optional] 
**mode** | **str** |  | [optional] [default to 'cover']
**required_presence** | [**TripAnchorPresence**](TripAnchorPresence.md) |  | 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] [default to 'event']

## Example

```python
from myescapeplan.models.trip_anchor import TripAnchor

# TODO update the JSON string below
json = "{}"
# create an instance of TripAnchor from a JSON string
trip_anchor_instance = TripAnchor.from_json(json)
# print the JSON string representation of the object
print(TripAnchor.to_json())

# convert the object into a dict
trip_anchor_dict = trip_anchor_instance.to_dict()
# create an instance of TripAnchor from a dict
trip_anchor_from_dict = TripAnchor.from_dict(trip_anchor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


