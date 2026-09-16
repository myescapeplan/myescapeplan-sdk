
# DestinationReasonPayload


## Properties

Name | Type
------------ | -------------
`detailedReasons` | Array&lt;string&gt;
`reasons` | Array&lt;string&gt;
`summary` | string
`tags` | Array&lt;string&gt;

## Example

```typescript
import type { DestinationReasonPayload } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "detailedReasons": null,
  "reasons": null,
  "summary": null,
  "tags": null,
} satisfies DestinationReasonPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DestinationReasonPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


