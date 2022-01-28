import PriceInput from "../components/PriceInput";

export default {
  name: "cake",
  title: "Cakes",
  type: "document",
  icon: () => "🍰",
  fields: [
    {
      name: "name",
      title: "Cake Name",
      type: "string",
      description: "Name of the cake",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 50,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the cake in cents",
      validation: (Rule) => Rule.min(499),
      inputComponent: PriceInput,
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "reference", to: [{ type: "ingredient" }] }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      ingredient0: "ingredients.0.name",
      ingredient1: "ingredients.1.name",
      ingredient2: "ingredients.2.name",
      ingredient3: "ingredients.3.name",
    },
    prepare: ({ title, media, ...ingredients }) => {
      // Takes out undefined if there are less than 4 ingredients
      const ingredientsValues = Object.values(ingredients).filter(Boolean);
      // Makes a preview with an ingredients subtitle
      return {
        title,
        media,
        subtitle: ingredientsValues.join(", "),
      };
    },
  },
};
