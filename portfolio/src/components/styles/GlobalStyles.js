import styled from "styled-components";

export const Section = styled.div.attrs({
  className: "container mx-auto overflow-hidden h-full",
})`
  scroll-snap-type: y mandatory;
`;

export const Header = styled.h1.attrs({
  className: "text-4xl text-medium-champagne",
})`
  scroll-snap-align: start;
`;
