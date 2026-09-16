
# WeatherHint


## Properties

Name | Type
------------ | -------------
`confidence` | string
`isApprox` | boolean
`source` | string
`typicalHighC` | number
`typicalLowC` | number

## Example

```typescript
import type { WeatherHint } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "confidence": null,
  "isApprox": null,
  "source": null,
  "typicalHighC": null,
  "typicalLowC": null,
} satisfies WeatherHint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WeatherHint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


