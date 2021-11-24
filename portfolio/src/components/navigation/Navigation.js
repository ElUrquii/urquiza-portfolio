import React, { useState } from "react";
import { Section } from "../styles/GlobalStyles";
import {
  NavContainer,
  LinksContainer,
  LogoContainer,
  NavLink,
  Logo,
  SidebarContainer,
  Menu,
  Close,
} from "./NavigationElements";
import MobileNav from "./MobileNav";
import { useSpring } from "react-spring";

const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const handleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <Section>
        <NavContainer style={props}>
          <LogoContainer>
            <Logo>Portfolio</Logo>
          </LogoContainer>
          <LinksContainer>
            <NavLink>About</NavLink>
            <NavLink>Portfolio</NavLink>
            <NavLink>Contact</NavLink>
          </LinksContainer>
          <SidebarContainer>
            {!isOpened ? (
              <Menu onClick={handleMenu} />
            ) : (
              <Close onClick={handleMenu} />
            )}
          </SidebarContainer>
        </NavContainer>
        {isOpened && <MobileNav />}
      </Section>
    </>
  );
};

export default Navigation;
