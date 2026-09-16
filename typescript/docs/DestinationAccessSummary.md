
# DestinationAccessSummary


## Properties

Name | Type
------------ | -------------
`confidence` | string
`crossesBorder` | boolean
`destinationName` | string
`destinationPlaceId` | string
`estimatedDurationMinutes` | number
`gatewayName` | string
`gatewayPlaceId` | string
`summaryText` | string
`transferMode` | string

## Example

```typescript
import type { DestinationAccessSummary } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "confidence": null,
  "crossesBorder": null,
  "destinationName": null,
  "destinationPlaceId": null,
  "estimatedDurationMinutes": null,
  "gatewayName": null,
  "gatewayPlaceId": null,
  "summaryText": null,
  "transferMode": null,
} satisfies DestinationAccessSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DestinationAccessSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


