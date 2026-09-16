
# BusinessSearchResult


## Properties

Name | Type
------------ | -------------
`componentPricing` | [{ [key: string]: BusinessPrice; }](BusinessPrice.md)
`dataStatus` | { [key: string]: any; }
`dateOptions` | [Array&lt;BusinessDateOption&gt;](BusinessDateOption.md)
`dates` | [BusinessResultDates](BusinessResultDates.md)
`description` | string
`destinationAccess` | [DestinationAccessSummary](DestinationAccessSummary.md)
`destinationId` | string
`detailsUrl` | string
`displayName` | string
`features` | Array&lt;string&gt;
`flights` | [BusinessTrackSummary](BusinessTrackSummary.md)
`hotels` | [BusinessTrackSummary](BusinessTrackSummary.md)
`images` | [Array&lt;ImageObject&gt;](ImageObject.md)
`priceInsights` | [Array&lt;PriceInsight&gt;](PriceInsight.md)
`pricing` | [BusinessPrice](BusinessPrice.md)
`rank` | number
`reason` | string
`rentals` | [BusinessTrackSummary](BusinessTrackSummary.md)
`requestedCategories` | Array&lt;string&gt;
`resultId` | string
`verifiedAt` | Date
`weather` | [WeatherHint](WeatherHint.md)
`weatherData` | [Array&lt;WeatherObservation&gt;](WeatherObservation.md)
`weatherStatus` | string
`weatherSummary` | string

## Example

```typescript
import type { BusinessSearchResult } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "componentPricing": null,
  "dataStatus": null,
  "dateOptions": null,
  "dates": null,
  "description": null,
  "destinationAccess": null,
  "destinationId": null,
  "detailsUrl": null,
  "displayName": null,
  "features": null,
  "flights": null,
  "hotels": null,
  "images": null,
  "priceInsights": null,
  "pricing": null,
  "rank": null,
  "reason": null,
  "rentals": null,
  "requestedCategories": null,
  "resultId": null,
  "verifiedAt": null,
  "weather": null,
  "weatherData": null,
  "weatherStatus": null,
  "weatherSummary": null,
} satisfies BusinessSearchResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessSearchResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


