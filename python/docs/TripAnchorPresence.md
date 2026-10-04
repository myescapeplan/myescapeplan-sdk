# TripAnchorPresence

Required local calendar dates for a known commitment.  V1 is intentionally date-grained. Voyager can guarantee that the trip covers these local calendar dates, but it does not yet prove that a flight arrives before an event's exact clock time. Upstream agents should therefore convert known event timestamps to the event's local start/end dates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **date** |  | 
**start_date** | **date** |  | 

## Example

```python
from myescapeplan.models.trip_anchor_presence import TripAnchorPresence

# TODO update the JSON string below
json = "{}"
# create an instance of TripAnchorPresence from a JSON string
trip_anchor_presence_instance = TripAnchorPresence.from_json(json)
# print the JSON string representation of the object
print(TripAnchorPresence.to_json())

# convert the object into a dict
trip_anchor_presence_dict = trip_anchor_presence_instance.to_dict()
# create an instance of TripAnchorPresence from a dict
trip_anchor_presence_from_dict = TripAnchorPresence.from_dict(trip_anchor_presence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


