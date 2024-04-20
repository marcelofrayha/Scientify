import { Button } from "@mui/material";
import "./App.css";
import ResearchList from "./components/research-list";
import AddResearchModal from "./components/add-research-modal";
import { useState } from "react";
import { researchData } from "./data/researchData";

function App() {
  const [data, setData] = useState(researchData);

  const [addResearchModalOpen, setAddResearchModalOpen] = useState(false);
  const handleOpenAddResearchModal = () => setAddResearchModalOpen(true);

  const handleCloseAddResearchModal = () => setAddResearchModalOpen(false);

  return (
    <>
      <h1>Scientify</h1>
      <Button
        sx={{ marginBottom: 3 }}
        variant="contained"
        onClick={handleOpenAddResearchModal}
      >
        Add Research
      </Button>
      <ResearchList data={data} />
      <AddResearchModal
        open={addResearchModalOpen}
        handleClose={handleCloseAddResearchModal}
        setData={setData}
      />
    </>
  );
}

export default App;
