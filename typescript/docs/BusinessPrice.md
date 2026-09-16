
# BusinessPrice


## Properties

Name | Type
------------ | -------------
`basis` | string
`bookablePackagePrice` | boolean
`currency` | string
`total` | number

## Example

```typescript
import type { BusinessPrice } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "basis": null,
  "bookablePackagePrice": null,
  "currency": null,
  "total": null,
} satisfies BusinessPrice

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessPrice
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


