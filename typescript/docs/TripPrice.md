
# TripPrice


## Properties

Name | Type
------------ | -------------
`breakdown` | { [key: string]: any; }
`currency` | string
`total` | number

## Example

```typescript
import type { TripPrice } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "breakdown": null,
  "currency": null,
  "total": null,
} satisfies TripPrice

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TripPrice
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


