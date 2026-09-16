
# BusinessJobResource


## Properties

Name | Type
------------ | -------------
`clientReference` | string
`completedAt` | Date
`createdAt` | Date
`environment` | string
`error` | [BusinessApiError](BusinessApiError.md)
`id` | string
`links` | [BusinessJobLinks](BusinessJobLinks.md)
`startedAt` | Date
`status` | [BusinessJobStatus](BusinessJobStatus.md)

## Example

```typescript
import type { BusinessJobResource } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "clientReference": null,
  "completedAt": null,
  "createdAt": null,
  "environment": null,
  "error": null,
  "id": null,
  "links": null,
  "startedAt": null,
  "status": null,
} satisfies BusinessJobResource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessJobResource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


