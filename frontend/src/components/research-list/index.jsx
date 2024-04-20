import { Grid } from "@mui/material";
import ResearchCard from "./research-card";
import Masonry from "@mui/lab/Masonry";

export default function ResearchList({ data }) {
  return (
    <Masonry columns={3} spacing={2}>
      {data.map((research) => (
        <Grid item key={research.id} xs="auto">
          <ResearchCard
            image_url={research.image_url}
            name={research.name}
            authors={research.authors}
            description={research.description}
            cost={research.cost}
            investment={research.investment}
            earnings={research.earnings}
            status={research.status}
          />
        </Grid>
      ))}
    </Masonry>
  );
}
