
# CatalogueMatchRequest

Match products against an owned Discovery or explicit known destinations.

## Properties

Name | Type
------------ | -------------
`destinationIds` | Array&lt;string&gt;
`discoveryId` | string
`items` | [Array&lt;CatalogueItem&gt;](CatalogueItem.md)

## Example

```typescript
import type { CatalogueMatchRequest } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "destinationIds": null,
  "discoveryId": null,
  "items": null,
} satisfies CatalogueMatchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogueMatchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


