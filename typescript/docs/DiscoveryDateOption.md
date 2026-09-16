
# DiscoveryDateOption


## Properties

Name | Type
------------ | -------------
`dateOptionId` | string
`dateType` | string
`endDate` | Date
`nights` | number
`startDate` | Date

## Example

```typescript
import type { DiscoveryDateOption } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "dateOptionId": null,
  "dateType": null,
  "endDate": null,
  "nights": null,
  "startDate": null,
} satisfies DiscoveryDateOption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveryDateOption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


