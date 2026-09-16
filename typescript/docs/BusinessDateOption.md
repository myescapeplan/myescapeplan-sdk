
# BusinessDateOption


## Properties

Name | Type
------------ | -------------
`dateOptionId` | string
`dateType` | string
`endDate` | Date
`flights` | [BusinessTrackSummary](BusinessTrackSummary.md)
`hotels` | [BusinessTrackSummary](BusinessTrackSummary.md)
`nights` | number
`priceInsights` | [Array&lt;PriceInsight&gt;](PriceInsight.md)
`pricing` | [BusinessPrice](BusinessPrice.md)
`primaryPriceInsight` | [PriceInsight](PriceInsight.md)
`rentals` | [BusinessTrackSummary](BusinessTrackSummary.md)
`startDate` | Date
`status` | string
`unpricedReason` | string

## Example

```typescript
import type { BusinessDateOption } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "dateOptionId": null,
  "dateType": null,
  "endDate": null,
  "flights": null,
  "hotels": null,
  "nights": null,
  "priceInsights": null,
  "pricing": null,
  "primaryPriceInsight": null,
  "rentals": null,
  "startDate": null,
  "status": null,
  "unpricedReason": null,
} satisfies BusinessDateOption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessDateOption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


