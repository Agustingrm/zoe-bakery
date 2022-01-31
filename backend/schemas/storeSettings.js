export default {
  name: "storeSettings",
  title: "Settings",
  type: "document",
  icon: () => `⚙️`,
  fields: [
    {
      name: "name",
      title: "Store Name",
      type: "string",
      description: "Name of the cake",
    },
    {
      name: "bakers",
      title: "Bakers currently working",
      type: "array",
      of: [{ type: "reference", to: [{ type: "person" }] }],
    },
    {
      name: "slice",
      title: "Cakes currently available by Slice",
      type: "array",
      of: [{ type: "reference", to: [{ type: "cake" }] }],
    },
  ],
};
