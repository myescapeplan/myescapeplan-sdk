
# WeatherObservation


## Properties

Name | Type
------------ | -------------
`avgTempC` | number
`condition` | string
`date` | string
`description` | string
`maxTempC` | number
`minTempC` | number
`source` | string
`temperatureCelsius` | number

## Example

```typescript
import type { WeatherObservation } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "avgTempC": null,
  "condition": null,
  "date": null,
  "description": null,
  "maxTempC": null,
  "minTempC": null,
  "source": null,
  "temperatureCelsius": null,
} satisfies WeatherObservation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WeatherObservation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


