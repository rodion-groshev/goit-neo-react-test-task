import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />} />
        {/* <Route path='*' element={} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
