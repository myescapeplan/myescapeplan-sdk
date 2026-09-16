
# StructuredStay

Only amenities with an existing provider parameter and post-filter.

## Properties

Name | Type
------------ | -------------
`amenities` | Array&lt;string&gt;
`direction` | string
`propertyType` | string

## Example

```typescript
import type { StructuredStay } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "amenities": null,
  "direction": null,
  "propertyType": null,
} satisfies StructuredStay

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StructuredStay
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


