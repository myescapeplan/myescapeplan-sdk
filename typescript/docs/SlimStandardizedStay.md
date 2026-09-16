
# SlimStandardizedStay


## Properties

Name | Type
------------ | -------------
`address` | string
`amenityTypes` | Array&lt;string&gt;
`bathroomsMin` | number
`bedroomsMin` | number
`checkInTime` | string
`checkOutTime` | string
`city` | string
`countryCode` | string
`deal` | [StayDealSignal](StayDealSignal.md)
`description` | string
`distanceFromBeachKm` | number
`ecoCertified` | boolean
`freeCancellation` | boolean
`hotelClass` | number
`id` | string
`images` | [Array&lt;ImageObject&gt;](ImageObject.md)
`isVacationRental` | boolean
`lat` | number
`locationRating` | number
`lon` | number
`name` | string
`nearbyPlaces` | [Array&lt;StayNearbyPlace&gt;](StayNearbyPlace.md)
`offerSnapshot` | [StandardizedStayOffer](StandardizedStayOffer.md)
`priceInsights` | [Array&lt;PriceInsight&gt;](PriceInsight.md)
`primaryPriceInsight` | [PriceInsight](PriceInsight.md)
`propertyToken` | string
`propertyType` | string
`provider` | string
`providerPropertyId` | string
`providerUrls` | [Array&lt;ProviderUrl&gt;](ProviderUrl.md)
`ratingBucket` | string
`ratingCount` | number
`ratingDistribution` | [Array&lt;StayRatingBucket&gt;](StayRatingBucket.md)
`ratingValue` | number
`rawAmenities` | Array&lt;string&gt;
`region` | string
`reviewTopics` | [Array&lt;StayReviewTopic&gt;](StayReviewTopic.md)
`sleeps` | number
`specialOffers` | boolean
`stayKind` | string

## Example

```typescript
import type { SlimStandardizedStay } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "address": null,
  "amenityTypes": null,
  "bathroomsMin": null,
  "bedroomsMin": null,
  "checkInTime": null,
  "checkOutTime": null,
  "city": null,
  "countryCode": null,
  "deal": null,
  "description": null,
  "distanceFromBeachKm": null,
  "ecoCertified": null,
  "freeCancellation": null,
  "hotelClass": null,
  "id": null,
  "images": null,
  "isVacationRental": null,
  "lat": null,
  "locationRating": null,
  "lon": null,
  "name": null,
  "nearbyPlaces": null,
  "offerSnapshot": null,
  "priceInsights": null,
  "primaryPriceInsight": null,
  "propertyToken": null,
  "propertyType": null,
  "provider": null,
  "providerPropertyId": null,
  "providerUrls": null,
  "ratingBucket": null,
  "ratingCount": null,
  "ratingDistribution": null,
  "ratingValue": null,
  "rawAmenities": null,
  "region": null,
  "reviewTopics": null,
  "sleeps": null,
  "specialOffers": null,
  "stayKind": null,
} satisfies SlimStandardizedStay

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SlimStandardizedStay
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


