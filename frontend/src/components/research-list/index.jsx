import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function ResearchList() {
  const researchData = [
    {
      id: "1",
      name: "Research 1",
      description: "This is my research",
      image_url: "https://picsum.photos/200/200",
      authors: [
        {
          name: "Marcelo",
          url: "www.lattes.com.br/marcelo",
        },
      ],
      cost: 1000000,
      invested_amount: 633001,
      read_amount: 300,
    },
    {
      id: "2",
      name: "Research 2",
      description: "This is my research",
      image_url: "https://picsum.photos/200/200",
      authors: [
        {
          name: "Marcelo",
          url: "www.lattes.com.br/marcelo",
        },
      ],
      cost: 1000000,
      invested_amount: 633001,
      read_amount: 300,
    },
    {
      id: "3",
      name: "Research 3",
      description: "This is my research",
      image_url: "https://picsum.photos/200/200",
      authors: [
        {
          name: "Marcelo",
          url: "www.lattes.com.br/marcelo",
        },
      ],
      cost: 1000000,
      invested_amount: 633001,
      read_amount: 300,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      {researchData.map((research) => (
        <Card sx={{ display: "flex" }} key={research.id}>
          <CardMedia component="img" height="140" image={research.image_url} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {research.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {research.description}
              </Typography>
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
