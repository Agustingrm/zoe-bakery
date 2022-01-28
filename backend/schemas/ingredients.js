export default {
  name: "ingredient",
  title: "Ingredients",
  type: "document",
  icon: () => "🍫",
  fields: [
    {
      name: "name",
      title: "Ingredient Name",
      type: "string",
      description: "What is the name of the ingredient?",
    },
    {
      name: "lactose",
      title: "Lactose",
      type: "boolean",
      description: "Is this ingredient suitable for lactose intolerant people??",
      options: {
        layout: "checkbox",
      },
    },
    {
      name: "celiac",
      title: "Celiac",
      type: "boolean",
      description: "Is this ingredient suitable for celiacs?",
      options: {
        layout: "checkbox",
      },
    },
  ],

  preview: {
    select: {
      name: "name",
      lactose: "lactose",
      celiac: "celiac",
    },
    prepare: ({ name, lactose, celiac }) => ({
      title: `${name} ${lactose ? "- ❌🥛" : ""} ${celiac ? "- ❌🌾" : ""}`,
    }),
  },
};
