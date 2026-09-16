
# DiscoveryDestinationReference

Canonical destination identity from the active Discovery planner snapshot.

## Properties

Name | Type
------------ | -------------
`countryCode` | string
`displayName` | string
`id` | string
`kind` | string
`lat` | number
`lon` | number
`name` | string

## Example

```typescript
import type { DiscoveryDestinationReference } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "countryCode": null,
  "displayName": null,
  "id": null,
  "kind": null,
  "lat": null,
  "lon": null,
  "name": null,
} satisfies DiscoveryDestinationReference

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveryDestinationReference
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


