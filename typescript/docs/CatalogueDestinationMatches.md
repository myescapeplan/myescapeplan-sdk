
# CatalogueDestinationMatches


## Properties

Name | Type
------------ | -------------
`destinationId` | string
`matches` | [Array&lt;CatalogueItemMatch&gt;](CatalogueItemMatch.md)
`opportunityId` | string

## Example

```typescript
import type { CatalogueDestinationMatches } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "destinationId": null,
  "matches": null,
  "opportunityId": null,
} satisfies CatalogueDestinationMatches

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogueDestinationMatches
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


