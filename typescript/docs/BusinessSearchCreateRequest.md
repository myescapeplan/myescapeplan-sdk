
# BusinessSearchCreateRequest

Detached verified search over the shared Business travel intent.

## Properties

Name | Type
------------ | -------------
`budget` | [DiscoveryBudget](DiscoveryBudget.md)
`budgetTier` | string
`categories` | Array&lt;string&gt;
`currency` | string
`dateOptionId` | string
`dates` | [DiscoveryDates](DiscoveryDates.md)
`destinationAirportIataCodes` | Array&lt;string&gt;
`destinationIds` | Array&lt;string&gt;
`discoveryId` | string
`flight` | [StructuredFlight](StructuredFlight.md)
`includeImages` | boolean
`language` | string
`maxResults` | number
`opportunityId` | string
`origin` | [DiscoveryOrigin](DiscoveryOrigin.md)
`party` | [DiscoveryParty](DiscoveryParty.md)
`preferences` | [DiscoveryPreferences](DiscoveryPreferences.md)
`query` | string
`stay` | [StructuredStay](StructuredStay.md)

## Example

```typescript
import type { BusinessSearchCreateRequest } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "budget": null,
  "budgetTier": null,
  "categories": null,
  "currency": null,
  "dateOptionId": null,
  "dates": null,
  "destinationAirportIataCodes": null,
  "destinationIds": null,
  "discoveryId": null,
  "flight": null,
  "includeImages": null,
  "language": null,
  "maxResults": null,
  "opportunityId": null,
  "origin": null,
  "party": null,
  "preferences": null,
  "query": null,
  "stay": null,
} satisfies BusinessSearchCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessSearchCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


