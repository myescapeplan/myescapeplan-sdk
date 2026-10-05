
# Money

Internal Money representation. amount_minor: integer value of the currency (e.g., cents) currency: ISO 4217 currency code (e.g., \"USD\", \"EUR\") raw_text: original raw text string if available currency_source: source of currency inference (provider, symbol_inferred, unknown) currency_confidence: confidence level of inference

## Properties

Name | Type
------------ | -------------
`amountMinor` | number
`currency` | string
`currencyConfidence` | string
`currencySource` | string
`rawText` | string

## Example

```typescript
import type { Money } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "amountMinor": null,
  "currency": null,
  "currencyConfidence": null,
  "currencySource": null,
  "rawText": null,
} satisfies Money

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Money
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


