
# BusinessUsageResponse


## Properties

Name | Type
------------ | -------------
`allowanceScope` | string
`asOf` | Date
`concurrency` | [BusinessConcurrencyUsage](BusinessConcurrencyUsage.md)
`discovery` | [BusinessUsageCounter](BusinessUsageCounter.md)
`environment` | string
`period` | [BusinessUsagePeriod](BusinessUsagePeriod.md)
`planTier` | string
`rateLimits` | [BusinessRateLimits](BusinessRateLimits.md)
`scopes` | Array&lt;string&gt;
`verifiedSearches` | [BusinessVerifiedSearchUsage](BusinessVerifiedSearchUsage.md)

## Example

```typescript
import type { BusinessUsageResponse } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "allowanceScope": null,
  "asOf": null,
  "concurrency": null,
  "discovery": null,
  "environment": null,
  "period": null,
  "planTier": null,
  "rateLimits": null,
  "scopes": null,
  "verifiedSearches": null,
} satisfies BusinessUsageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessUsageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


