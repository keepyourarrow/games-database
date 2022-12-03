import styled from "styled-components";
import { PrimaryBlack, PrimaryGray, PrimaryHover, PrimaryWhite } from "../styles/Global.styled";

export const Header = styled.header`
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 40px;

  @media (max-width: 980px) {
    padding: 12px 10px;
  }
  @media (max-width: 720px) {
    padding: 0;
  }
`;

export const HeaderTitle = styled.div`
  a {
    background-image: none;
    font-size: 14px;
    line-height: normal;
    font-weight: 400;
    position: relative;
    text-transform: uppercase;
    font-weight: 500;
    border: none;
    white-space: nowrap;

    ${PrimaryWhite}

    div {
      position: relative;
      font-size: 18px;
      font-weight: 900;
      line-height: 1;
      letter-spacing: 5px;

      ${PrimaryWhite}
    }
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  form {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  input {
    width: 100%;
    height: 44px;
    padding: 0 12px 0 38px;
    line-height: 14px;
    color: hsla(0, 0%, 100%, 0.6);
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIG9wYWNpdHk9Jy40JyB3aWR0aD0nMzEnIGhlaWdodD0nMzEnIHZpZXdCb3g9JzAgMCAxNCAxNCc+PHBhdGggZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNOS4yMDIgMy4wMjZhNC4zNjcgNC4zNjcgMCAxMC02LjE3NiA2LjE3NiA0LjM2NyA0LjM2NyAwIDEwNi4xNzYtNi4xNzZtNC41NDMgMTAuNzE5YS44NzUuODc1IDAgMDEtMS4yMzYgMGwtMi43NTEtMi43NTJjLTIuMzk1IDEuNzktNS43OTEgMS42MjEtNy45NjctLjU1NWE2LjExMyA2LjExMyAwIDAxMC04LjY0NyA2LjExMyA2LjExMyAwIDAxOC42NDcgMGMyLjE3NiAyLjE3NiAyLjM0NiA1LjU3Mi41NTUgNy45NjdsMi43NTIgMi43NTFjLjM0LjM0MS4zNC44OTQgMCAxLjIzNicvPjwvc3ZnPg==)
      no-repeat scroll 16px;
    background-size: 14px;
    background-color: hsla(0, 0%, 100%, 0.16);
    border: none;
    border-radius: 24px;
    transition: color 0.3s, background-color 0.3s, opacity 0.3s, width 0.05s linear;

    &:hover,
    &:focus {
      ${PrimaryBlack}
      opacity: 1;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE0IDE0Jz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J005LjIwMiAzLjAyNmE0LjM2NyA0LjM2NyAwIDEwLTYuMTc2IDYuMTc2IDQuMzY3IDQuMzY3IDAgMTA2LjE3Ni02LjE3Nm00LjU0MyAxMC43MTlhLjg3NS44NzUgMCAwMS0xLjIzNiAwbC0yLjc1MS0yLjc1MmMtMi4zOTUgMS43OS01Ljc5MSAxLjYyMS03Ljk2Ny0uNTU1YTYuMTEzIDYuMTEzIDAgMDEwLTguNjQ3IDYuMTEzIDYuMTEzIDAgMDE4LjY0NyAwYzIuMTc2IDIuMTc2IDIuMzQ2IDUuNTcyLjU1NSA3Ljk2N2wyLjc1MiAyLjc1MWMuMzQuMzQxLjM0Ljg5NCAwIDEuMjM2Jy8+PC9zdmc+);
      background-color: #fff;
      outline: none;
    }

    @media (max-width: 980px) {
      z-index: 302;
      background-color: #fff;
      opacity: 1;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE0IDE0Jz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J005LjIwMiAzLjAyNmE0LjM2NyA0LjM2NyAwIDEwLTYuMTc2IDYuMTc2IDQuMzY3IDQuMzY3IDAgMTA2LjE3Ni02LjE3Nm00LjU0MyAxMC43MTlhLjg3NS44NzUgMCAwMS0xLjIzNiAwbC0yLjc1MS0yLjc1MmMtMi4zOTUgMS43OS01Ljc5MSAxLjYyMS03Ljk2Ny0uNTU1YTYuMTEzIDYuMTEzIDAgMDEwLTguNjQ3IDYuMTEzIDYuMTEzIDAgMDE4LjY0NyAwYzIuMTc2IDIuMTc2IDIuMzQ2IDUuNTcyLjU1NSA3Ljk2N2wyLjc1MiAyLjc1MWMuMzQuMzQxLjM0Ljg5NCAwIDEuMjM2Jy8+PC9zdmc+);
      background-color: #fff;

      ${PrimaryBlack}
    }
  }

  @media (max-width: 980px) {
    ${(props) =>
      props.open
        ? `
            position: absolute;
            top: 10px;
            left: 0;
            max-width: 98%
        `
        : `
            max-width: 400px;
        `}
  }
  @media (max-width: 630px) {
    ${(props) =>
      props.open
        ? `
            max-width: 98%
        `
        : `
            max-width: 300px;
        `}
  }

  @media (max-width: 425px) {
    ${(props) =>
      props.open
        ? `
            max-width: 98%
        `
        : `
            max-width: 200px;
        `}
  }
`;

