
# DiscoveryDates


## Properties

Name | Type
------------ | -------------
`dateText` | string
`durationNights` | number
`end` | [DiscoveryDateBound](DiscoveryDateBound.md)
`endDate` | Date
`outerWindow` | [DiscoveryOuterWindow](DiscoveryOuterWindow.md)
`start` | [DiscoveryDateBound](DiscoveryDateBound.md)
`startDate` | Date

## Example

```typescript
import type { DiscoveryDates } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "dateText": null,
  "durationNights": null,
  "end": null,
  "endDate": null,
  "outerWindow": null,
  "start": null,
  "startDate": null,
} satisfies DiscoveryDates

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveryDates
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


