import { useState, useEffect } from "react";

const gql = String.raw;

const frag = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

export default function useLatestData() {
  const [slice, setSlice] = useState();
  const [bakers, setBakers] = useState();
  // Use a side effect to fetch he data from the graphql endpoint
  useEffect(function () {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "FirstStore") {
                name
                bakers {
                  ${frag}
                }
                slice {
                  ${frag}
                }
            }
        }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // set the data to state
        console.log(res);
        setSlice(res.data.StoreSettings.slice);
        setBakers(res.data.StoreSettings.bakers);
      });
  }, []);
  return {
    slice,
    bakers,
  };
}
