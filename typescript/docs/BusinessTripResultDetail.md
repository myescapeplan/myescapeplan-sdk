
# BusinessTripResultDetail

Rich detail projection shared by the consumer and Advisor products.

## Properties

Name | Type
------------ | -------------
`affiliateLinks` | [Array&lt;AffiliateLink&gt;](AffiliateLink.md)
`airportRefs` | [{ [key: string]: AirportRef; }](AirportRef.md)
`dateOptions` | [Array&lt;BusinessDetailDateOption&gt;](BusinessDetailDateOption.md)
`description` | string
`destinationAccess` | [DestinationAccessSummary](DestinationAccessSummary.md)
`destinationReason` | [DestinationReasonPayload](DestinationReasonPayload.md)
`displayName` | string
`errorMessage` | string
`events` | [Array&lt;EventDetail&gt;](EventDetail.md)
`flights` | [Array&lt;FlightDetail&gt;](FlightDetail.md)
`hasMoreEvents` | boolean
`hasMoreFlights` | boolean
`hasMoreHotels` | boolean
`hasMoreVacationRentals` | boolean
`hotels` | [Array&lt;StayDetail&gt;](StayDetail.md)
`images` | [Array&lt;ImageObject&gt;](ImageObject.md)
`priceInsights` | [Array&lt;PriceInsight&gt;](PriceInsight.md)
`primaryPriceInsight` | [PriceInsight](PriceInsight.md)
`reason` | string
`rentals` | [Array&lt;StayDetail&gt;](StayDetail.md)
`requestedCategories` | Array&lt;string&gt;
`runId` | string
`searchId` | string
`specHash` | string
`status` | string
`totalEventsCount` | number
`totalFlightsCount` | number
`totalHotelsCount` | number
`totalPrice` | [TripPrice](TripPrice.md)
`totalVacationRentalsCount` | number
`tripDates` | [DateRange](DateRange.md)

## Example

```typescript
import type { BusinessTripResultDetail } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "affiliateLinks": null,
  "airportRefs": null,
  "dateOptions": null,
  "description": null,
  "destinationAccess": null,
  "destinationReason": null,
  "displayName": null,
  "errorMessage": null,
  "events": null,
  "flights": null,
  "hasMoreEvents": null,
  "hasMoreFlights": null,
  "hasMoreHotels": null,
  "hasMoreVacationRentals": null,
  "hotels": null,
  "images": null,
  "priceInsights": null,
  "primaryPriceInsight": null,
  "reason": null,
  "rentals": null,
  "requestedCategories": null,
  "runId": null,
  "searchId": null,
  "specHash": null,
  "status": null,
  "totalEventsCount": null,
  "totalFlightsCount": null,
  "totalHotelsCount": null,
  "totalPrice": null,
  "totalVacationRentalsCount": null,
  "tripDates": null,
} satisfies BusinessTripResultDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessTripResultDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


