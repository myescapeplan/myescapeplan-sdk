
# TripAnchorPresence

Required local calendar dates for a known commitment.  V1 is intentionally date-grained. Voyager can guarantee that the trip covers these local calendar dates, but it does not yet prove that a flight arrives before an event\'s exact clock time. Upstream agents should therefore convert known event timestamps to the event\'s local start/end dates.

## Properties

Name | Type
------------ | -------------
`endDate` | Date
`startDate` | Date

## Example

```typescript
import type { TripAnchorPresence } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "endDate": null,
  "startDate": null,
} satisfies TripAnchorPresence

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TripAnchorPresence
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


