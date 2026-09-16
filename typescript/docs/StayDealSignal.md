
# StayDealSignal

Public provider deal context for a stay.  This is display/explainability data only. It should not be treated as a Voyager learned-price baseline.

## Properties

Name | Type
------------ | -------------
`description` | string
`direction` | string
`label` | string
`percentDelta` | number
`source` | string

## Example

```typescript
import type { StayDealSignal } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "direction": null,
  "label": null,
  "percentDelta": null,
  "source": null,
} satisfies StayDealSignal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StayDealSignal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


