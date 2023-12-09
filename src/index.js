import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div>
      <div className="">
        <Navbar />
        <Header />
      </div>
      <div><Home /></div>
      <hr className="border-1 p-4"></hr>
      <div className="p-4"><Footer/></div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
