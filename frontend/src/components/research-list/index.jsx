import { researchData } from "../../data/researchData";
import ResearchCard from "./research-card";

export default function ResearchList() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 20,
        textAlign: "left",
        flexWrap: "wrap",
        flexGrow: 1,
      }}
    >
      {researchData.map((research) => (
        <ResearchCard
          key={research.id}
          image_url={research.image_url}
          name={research.name}
          authors={research.authors}
          description={research.description}
          cost={research.cost}
          investment={research.investment}
          earnings={research.earnings}
        />
      ))}
    </div>
  );
}
