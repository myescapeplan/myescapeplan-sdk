
# StandardizedFlightLeg


## Properties

Name | Type
------------ | -------------
`arrivalAirport` | string
`arrivalTimeLocal` | string
`arrivalTimeUtc` | Date
`arrivalTimezone` | string
`departureAirport` | string
`departureTimeLocal` | string
`departureTimeUtc` | Date
`departureTimezone` | string
`durationMinutes` | number
`layoverMinutesTotal` | number
`legIndex` | number
`segments` | [Array&lt;StandardizedFlightSegment&gt;](StandardizedFlightSegment.md)
`stopCount` | number

## Example

```typescript
import type { StandardizedFlightLeg } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "arrivalAirport": null,
  "arrivalTimeLocal": null,
  "arrivalTimeUtc": null,
  "arrivalTimezone": null,
  "departureAirport": null,
  "departureTimeLocal": null,
  "departureTimeUtc": null,
  "departureTimezone": null,
  "durationMinutes": null,
  "layoverMinutesTotal": null,
  "legIndex": null,
  "segments": null,
  "stopCount": null,
} satisfies StandardizedFlightLeg

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StandardizedFlightLeg
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


