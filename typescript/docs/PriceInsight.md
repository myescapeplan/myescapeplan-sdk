
# PriceInsight

A truthful, display-ready claim about one exact price identity.

## Properties

Name | Type
------------ | -------------
`basis` | [PriceBasis](PriceBasis.md)
`changeAmount` | number
`changePercent` | number
`comparisonKey` | string
`confidence` | number
`currency` | string
`currentAmount` | number
`expiresAt` | Date
`explanation` | string
`id` | string
`isNewLow` | boolean
`kind` | [PriceInsightKind](PriceInsightKind.md)
`label` | string
`observationCount` | number
`observedAt` | Date
`previousAmount` | number
`providerName` | string
`relativeBand` | string
`scope` | [PriceInsightScope](PriceInsightScope.md)
`source` | [PriceInsightSource](PriceInsightSource.md)
`thresholdAmount` | number

## Example

```typescript
import type { PriceInsight } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "basis": null,
  "changeAmount": null,
  "changePercent": null,
  "comparisonKey": null,
  "confidence": null,
  "currency": null,
  "currentAmount": null,
  "expiresAt": null,
  "explanation": null,
  "id": null,
  "isNewLow": null,
  "kind": null,
  "label": null,
  "observationCount": null,
  "observedAt": null,
  "previousAmount": null,
  "providerName": null,
  "relativeBand": null,
  "scope": null,
  "source": null,
  "thresholdAmount": null,
} satisfies PriceInsight

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PriceInsight
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


