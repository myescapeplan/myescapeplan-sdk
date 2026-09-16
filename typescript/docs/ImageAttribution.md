
# ImageAttribution


## Properties

Name | Type
------------ | -------------
`photographerName` | string
`photographerProfileUrl` | string
`providerName` | string
`providerUrl` | string
`text` | string

## Example

```typescript
import type { ImageAttribution } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "photographerName": null,
  "photographerProfileUrl": null,
  "providerName": null,
  "providerUrl": null,
  "text": null,
} satisfies ImageAttribution

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImageAttribution
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


