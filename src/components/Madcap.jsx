import React from "react";
import { Container } from "react-bootstrap";
import Mynav from "./MyNave";
import NewNav from "./NewNav";

const Madcap = () => {
  return (
    <>
      <section>
              <Container className="custom_container px-0">
                 <NewNav/>
          <div></div>
        </Container>
      </section>
    </>
  );
};

export default Madcap;
