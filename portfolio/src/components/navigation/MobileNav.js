import React from "react";
import { Section } from "../styles/GlobalStyles";
import {
  MobileContainer,
  MobileLink,
  MobileLinkContainer,
} from "./MobileNavElements";

const MobileNav = () => {
  return (
    <>
      <Section>
        <MobileContainer>
          <MobileLinkContainer>
            <MobileLink>About</MobileLink>
          </MobileLinkContainer>
          <MobileLinkContainer>
            <MobileLink>Portfolio</MobileLink>
          </MobileLinkContainer>
          <MobileLinkContainer>
            <MobileLink>Contact</MobileLink>
          </MobileLinkContainer>
        </MobileContainer>
      </Section>
    </>
  );
};

export default MobileNav;
