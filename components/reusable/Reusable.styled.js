import styled from "styled-components";

import { Avatar, PrimaryGray, PrimaryWhite, TertiaryHover } from "../styles/Global.styled";

export const HeaderStyle = styled.div`
  padding-bottom: 10px;
`;

export const HeaderTags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 16px;

  ${PrimaryGray}
`;

export const HeaderTagItem = styled.a`
  font-size: 14px;
  padding: 8px 16px;
  margin-top: 5px;
  background-color: hsla(0, 0%, 100%, 0.07);
  border-radius: 16px;
  cursor: pointer;

  ${PrimaryGray}
  ${TertiaryHover}
`;

export const HeaderTitle = styled.h1`
  font-size: 72px;
  font-weight: 700;
  margin: 0;
  display: flex;

  ${PrimaryWhite}

  @media (max-width: 720px) {
    font-size: 50px;
    text-align: center;
    display: block;
  }
`;

export const HeaderDescription = styled.p`
  font-size: 18px;
  margin: 8px 0;
  font-weight: 700;
  text-transform: capitalize;

  ${PrimaryWhite}
`;

export const HeaderSecondaryDescription = styled.p`
  font-size: 14.5px;
  line-height: 21px;
  font-weight: 400;

  ${PrimaryWhite}
`;

export const HeaderAvatar = styled(Avatar)`
  margin-left: 16px;
  &&& {
    width: 86px;
    height: 86px;
    background-image: url(${(props) => props.image});
  }
`;