export const DropdownWrapper = styled.div`
  margin-top: 12px;
  min-width: 240px;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 301;

  @media (max-width: 980px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin: 0;
  }
`;

export const DropdownContent = styled.div`
  border-radius: 18.5px;
  background: #000;
  width: 650px;
  height: 100%;
  min-height: 200px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);

  @media (max-width: 980px) {
    width: 100%;
    margin-top: 40px;
    overflow-y: auto;
  }
`;

export const DropdownClose = styled.button`
  display: flex;
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 0;
  background-color: #fff;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.3s;

  span {
    height: 16px;
    width: 16px;
    margin: 16px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxOScgaGVpZ2h0PScxOScgdmlld0JveD0nMCAwIDE5IDE5Jz48cGF0aCBkPSdNMiAybDE1IDE1bTAtMTVMMiAxNycgZmlsbD0nbm9uZScgc3Ryb2tlPScjMUQxRDFEJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycvPjwvc3ZnPg==);
    background-size: cover;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
export const DropdownOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 300;
`;

export const SuggestionsWrapper = styled.div`
  padding: 15px 16px;
  margin: 0 0 10px;
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
`;

export const SuggestionsHeader = styled.div`
  margin: 16px 0 8px;
  font-size: 18px;
  font-weight: 700;

  ${PrimaryWhite}

  span {
    font-weight: 400;
    margin-left: 4px;

    ${PrimaryGray}
  }
`;
export const SuggestionsItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 0;
  width: 100%;

  a {
    transition: all 0.3s;
    font-size: 14px;
    font-weight: 700;

    ${PrimaryWhite}
    ${PrimaryHover}
  }
`;

export const SuggestionsImage = styled.a`
	width: 36px;
	height: 47px;
	margin-right: 8px
	transition: opacity .3s;

	&:hover {
		opacity: 0.4;
	}

	span {
		background-image: url(${(props) => props.img});
		display: block;
		width: 100%;
		height: 100%;
		background-color: hsla(0,0%,100%,.05);
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 6px;
		cursor: pointer;
	}
`;
export const SuggestionsInfoPlatforms = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 3px;
  font-size: 14px;
`;

export const SidebarWrapper = styled.div`
  position: sticky;
  top: 0px;
  > aside {
    width: 200px;
    margin-right: 20px;
    margin-top: 40px;
  }
`;

export const SidebarItem = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;

export const SidebarTitle = styled.span`
  display: block;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;

  transition: all 0.2s;

  ${PrimaryHover}
`;

export const SidebarList = styled.ul`
  margin: 0;
  margin-top: 15px;
  padding: 0;
`;
export const SidebarListTitle = styled(SidebarTitle)`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "16px")};
  font-weight: 400;
  margin-top: 2px;
`;

export const SidebarIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-bottom: 7px;
  background-color: hsla(0, 0%, 100%, 0.1);
  border-radius: 6px;
  transition: all 0.2s;
  svg {
    width: 18px;
    height: 18px;
  }
  img {
    width: 32px;
    height: 32px;
  }
`;

export const SidebarListItem = styled.span`
  display: flex;
  gap: 10px;

  &:hover ${SidebarIcon} {
    background: #fff;
  }
  &:hover ${SidebarIcon} > svg path {
    fill: #000 !important;
  }
  &:hover ${SidebarIcon} > span {
    color: #000 !important;
  }
`;
export const SidebarShowAllBtn = styled(SidebarListItem)`
  opacity: 0.4;
  transition: all 0.2s;
`;

export const MenuWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  background-color: #000;
  z-index: 500;
  padding: 15px;
  box-shadow: -2px -3px 10px 0px #fff;
  overflow-y: auto;
  transition: all 0.2s;
`;

export const MenuOverlay = styled(DropdownOverlay)`
  z-index: 350;
  background: rgba(0, 0, 0, 0.5);
`;
