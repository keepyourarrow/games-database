import Link from "next/link";

import { Header, HeaderTitle, HeaderWrapper } from "./Layout.styled";

import Search from "./Search";

const Layout = () => {
    return (
        <Header>
            <HeaderWrapper>
                <HeaderTitle>
                    <Link href="/">
                        <a>
                            <div>RAWG</div>
                        </a>
                    </Link>
                </HeaderTitle>
                <Search />
            </HeaderWrapper>
        </Header>
    );
};

export default Layout;
