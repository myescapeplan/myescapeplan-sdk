
# BusinessTrackSummary


## Properties

Name | Type
------------ | -------------
`currency` | string
`minTotal` | number
`optionCount` | number
`priceBasis` | string
`reason` | string
`status` | string

## Example

```typescript
import type { BusinessTrackSummary } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "currency": null,
  "minTotal": null,
  "optionCount": null,
  "priceBasis": null,
  "reason": null,
  "status": null,
} satisfies BusinessTrackSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessTrackSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


