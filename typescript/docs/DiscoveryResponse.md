
# DiscoveryResponse


## Properties

Name | Type
------------ | -------------
`discoveryId` | string
`expiresAt` | Date
`idempotencyKey` | string
`interpretedRequest` | [DiscoveryInterpretation](DiscoveryInterpretation.md)
`meta` | [DiscoveryMeta](DiscoveryMeta.md)
`opportunities` | [Array&lt;DiscoveryOpportunity&gt;](DiscoveryOpportunity.md)
`reason` | string
`requestId` | string
`status` | string

## Example

```typescript
import type { DiscoveryResponse } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "discoveryId": null,
  "expiresAt": null,
  "idempotencyKey": null,
  "interpretedRequest": null,
  "meta": null,
  "opportunities": null,
  "reason": null,
  "requestId": null,
  "status": null,
} satisfies DiscoveryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


