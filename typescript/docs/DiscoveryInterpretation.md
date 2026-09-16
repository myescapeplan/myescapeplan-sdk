
# DiscoveryInterpretation


## Properties

Name | Type
------------ | -------------
`adults` | number
`budgetAmount` | [BudgetAmount](BudgetAmount.md)
`budgetCurrency` | string
`budgetScope` | string
`categories` | Array&lt;string&gt;
`children` | number
`dateMode` | string
`dateText` | string
`durationNights` | number
`endDate` | string
`origin` | string
`startDate` | string
`title` | string
`warnings` | Array&lt;string&gt;

## Example

```typescript
import type { DiscoveryInterpretation } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "adults": null,
  "budgetAmount": null,
  "budgetCurrency": null,
  "budgetScope": null,
  "categories": null,
  "children": null,
  "dateMode": null,
  "dateText": null,
  "durationNights": null,
  "endDate": null,
  "origin": null,
  "startDate": null,
  "title": null,
  "warnings": null,
} satisfies DiscoveryInterpretation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveryInterpretation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


