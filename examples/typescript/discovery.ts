import { BusinessTravelAPIApi, Configuration } from "@myescapeplan/sdk";

const apiKey = process.env.MYESCAPEPLAN_API_KEY;
if (!apiKey) {
  throw new Error("Set MYESCAPEPLAN_API_KEY before running this example.");
}

const api = new BusinessTravelAPIApi(
  new Configuration({ apiKey }),
);

const discovery = await api.createDiscovery({
  idempotencyKey: `example-${Date.now()}`,
  discoveryRequest: {
    query: "four nights next month, somewhere warm, under 500 GBP",
    limit: 5,
  },
});

console.log({
  discoveryId: discovery.discoveryId,
  opportunities: discovery.opportunities,
});
