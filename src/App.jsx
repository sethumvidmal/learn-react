import { Grid2 as Grid } from "@mui/material";
import "./App.css";
import AsyncAutocomplete from "./Components/AsyncAutocomplete/AsyncAutocomplete";

function App() {
  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 6 }}>
        <AsyncAutocomplete />
      </Grid>
    </Grid>
  );
}

export default App;
