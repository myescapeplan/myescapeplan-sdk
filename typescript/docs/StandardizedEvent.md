
# StandardizedEvent

Provider-normalized event representation.

## Properties

Name | Type
------------ | -------------
`address` | string
`category` | string
`dateUnverified` | boolean
`debugInfo` | { [key: string]: any; }
`description` | string
`durationMinutes` | number
`end` | Date
`experienceType` | string
`fxAsOf` | Date
`geoUnverified` | boolean
`id` | string
`imageUrl` | string
`imageUrls` | Array&lt;string&gt;
`isApprox` | boolean
`isTimeBounded` | boolean
`kind` | string
`latitude` | number
`locationName` | string
`locationRef` | string
`longitude` | number
`moneyDisplay` | [Money](Money.md)
`moneyOriginal` | [Money](Money.md)
`priceNote` | string
`provider` | string
`providerProductId` | string
`providerUrls` | [Array&lt;ProviderUrl&gt;](ProviderUrl.md)
`rating` | number
`reviews` | number
`start` | Date
`ticketUrl` | string
`timezone` | string
`title` | string
`venue` | string

## Example

```typescript
import type { StandardizedEvent } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "address": null,
  "category": null,
  "dateUnverified": null,
  "debugInfo": null,
  "description": null,
  "durationMinutes": null,
  "end": null,
  "experienceType": null,
  "fxAsOf": null,
  "geoUnverified": null,
  "id": null,
  "imageUrl": null,
  "imageUrls": null,
  "isApprox": null,
  "isTimeBounded": null,
  "kind": null,
  "latitude": null,
  "locationName": null,
  "locationRef": null,
  "longitude": null,
  "moneyDisplay": null,
  "moneyOriginal": null,
  "priceNote": null,
  "provider": null,
  "providerProductId": null,
  "providerUrls": null,
  "rating": null,
  "reviews": null,
  "start": null,
  "ticketUrl": null,
  "timezone": null,
  "title": null,
  "venue": null,
} satisfies StandardizedEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StandardizedEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


