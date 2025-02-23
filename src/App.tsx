import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/code-highlight/styles.css";
// import { MantineThemeProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./layout/content";
import LowonganKerja from "./layout/LowonganKerja/LowonganKerja";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/lowongan-kerja" element={<LowonganKerja />} />
        </Routes>
      </BrowserRouter> 
  );}

export default App;
