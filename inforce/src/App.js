import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import {Navigate, Route, Routes} from "react-router-dom";

import React from "react";
import ProductView from "./components/ProductView/ProductView";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Navigate replace to="/listView" />} />
            <Route path="/listView" element={<ProductsList />} />
            <Route path="/productView/:id/" element={<ProductView />} />
        </Routes>
    </div>
  );
}

export default App;
