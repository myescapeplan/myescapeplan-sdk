
# SlimStandardizedFlightOffer


## Properties

Name | Type
------------ | -------------
`canUnlockReturn` | boolean
`currency` | string
`emissionsGramsCo2e` | number
`emissionsLevel` | string
`legs` | [Array&lt;StandardizedFlightLeg&gt;](StandardizedFlightLeg.md)
`marketingCarriers` | Array&lt;string&gt;
`maxSegmentDurationMinutes` | number
`offerId` | string
`operatingCarriers` | Array&lt;string&gt;
`outboundSelectionId` | string
`priceBreakdown` | { [key: string]: number; }
`priceInsights` | [Array&lt;PriceInsight&gt;](PriceInsight.md)
`priceProvenance` | string
`priceTotal` | number
`primaryPriceInsight` | [PriceInsight](PriceInsight.md)
`provider` | string
`providerUrls` | [Array&lt;ProviderUrl&gt;](ProviderUrl.md)
`totalDurationMinutes` | number
`tripType` | string

## Example

```typescript
import type { SlimStandardizedFlightOffer } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "canUnlockReturn": null,
  "currency": null,
  "emissionsGramsCo2e": null,
  "emissionsLevel": null,
  "legs": null,
  "marketingCarriers": null,
  "maxSegmentDurationMinutes": null,
  "offerId": null,
  "operatingCarriers": null,
  "outboundSelectionId": null,
  "priceBreakdown": null,
  "priceInsights": null,
  "priceProvenance": null,
  "priceTotal": null,
  "primaryPriceInsight": null,
  "provider": null,
  "providerUrls": null,
  "totalDurationMinutes": null,
  "tripType": null,
} satisfies SlimStandardizedFlightOffer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SlimStandardizedFlightOffer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


