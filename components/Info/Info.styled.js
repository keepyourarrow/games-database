import styled from "styled-components";
import { Avatar, PrimaryGray, PrimaryHover, PrimaryWhite } from "../styles/Global.styled";

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: rgb(32, 32, 32);
  background-image: linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%),
    url(${(props) => props.image});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 32px 24px;
  border-radius: 6px;
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 20%);
  overflow: hidden;

  a {
    background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 0,
      hsla(0, 0%, 100%, 0.4) 0,
      hsla(0, 0%, 100%, 0.4) 1px,
      hsla(0, 0%, 100%, 0) 0
    );
    text-decoration: none;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;

    ${PrimaryWhite}
    ${PrimaryHover}
  }
`;

export const ItemHeader = styled.div`
  margin: 0 auto 10px;
  min-height: 85px;
`;

export const ItemTitle = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;

export const ItemSecondaryTitle = styled.span`
  display: block;
  width: 100%;
  margin-top: 4px;
  font-size: 12px;
  line-height: normal;
  font-weight: 400;
  text-align: center;
  text-transform: capitalize;
  max-width: 150px;
`;

export const ItemBody = styled.div`
  margintop: 10px;
`;

export const ItemBodyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  font-size: 16px;
  margin-top: 5px;

  > span:first-child {
    font-weight: 700;
  }

  > span:last-child {
    font-size: 14px;
    white-space: nowrap;

    ${PrimaryGray}
  }
  > a {
    max-width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const ItemBodyHeader = styled(ItemBodyItem)`
  margin: 0;
  padding-bottom: 7px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.07);
`;

export const ItemAvatar = styled(Avatar)`
  &&& {
    width: 128px;
    height: 128px;
    background-image: url(${(props) => props.image});
  }
`;
