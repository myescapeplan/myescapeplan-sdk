
# DiscoveryDestination


## Properties

Name | Type
------------ | -------------
`countryCode` | string
`countryName` | string
`displayName` | string
`id` | string
`image` | [ImageObject](ImageObject.md)
`kind` | string
`name` | string
`region` | string
`subtitle` | string

## Example

```typescript
import type { DiscoveryDestination } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "countryCode": null,
  "countryName": null,
  "displayName": null,
  "id": null,
  "image": null,
  "kind": null,
  "name": null,
  "region": null,
  "subtitle": null,
} satisfies DiscoveryDestination

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveryDestination
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


