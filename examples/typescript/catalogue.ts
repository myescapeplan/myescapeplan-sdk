import {
  BusinessTravelAPIApi,
  Configuration,
} from "@myescapeplan/sdk";

const apiKey = process.env.MYESCAPEPLAN_API_KEY;
if (!apiKey) {
  throw new Error("Set MYESCAPEPLAN_API_KEY before running this example.");
}

const destinationId = process.env.MYESCAPEPLAN_DESTINATION_ID;
if (!destinationId) {
  throw new Error("Set MYESCAPEPLAN_DESTINATION_ID before running this example.");
}

const api = new BusinessTravelAPIApi(
  new Configuration({ apiKey }),
);

const response = await api.matchCatalogue({
  catalogueMatchRequest: {
    destinationIds: [destinationId],
    items: [
      {
        destinationIds: [destinationId],
        kind: "stay",
        ref: {
          externalId: "example-beach-hotel",
        },
        title: "Example beach hotel",
        tags: ["beach", "family"],
      },
    ],
  },
});

console.log({
  destinations: response.destinations,
  unmatchedRefs: response.unmatchedRefs,
});
