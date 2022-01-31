import React from "react";
import ItemGrid from "../components/ItemGrid";
import LoadingGrid from "../components/LoadingGrid";
import { HomePageGrid } from "../styles/Grids";
import useLatestData from "../utils/useLatestData";

function CurrentlyWorking({ bakers }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark">Bakers</span>
      </h2>
      <p>Currently baking cakes</p>
      {!bakers && <LoadingGrid count={4} />}
      {bakers && !bakers?.length && <p>No one is working right now</p>}
      {bakers?.length && <ItemGrid items={bakers} />}
    </div>
  );
}
function Slices({ slice }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark">Slices</span>
      </h2>
      <p>Come on by and get a slice of happiness</p>
      {!slice && <LoadingGrid count={4} />}
      {slice && !slice?.length && <p>Nothing Available Right Now</p>}
      {slice?.length && <ItemGrid items={slice} />}
    </div>
  );
}

export default function HomePage() {
  const { bakers, slice } = useLatestData();

  return (
    <div className="center">
      <h1>The Classic French Bakery</h1>
      <p>Open 8h to 20h Every Single Day</p>
      <HomePageGrid>
        <CurrentlyWorking bakers={bakers} />
        <Slices slice={slice} />
      </HomePageGrid>
    </div>
  );
}
