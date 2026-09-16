
# DiscoveryOpportunity


## Properties

Name | Type
------------ | -------------
`dateOptions` | [Array&lt;DiscoveryDateOption&gt;](DiscoveryDateOption.md)
`destination` | [DiscoveryDestination](DiscoveryDestination.md)
`destinationAirportIataCodes` | Array&lt;string&gt;
`fit` | [DiscoveryFit](DiscoveryFit.md)
`opportunityId` | string
`originAirportIataCodes` | Array&lt;string&gt;
`rank` | number
`reasons` | Array&lt;string&gt;
`searchInputsAvailable` | [DiscoverySearchInputsAvailable](DiscoverySearchInputsAvailable.md)
`tags` | Array&lt;string&gt;
`verificationStatus` | string

## Example

```typescript
import type { DiscoveryOpportunity } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "dateOptions": null,
  "destination": null,
  "destinationAirportIataCodes": null,
  "fit": null,
  "opportunityId": null,
  "originAirportIataCodes": null,
  "rank": null,
  "reasons": null,
  "searchInputsAvailable": null,
  "tags": null,
  "verificationStatus": null,
} satisfies DiscoveryOpportunity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveryOpportunity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


