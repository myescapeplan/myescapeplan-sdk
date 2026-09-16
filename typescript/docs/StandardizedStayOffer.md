
# StandardizedStayOffer


## Properties

Name | Type
------------ | -------------
`checkInDate` | string
`checkOutDate` | string
`currency` | string
`nightlyPrice` | number
`priceInsights` | [Array&lt;PriceInsight&gt;](PriceInsight.md)
`priceTotal` | number
`primaryPriceInsight` | [PriceInsight](PriceInsight.md)
`taxesFeesIncluded` | boolean

## Example

```typescript
import type { StandardizedStayOffer } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "checkInDate": null,
  "checkOutDate": null,
  "currency": null,
  "nightlyPrice": null,
  "priceInsights": null,
  "priceTotal": null,
  "primaryPriceInsight": null,
  "taxesFeesIncluded": null,
} satisfies StandardizedStayOffer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StandardizedStayOffer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


