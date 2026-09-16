
# StructuredFlight


## Properties

Name | Type
------------ | -------------
`cabinClass` | string
`direction` | string
`directions` | { [key: string]: string; }
`excludeAirlines` | Array&lt;string&gt;
`includeAirlines` | Array&lt;string&gt;
`maxStops` | number

## Example

```typescript
import type { StructuredFlight } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "cabinClass": null,
  "direction": null,
  "directions": null,
  "excludeAirlines": null,
  "includeAirlines": null,
  "maxStops": null,
} satisfies StructuredFlight

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StructuredFlight
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


