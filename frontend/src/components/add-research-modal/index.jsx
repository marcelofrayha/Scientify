import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Input } from "@mui/material";
import { useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ClearIcon from "@mui/icons-material/Clear";

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

export default function AddResearchModal({ open, handleClose, setData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [authors, setAuthors] = useState([{ name: "" }]);

  const handleAddResearch = () => {
    setData((prevState) => [
      ...prevState,
      {
        id: prevState.legth + 1,
        name: title,
        description: description,
        image_url: "https://picsum.photos/200/200?v=1",
        authors: authors,
        cost: totalCost,
        investment: 0,
        earnings: 0,
        status: "in_progress",
      },
    ]);
    handleClose();
  };

  const handleAddAuthor = () => {
    setAuthors([...authors, { name: "" }]);
  };

  const handleAuthorChange = (event, index) => {
    const { value } = event.target;
    const editAuthors = [...authors];
    editAuthors[index]["name"] = value;
    setAuthors(editAuthors);
  };

  const deleteAuthorField = (index) => {
    const editAuthors = [...authors];
    editAuthors.splice(index, 1);
    setAuthors(editAuthors);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="div">
          Add Research
        </Typography>

        {/* Title */}
        <Box sx={{ marginTop: 3 }}>
          <Typography id="modal-modal-description" sx={{}}>
            Title
          </Typography>
          <Input
            type="text"
            size="small"
            sx={{ width: "100%" }}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Box>

        {/* Description */}
        <Box sx={{ marginTop: 3 }}>
          <Typography id="modal-modal-description" sx={{}}>
            Description
          </Typography>
          <TextField
            placeholder="Add a short description of what the research aims to achieve and the methodology used."
            multiline
            sx={{ width: "100%" }}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Box>

        {/* Authors */}
        <Box sx={{ marginTop: 3 }}>
          <Typography id="modal-modal-description" sx={{}}>
            Author(s)
          </Typography>
          <Box sx={{ maxHeight: "200px", overflow: "auto" }}>
            {authors.map((author, index) => (
              <TextField
                key={index}
                size="small"
                sx={{ width: "100%", marginTop: 1 }}
                value={author.name}
                onChange={(event) => handleAuthorChange(event, index)}
                InputProps={{
                  endAdornment: index > 0 && (
                    <InputAdornment
                      sx={{ cursor: "pointer" }}
                      position="end"
                      onClick={deleteAuthorField}
                    >
                      <ClearIcon />
                    </InputAdornment>
                  ),
                }}
              />
            ))}
          </Box>

          <PersonAddIcon
            sx={{ cursor: "pointer", marginTop: 1 }}
            onClick={handleAddAuthor}
          />
        </Box>

        {/* Cost */}
        <Box sx={{ marginTop: 3 }}>
          <Typography id="modal-modal-description" sx={{}}>
            Research Cost
          </Typography>
          <Input
            type="number"
            size="small"
            value={totalCost}
            onChange={(event) => setTotalCost(event.target.value)}
            placeholder="NFTs to mint"
            inputProps={{}}
          />
        </Box>

        {/* Add Research button */}
        <Box sx={{ marginTop: 3 }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleAddResearch}
          >
            Add Research
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
