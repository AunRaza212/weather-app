import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Feed from "./components/Feed";
import { Stack } from "@mui/material";
import { ApiContext } from "./components/ApiContext";

function App() {
  return (
    <ApiContext>
    <BrowserRouter>
      <Stack whiteSpace="none">
        <SearchBar />
      </Stack>
      <Routes>
        <Route exact path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
    </ApiContext>
  );
}
export default App;