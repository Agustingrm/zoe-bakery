const path = require("path");
// Allows to use fetch into node
const fetch = require("isomorphic-fetch");

async function makeCakePages({ graphql, actions }) {
  // Template
  const cakeTemplate = path.resolve("./src/templates/Cake.js");
  // Query Cakes
  const { data } = await graphql(`
    query {
      cakes: allSanityCake {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // Loop over cakes
  data.cakes.nodes.forEach((cake) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `cake/${cake.slug.current}`,
      component: cakeTemplate,
      context: {
        slug: cake.slug.current,
      },
    });
  });
}

async function makeIngredientsPage({ graphql, actions }) {
  // Template
  const ingredientTemplate = require.resolve("./src/pages/cakes.js");
  // Query Igredients
  const { data } = await graphql(`
    query {
      ingredients: allSanityIngredient {
        nodes {
          name
          id
        }
      }
    }
  `);
  // Loop over ingredients
  data.ingredients.nodes.forEach((ingredient) => {
    actions.createPage({
      path: `ingredient/${ingredient.name}`,
      component: ingredientTemplate,
      context: {
        ingredient: ingredient.name,
      },
    });
  });
}

async function fetchCoffeAndTurnIntoNodes({ actions, createNodeId, createContentDigest }) {
  // Fetch Coffe
  const res = await fetch("https://api.sampleapis.com/coffee/hot");
  const coffes = await res.json();
  // Loop over each one
  for (const coffe of coffes) {
    // Create a node for each coffe
    const nodeMeta = {
      id: createNodeId(`coffe-${coffe.title}`),
      parent: null,
      children: [],
      internal: {
        type: "Coffe",
        mediaType: "application/json",
        contentDigest: createContentDigest(coffe),
      },
    };
    // Create a node for that coffe
    actions.createNode({
      ...coffe,
      ...nodeMeta,
    });
  }
}

exports.sourceNodes = async function (params) {
  // Fetch coffe and source them to gatsby
  await Promise.all([fetchCoffeAndTurnIntoNodes(params)]);
};

async function makeBakersPage({ graphql, actions }) {
  // Query Bakers
  const { data } = await graphql(`
    query {
      bakers: allSanityPerson {
        totalCount
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  data.bakers.nodes.forEach((baker) => {
    actions.createPage({
      component: require.resolve("./src/templates/Baker.js"),
      path: `/bakers/${baker.slug.current}`,
      context: {
        name: baker.person,
        slug: baker.slug.current,
      },
    });
  });
  // Figure out amount of pages
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.bakers.totalCount / pageSize);
  // Loop from 1 to n
  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/bakers/${i + 1}`,
      component: path.resolve("./src/pages/bakers.js"),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

exports.createPages = async function (params) {
  // Create pages dynamically
  // Cakes
  // Ingredients
  await Promise.all([makeCakePages(params), makeIngredientsPage(params), makeBakersPage(params)]);
  // Bakers
};
