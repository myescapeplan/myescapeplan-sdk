
# StandardizedFlightSegment


## Properties

Name | Type
------------ | -------------
`aircraft` | string
`arrivalAirport` | string
`arrivalTimeLocal` | string
`arrivalTimeUtc` | Date
`arrivalTimezone` | string
`cabinClass` | string
`departureAirport` | string
`departureTimeLocal` | string
`departureTimeUtc` | Date
`departureTimezone` | string
`durationMinutes` | number
`flightNumber` | string
`marketingCarrier` | string
`operatingCarrier` | string
`segmentIndex` | number

## Example

```typescript
import type { StandardizedFlightSegment } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "aircraft": null,
  "arrivalAirport": null,
  "arrivalTimeLocal": null,
  "arrivalTimeUtc": null,
  "arrivalTimezone": null,
  "cabinClass": null,
  "departureAirport": null,
  "departureTimeLocal": null,
  "departureTimeUtc": null,
  "departureTimezone": null,
  "durationMinutes": null,
  "flightNumber": null,
  "marketingCarrier": null,
  "operatingCarrier": null,
  "segmentIndex": null,
} satisfies StandardizedFlightSegment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StandardizedFlightSegment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


