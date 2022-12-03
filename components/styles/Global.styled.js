import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #151515;
    color: #fff;
	-webkit-font-smoothing: antialiased;
  }

  a {
	  text-decoration: none;
	  color: #fff;
  }

  .react-datepicker__year-wrapper {
      max-width: 204px;
  }

  .react-datepicker__month-text {
      margin: 5px !important;
      padding: 5px !important;
      width: 4.5rem !important;
  }

`;

export const PrimaryHover = css`
  &:hover {
    color: hsla(0, 0%, 100%, 0.4);
  }
`;

export const SecondaryHover = css`
  &:hover {
    color: #000;
  }
`;

export const TertiaryHover = css`
  &:hover {
    color: #fff;
  }
`;

export const PrimaryGray = css`
  color: hsla(0, 0%, 100%, 0.4);
`;

export const PrimaryWhite = css`
  color: #fff;
`;

export const PrimaryBlack = css`
  color: #000;
`;

export const AppWrapper = styled.div`
  padding: 10px;
  overflow-x: hidden;

  @media (max-width: 980px) {
    padding: 10px 15px;
  }
`;

export const AppLoader = styled.div`
  margin-top: 15px;
`;

export const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 40px;
  margin-top: 30px;

  @media (max-width: 720px) {
    padding: 0;
    display: block;
  }
`;

export const ContentWrapper = styled.div`
	display; flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 100%;
	max-width: 1920px;

	@media (max-width: 1200px) {
		max-width: 900px;
    }
`;

export const DataListWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(
    4,
    ${(props) => (props.width ? `${props.width * 0.25 - 90}px` : "auto")}
  );
  width: 100%;
  position: relative;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(
      3,
      ${(props) => (props.width ? `${props.width * 0.33 - 110}px` : "auto")}
    );
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(
      2,
      ${(props) => (props.width ? `${props.width * 0.33}px` : "auto")}
    );
  }
  @media (max-width: 980px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

export const PlatformIcon = styled.div`
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  display: inline-block;

  ${(props) =>
    props.small
      ? `
    width: 12px;
    height: 14px;
  `
      : props.extraLarge
      ? `
		width: 22px;
		height: 18px;
  `
      : `
    width: 19px;
    height: 15px;
  `}
`;

export const CenteredTitle = styled.h3`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const MetaScore = styled.div`
  display: inline-block;
  padding: 2px 0;
  margin-left: auto;
  min-width: 32px;
  text-align: center;
  color: #6dc849;
  border-color: rgba(109, 200, 73, 0.4);
  font-weight: 700;
  border: 1px solid;
  border-radius: 4px;
`;

export const MainLink = styled.a`
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0.4) 0,
    hsla(0, 0%, 100%, 0.4) 1px,
    hsla(0, 0%, 100%, 0) 0
  );
  cursor: pointer;
  display: inline;
  transition: all 0.3s;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: hsla(0, 0%, 100%, 0.4);
  }
`;

export const RoundButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 50px;
  height: 50px;
  border: 1px solid hsla(0, 0%, 59.2%, 0.05);
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 0.1);
  cursor: pointer;
  transition: all 0.2s;

  span {
    height: 16px;
    width: 16px;
    margin: 16px;
    transition: all 0.2s;
  }

  &:hover {
    background-color: #fff;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 400;
  width: 100%;
  height: 100%;
  background-color: #000;
  outline: none;
`;

export const ModalClose = styled.div`
  position: absolute;
  bottom: 15px;
  right: 20px;
  ${RoundButton}

  span {
    background-size: cover;
    filter: grayscale(1) brightness(20);
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxOScgaGVpZ2h0PScxOScgdmlld0JveD0nMCAwIDE5IDE5Jz48cGF0aCBkPSdNMiAybDE1IDE1bTAtMTVMMiAxNycgZmlsbD0nbm9uZScgc3Ryb2tlPScjMUQxRDFEJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycvPjwvc3ZnPg==);
  }

  &:hover span {
    filter: grayscale(1) brightness(0);
  }
`;

export const Chevron = styled.span`
  border-style: solid;
  border-width: 0.1em 0.1em 0 0;
  height: 10px;
  width: 10px;

  ${(props) => props.up && `transform: rotate(-45deg);`}
  ${(props) => props.down && `transform: rotate(135deg);`}
    ${(props) => props.right && `transform: rotate(45deg);`}
    ${(props) => props.left && `transform: rotate(-135deg);`}

    ${(props) => props.margin && `margin: ${props.margin};`}
    transition: all .3s ease-out;
`;
export const ModalImageWrapper = styled.div`
  width: 92vw;
  padding: 20px 50px;
  height: 100%;

  .slide img {
    width: 100%;
    height: 87vh;
    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width: 980px) {
    padding: 20px 10px;
    width: 95%;
  }

  .thumbs-wrapper {
    margin: 0;
    margin-left: -40px;
  }
`;

export const PageArt = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
`;
export const ArtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  min-height: 100%;
`;

export const Art = styled.div`
  height: 500px;
  background-color: transparent;
  background: no-repeat top;
  background-image: linear-gradient(to bottom, rgba(15, 15, 15, 0), rgb(21, 21, 21)),
    linear-gradient(to bottom, rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),
    url(${(props) => props.art});
  background-size: cover;
  z-index: 1;
  width: 100%;
  max-height: 100%;
`;

export const Avatar = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent no-repeat 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
