import styled from "styled-components";

export const MobileContainer = styled.div.attrs({
  className: "flex flex-col pt-3 h-full",
})`
  transition: all 0.5 ease-in-out;
`;

export const MobileLinkContainer = styled.div.attrs({
  className: "flex justify-center",
})``;

export const MobileLink = styled.h2.attrs({
  className:
    "text-xl text-medium-champagne cursor-pointer py-5 transition duration-200 ease-in-out hover:text-middleblue-green",
})``;
