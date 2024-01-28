import React from "react";
import Getintouch from "../component/Getintouch";
import Footer from "../component/Footer";
import ScrollToTopButton from "../component/ScrollToTopButton";

const Contact = () => {
  return (
    <>
      <div className="contactpage">
        <Getintouch />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Contact;
