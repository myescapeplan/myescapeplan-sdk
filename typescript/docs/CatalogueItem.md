
# CatalogueItem

Reusable customer-owned supply.  Catalogue products deliberately narrow the shared component vocabulary: itinerary-only constructs such as notes and free time are not products. ``subtype`` carries product specificity without widening the stable kind enum. ``description`` is matching/internal catalogue copy; ``client_description`` remains explicit client-facing copy when the item is materialised.

## Properties

Name | Type
------------ | -------------
`clientDescription` | string
`description` | string
`destinationIds` | Array&lt;string&gt;
`inclusions` | string
`kind` | string
`ref` | [CatalogueRef](CatalogueRef.md)
`subtype` | string
`tags` | Array&lt;string&gt;
`title` | string

## Example

```typescript
import type { CatalogueItem } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "clientDescription": null,
  "description": null,
  "destinationIds": null,
  "inclusions": null,
  "kind": null,
  "ref": null,
  "subtype": null,
  "tags": null,
  "title": null,
} satisfies CatalogueItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogueItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


