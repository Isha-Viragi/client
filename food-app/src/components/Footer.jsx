import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="bg-secondary text-light py-3 position-fixed bottom-0 w-100">
        <Container>
          <p className="m-0 text-center">
            © {new Date().getFullYear()} The Cabinet. All rights reserved.
          </p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
