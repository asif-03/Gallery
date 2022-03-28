import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import footerLogo from "../images/family_logo2.webp";

const Footer = () => {
  return (
    <MDBFooter
      color="blue"
      className="font-small pt-4 mt-4 bg-dark text-light text-center"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title">Ansari Family</h5>
            <p>
              Here you can find the memories of the Ansari family whithin all of
              the photographs from different events . <br />
              You can also able to add and extract images from this websites as
              long as you are the member . <br />
              Contact : 9336369290
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright flex flex-lg-row text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> FamilyGallery </a>
          <img
            src={footerLogo}
            style={{ width: 80, height: 70, marginLeft: 20 }}
          />
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
