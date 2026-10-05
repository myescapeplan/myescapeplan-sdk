
# CatalogueMatchResponse


## Properties

Name | Type
------------ | -------------
`destinations` | [Array&lt;CatalogueDestinationMatches&gt;](CatalogueDestinationMatches.md)
`discoveryId` | string
`unmatchedRefs` | [Array&lt;CatalogueRef&gt;](CatalogueRef.md)

## Example

```typescript
import type { CatalogueMatchResponse } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "destinations": null,
  "discoveryId": null,
  "unmatchedRefs": null,
} satisfies CatalogueMatchResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogueMatchResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


