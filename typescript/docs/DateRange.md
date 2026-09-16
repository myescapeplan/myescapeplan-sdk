
# DateRange

Represents a range between two dates (inclusive).  Attributes:     start_date (datetime.date): The start of the date range.     end_date (datetime.date): The end of the date range.

## Properties

Name | Type
------------ | -------------
`endDate` | Date
`startDate` | Date

## Example

```typescript
import type { DateRange } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "endDate": null,
  "startDate": null,
} satisfies DateRange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DateRange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


