
# DiscoveryPreferences


## Properties

Name | Type
------------ | -------------
`activityPreferences` | Array&lt;string&gt;
`eventTypes` | Array&lt;string&gt;
`interests` | Array&lt;string&gt;
`pace` | string
`tripDimensions` | Array&lt;string&gt;
`weather` | string

## Example

```typescript
import type { DiscoveryPreferences } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "activityPreferences": null,
  "eventTypes": null,
  "interests": null,
  "pace": null,
  "tripDimensions": null,
  "weather": null,
} satisfies DiscoveryPreferences

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveryPreferences
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


