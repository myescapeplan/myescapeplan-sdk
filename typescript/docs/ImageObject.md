
# ImageObject


## Properties

Name | Type
------------ | -------------
`attribution` | [ImageAttribution](ImageAttribution.md)
`blurHash` | string
`credits` | string
`downloadLocation` | string
`height` | number
`isFallback` | boolean
`license` | string
`originalUrl` | string
`provider` | string
`providerAssetId` | string
`sourceUrl` | string
`url` | string
`usageKind` | string
`width` | number

## Example

```typescript
import type { ImageObject } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "attribution": null,
  "blurHash": null,
  "credits": null,
  "downloadLocation": null,
  "height": null,
  "isFallback": null,
  "license": null,
  "originalUrl": null,
  "provider": null,
  "providerAssetId": null,
  "sourceUrl": null,
  "url": null,
  "usageKind": null,
  "width": null,
} satisfies ImageObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImageObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


