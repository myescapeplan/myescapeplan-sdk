
# BusinessResultDetail

Rich Business result detail backed by the consumer result contract.

## Properties

Name | Type
------------ | -------------
`affiliateLinks` | [Array&lt;AffiliateLink&gt;](AffiliateLink.md)
`destinationAccess` | [DestinationAccessSummary](DestinationAccessSummary.md)
`detail` | [BusinessTripResultDetail](BusinessTripResultDetail.md)
`flights` | [Array&lt;SlimStandardizedFlightOffer&gt;](SlimStandardizedFlightOffer.md)
`hasMoreFlights` | boolean
`hasMoreHotels` | boolean
`hasMoreRentals` | boolean
`hotels` | [Array&lt;SlimStandardizedStay&gt;](SlimStandardizedStay.md)
`rentals` | [Array&lt;SlimStandardizedStay&gt;](SlimStandardizedStay.md)
`result` | [BusinessSearchResult](BusinessSearchResult.md)
`weather` | [WeatherHint](WeatherHint.md)
`weatherData` | [Array&lt;WeatherObservation&gt;](WeatherObservation.md)
`weatherStatus` | string

## Example

```typescript
import type { BusinessResultDetail } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "affiliateLinks": null,
  "destinationAccess": null,
  "detail": null,
  "flights": null,
  "hasMoreFlights": null,
  "hasMoreHotels": null,
  "hasMoreRentals": null,
  "hotels": null,
  "rentals": null,
  "result": null,
  "weather": null,
  "weatherData": null,
  "weatherStatus": null,
} satisfies BusinessResultDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessResultDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


