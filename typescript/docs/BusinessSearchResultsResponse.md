
# BusinessSearchResultsResponse


## Properties

Name | Type
------------ | -------------
`generatedAt` | Date
`results` | [Array&lt;BusinessSearchResult&gt;](BusinessSearchResult.md)
`searchId` | string
`status` | [BusinessJobStatus](BusinessJobStatus.md)

## Example

```typescript
import type { BusinessSearchResultsResponse } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "generatedAt": null,
  "results": null,
  "searchId": null,
  "status": null,
} satisfies BusinessSearchResultsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessSearchResultsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


