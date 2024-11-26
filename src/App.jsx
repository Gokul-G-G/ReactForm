import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductInquiryForm from "./ProductInquiryForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductInquiryForm />} />
      </Routes>
    </Router>
  );
};

export default App;
