
# BusinessApiError


## Properties

Name | Type
------------ | -------------
`code` | string
`details` | { [key: string]: any; }
`message` | string
`retryable` | boolean

## Example

```typescript
import type { BusinessApiError } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "details": null,
  "message": null,
  "retryable": null,
} satisfies BusinessApiError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessApiError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


