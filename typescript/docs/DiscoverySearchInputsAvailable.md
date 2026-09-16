
# DiscoverySearchInputsAvailable

Whether this opportunity contains enough safe data to search each track.

## Properties

Name | Type
------------ | -------------
`accommodation` | boolean
`events` | boolean
`flights` | boolean

## Example

```typescript
import type { DiscoverySearchInputsAvailable } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "accommodation": null,
  "events": null,
  "flights": null,
} satisfies DiscoverySearchInputsAvailable

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoverySearchInputsAvailable
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


