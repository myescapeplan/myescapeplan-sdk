
# DiscoveryMeta


## Properties

Name | Type
------------ | -------------
`candidateCount` | number
`contractVersion` | string
`snapshotVersion` | string
`usage` | [DiscoveryUsage](DiscoveryUsage.md)

## Example

```typescript
import type { DiscoveryMeta } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "candidateCount": null,
  "contractVersion": null,
  "snapshotVersion": null,
  "usage": null,
} satisfies DiscoveryMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveryMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


