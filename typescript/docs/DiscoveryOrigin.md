
# DiscoveryOrigin

Stable origin input independent of consumer planning artifacts.

## Properties

Name | Type
------------ | -------------
`airportIataCodes` | Array&lt;string&gt;
`countryCode` | string
`iataCode` | string
`lat` | number
`lon` | number
`placeId` | string
`query` | string
`type` | string

## Example

```typescript
import type { DiscoveryOrigin } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "airportIataCodes": null,
  "countryCode": null,
  "iataCode": null,
  "lat": null,
  "lon": null,
  "placeId": null,
  "query": null,
  "type": null,
} satisfies DiscoveryOrigin

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveryOrigin
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


