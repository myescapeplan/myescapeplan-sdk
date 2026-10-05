
# TripAnchor

Known external commitment that a trip must satisfy.  MEP does not discover or verify this event/appointment. The caller provides its known place and required local calendar dates. `cover` (the public default) requires the trip to contain the complete date interval. `overlap` requires at least one shared local calendar day.

## Properties

Name | Type
------------ | -------------
`destination` | [TripAnchorDestination](TripAnchorDestination.md)
`externalReference` | string
`mode` | string
`requiredPresence` | [TripAnchorPresence](TripAnchorPresence.md)
`title` | string
`type` | string

## Example

```typescript
import type { TripAnchor } from '@myescapeplan/sdk'

// TODO: Update the object below with actual values
const example = {
  "destination": null,
  "externalReference": null,
  "mode": null,
  "requiredPresence": null,
  "title": null,
  "type": null,
} satisfies TripAnchor

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TripAnchor
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


