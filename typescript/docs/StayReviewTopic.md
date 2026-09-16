
# StayReviewTopic


## Properties

Name | Type
------------ | -------------
`description` | string
`name` | string
`negative` | number
`neutral` | number
`positive` | number
`positiveRatio` | number
`totalMentioned` | number

## Example

```typescript
import type { StayReviewTopic } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "name": null,
  "negative": null,
  "neutral": null,
  "positive": null,
  "positiveRatio": null,
  "totalMentioned": null,
} satisfies StayReviewTopic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StayReviewTopic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


