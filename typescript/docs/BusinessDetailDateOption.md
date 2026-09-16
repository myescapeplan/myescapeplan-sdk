
# BusinessDetailDateOption

Date-option detail without the disabled event inventory track.

## Properties

Name | Type
------------ | -------------
`candidateId` | string
`dateOptionKind` | [DateOptionKind](DateOptionKind.md)
`dates` | [DateRange](DateRange.md)
`flightSummary` | [DateOptionComponentSummary](DateOptionComponentSummary.md)
`hotelSummary` | [DateOptionComponentSummary](DateOptionComponentSummary.md)
`priceInsights` | [Array&lt;PriceInsight&gt;](PriceInsight.md)
`primaryPriceInsight` | [PriceInsight](PriceInsight.md)
`rentalSummary` | [DateOptionComponentSummary](DateOptionComponentSummary.md)
`requiredCategories` | Array&lt;string&gt;
`status` | string
`totalPrice` | [TripPrice](TripPrice.md)

## Example

```typescript
import type { BusinessDetailDateOption } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "candidateId": null,
  "dateOptionKind": null,
  "dates": null,
  "flightSummary": null,
  "hotelSummary": null,
  "priceInsights": null,
  "primaryPriceInsight": null,
  "rentalSummary": null,
  "requiredCategories": null,
  "status": null,
  "totalPrice": null,
} satisfies BusinessDetailDateOption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessDetailDateOption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


