import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import { researchData } from "../../data/researchData";

export default function ResearchList() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 15,
        textAlign: "left",
        flexWrap: "wrap",
        flexGrow: 1,
      }}
    >
      {researchData.map((research) => (
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 320,
          }}
          key={research.id}
        >
          <CardMedia
            component="img"
            sx={{ width: "100%", height: 120 }}
            image={research.image_url}
          />
          <Box sx={{}}>
            <CardContent sx={{}}>
              <Typography gutterBottom variant="h6" component="div">
                {research.name}
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                Author(s):{" "}
                {research.authors.map((author, i) => [
                  i > 0 && ", ",
                  author.name,
                ])}
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                {research.description}
              </Typography>

              <Divider sx={{ margin: 0 }} variant="inset" />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginTop: 2,
                }}
              >
                <Typography>${research.cost}</Typography>
                <Typography>${research.investment}</Typography>
                <Typography>${research.earnings}</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small">Read Article</Button>
              <Button size="small">Invest</Button>
              <Button size="small">Burn Tokens</Button>
            </CardActions>
          </Box>
        </Card>
      ))}
    </div>
  );
}
