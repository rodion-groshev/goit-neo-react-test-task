import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import { lazy } from "react";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("../pages/DetailsPage/DetailsPage"));
const Features = lazy(() => import("./Features/Features"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
