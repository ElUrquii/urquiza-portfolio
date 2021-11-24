import React from "react";
import { Section } from "../styles/GlobalStyles";
import {
  MobileContainer,
  MobileLink,
  MobileLinkContainer,
} from "./MobileNavElements";
import { useSpring } from "react-spring";

const MobileNav = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <>
      <Section>
        <MobileContainer style={props}>
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
