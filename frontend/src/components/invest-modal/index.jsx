import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Divider, Grid, Slider } from "@mui/material";
import { Input } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: 3,
};

export default function InvestModal({
  open,
  handleClose,
  title,
  maxInvestment,
}) {
  const [investValue, setInvestValue] = useState(1);
  const handleSliderChange = (event, newValue) => {
    setInvestValue(newValue);
  };
  const handleInputChange = (event) => {
    setInvestValue(event.target.value === "" ? 0 : Number(event.target.value));
  };
  const handleBlur = () => {
    if (investValue < 0) {
      setInvestValue(0);
    } else if (investValue > 100) {
      setInvestValue(maxInvestment);
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="div">
          {title}
        </Typography>
        <Divider sx={{ margin: 0 }} variant="inset" />
        <Box sx={{ marginTop: 3 }}>
          <Typography id="modal-modal-description" sx={{}}>
            NFTs to Mint
          </Typography>
          <Grid container spacing={3} alignItems="left">
            <Grid item sm>
              <Slider
                value={investValue}
                onChange={handleSliderChange}
                min={0}
                max={maxInvestment}
              />
            </Grid>
            <Grid item xs>
              <Input
                type="number"
                size="small"
                value={investValue}
                onBlur={handleBlur}
                onChange={handleInputChange}
                placeholder="NFTs to mint"
                inputProps={{ max: maxInvestment }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Typography id="modal-modal-description" sx={{}}>
            Money to be spent
          </Typography>
          <Grid container spacing={3} alignItems="left">
            <Grid item xs>
              <Input
                type="number"
                size="small"
                value={investValue * 5}
                disabled
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Button variant="contained" color="success">
            Send Funds
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}