import { Grid } from "@mui/material";
import { researchData } from "../../data/researchData";
import ResearchCard from "./research-card";

export default function ResearchList() {
  return (
    <Grid container spacing={2} style={{ textAlign: "left" }}>
      {researchData.map((research) => (
        <Grid item key={research.id} xs="auto">
          <ResearchCard
            image_url={research.image_url}
            name={research.name}
            authors={research.authors}
            description={research.description}
            cost={research.cost}
            investment={research.investment}
            earnings={research.earnings}
            is_ready={research.is_ready}
            status={research.status}
          />
        </Grid>
      ))}
    </Grid>
  );
}
