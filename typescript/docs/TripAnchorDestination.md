
# TripAnchorDestination

Location of a known external commitment.  MCP/agent callers may send a human place query when they do not know an MEP UUID. Voyager resolves it through the existing canonical explicit-place policy.

## Properties

Name | Type
------------ | -------------
`placeId` | string
`query` | string

## Example

```typescript
import type { TripAnchorDestination } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "placeId": null,
  "query": null,
} satisfies TripAnchorDestination

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TripAnchorDestination
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


