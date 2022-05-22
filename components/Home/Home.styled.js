import styled from "styled-components";

export const HomeWrapper = styled.main`
	display; flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 100%;
	max-width: 900px;
`;

export const HeaderStyle = styled.div`
	margin-top: 20px;
	padding: 10px 0;

	div {
		padding: 10px 0;
		color: hsla(0,0%,100%,.6);

		strong {
			color: #fff;
			font-size: 15px;
		}
	}
`

export const Title = styled.h2`
	font-size: 28px;
	font-weight: 700;
	color: #fff;
	margin-bottom: 5px;
`

export const FilterWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 24px;
	width: 100%;
	margin-left: auto;
	gap: 10px;

	.dropdown__main {
		font-size: 14px;
	}

	.order-dropdown__control {
		width: auto;
		padding: 10px 32px 10px 132px;
		background-color: hsla(0,0%,100%,.07);
		border-radius: 8px;
		color: #fff;
		cursor: pointer;
		transition: all .3s ease-out;
		border: none;

		&:hover, &:hover::before {
			color: hsla(0,0%,100%,.6);
		}
	}

	.order-dropdown__control::before {
		content: "Сортировать по:";
		position: absolute;
		top: 10px;
		left: 16px;
		transition: all .3s ease-out;
	}

	.dropdown-menu {
		display: block;
		z-index: 200;
		border-radius: 4px;
		background-color: #fff;
		-webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
		box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
	}

	.chevron {
		margin-left: -10px;
	}

	.chevron::before {
		border-style: solid;
		border-width: 0.25em 0.25em 0 0;
		content: '';
		display: inline-block;
		height: 0.45em;
		left: 94%;
		top: 5px;
		position: relative;
		transform: rotate(-45deg);
		vertical-align: top;
		width: 0.45em;
		transition: all .3s ease-out;
	}

	.chevron-down::before{
		top: 0;
		transform: rotate(135deg);
	}


	.platform-dropdown__control {
		width: 280px;
		cursor: pointer;
		transition: all .3s ease-out;
		border: none;
		padding: 10px 32px 10px 115px;

		&:hover, &:hover::before {
			color: rgba(0, 0, 0, 0.5);
		}
	}

	.platform-dropdown__control::before {
		content: "Платформы:";
		position: absolute;
		top: 9px;
		left: 16px;
		color: #000;
		z-index: 100;
		transition: all .3s ease-out;
	}

	@media (max-width: 630px) {
		flex-direction: column;
		align-items:baseline;
    }
`

export const GameListWrapper = styled.div`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: auto auto auto;
    width: 100%;
    position: relative;

    @media (max-width: 980px) {
        grid-template-columns: auto;
		justify-content: center;
    }
`;

export const GameItemInfo = styled.div`
    line-height: 1.9;
    transition: all 0.3s;
    display: none;

	> div {
		display: flex;
		padding-top: 12px;
		align-items: baseline;
		justify-content: space-between;
		font-size: 14.5px;
	}

	> div:not(:last-child) {
		padding-bottom: 12px;
		border-bottom: 1px solid hsla(0, 0%, 100%, 0.07);
	}

	> div span {
		&:first-child {
			color: hsla(0,0%,100%,.4);
		}
	}

	@media (max-width: 980px) {
		${(props) => props.open ? `
			display: block;
		` : `
			display: none;
		`}
    }
`;

export const GameItemInner = styled.div`
    background-color: #202020;
    transition: all 0.3s;
    transform: scale(1);
    border-radius: 12px;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 7%);
    overflow: hidden;
    position: relative;
	width: 280px;

	@media (max-width: 980px) {
		width: 100%;
		max-width: 650px;
    }
`;
export const GameItemOuter = styled.div`
    position: relative;
    &:hover ${GameItemInner} {
		@media (min-width: 981px) {
			width: 430px;
			transform: scale(1.02);
			z-index: 100;
			position: absolute;
			top: 0;
			left: 0;
			width: 280px;
		}
    }

    &:hover ${GameItemInfo} {
		@media (min-width: 981px) {
			display: block;
		}
    }
`;

export const GameItemBody = styled.div`
    padding: 16px 16px 24px;
`;

export const GameItemTitle = styled.div`
	font-size: 24px;
	font-weight: 700;
	line-height: 28px;
	margin-bottom: 8px;

	a {
		color: #fff;
		transition: all .2s ease-out;
		&:hover {
			color: rgba(255, 255, 255, 0.4);
		}
	}
`

export const GameListMedia = styled.div`
    position: relative;
    width: 100%;
    height: 175px;
    overflow: hidden;

    img {
		width: 100%;
    	height: 100%;
    }

	@media (max-width: 980px) {
		height: 350px;
    }

	@media (max-width: 630px) {
		height: 300px;
    }
	@media (max-width: 425px) {
		height: 250px;
    }
`;

export const GameItemPlatforms = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 7px;
	gap: 5px;
	max-height: 15px;
`

export const GameItemShowMore = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 10px 0;

	span {
		font-size: 13px;
		line-height: normal;
		font-weight: 400;
		background-image: linear-gradient(0deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.4) 0,hsla(0,0%,100%,.4) 1px,hsla(0,0%,100%,0) 0);
		cursor: pointer;
	}
`