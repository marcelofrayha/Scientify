import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import InvestModal from "../../invest-modal";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PaidIcon from "@mui/icons-material/Paid";

export default function ResearchCard({
  image_url,
  name,
  authors,
  description,
  cost,
  investment,
  earnings,
  is_ready,
  status,
}) {
  const [investModalOpen, setInvestModalOpen] = useState(false);
  const handleOpenInvestModal = () => setInvestModalOpen(true);
  const handleCloseInvestModal = () => setInvestModalOpen(false);

  function getStatus() {
    if (status === "in_progress") return <RotateRightIcon />;
    if (status === "ready") return <CheckCircleOutlineIcon />;
    if (status === "paid") return <PaidIcon />;
  }

  const styles = {
    costLine: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 320,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "100%", height: 120 }}
          image={image_url}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              Author(s):{" "}
              {authors.map((author, i) => [i > 0 && ", ", author.name])}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>

          <Box>
            <Divider sx={{ margin: 0, marginBottom: "auto" }} variant="inset" />
            <Typography sx={{ marginTop: 2, display: "flex" }}>
              Status: {getStatus()}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                marginTop: 2,
              }}
            >
              <Box sx={styles.costLine}>
                <Typography>Total cost</Typography>
                <Typography>${cost}</Typography>
              </Box>
              <Box sx={styles.costLine}>
                <Typography>Funds Invested</Typography>
                <Typography>${investment}</Typography>
              </Box>
              <Box sx={styles.costLine}>
                <Typography>Earnings</Typography>
                <Typography>${earnings}</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
        <CardActions
          sx={{ display: "flex", alignItems: "stretch", mt: "auto" }}
        >
          <Button variant="outlined" size="small">
            Details
          </Button>
          {is_ready && (
            <Button variant="outlined" size="small">
              Go to Article
            </Button>
          )}

          {investment < cost && (
            <Button
              variant="outlined"
              size="small"
              onClick={handleOpenInvestModal}
            >
              Invest
            </Button>
          )}

          {earnings >= cost && (
            <Button variant="outlined" size="small">
              Burn Tokens
            </Button>
          )}
        </CardActions>
      </Card>
      <InvestModal
        open={investModalOpen}
        handleClose={handleCloseInvestModal}
        title={name}
        maxInvestment={cost - investment}
      />
    </>
  );
}
