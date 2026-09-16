
# DateOptionComponentSummary

Lightweight component inventory for one exact date option.  Component metadata is deliberately scoped to the DateOption instead of the destination card. This prevents a selected sibling date from displaying a flight/stay count or \"from\" price that belongs to another date variant.  Keep property/destination metadata such as amenities, images, descriptions, reviews, and static events OUT of this model. Those are deduped at their natural property/destination scope and selected by candidate/date identity.

## Properties

Name | Type
------------ | -------------
`minPrice` | [TripPrice](TripPrice.md)
`optionCount` | number

## Example

```typescript
import type { DateOptionComponentSummary } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "minPrice": null,
  "optionCount": null,
} satisfies DateOptionComponentSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DateOptionComponentSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


