import Link from "next/link";
import useMediaQuery from "hooks/useMediaQuery";
import { useRouter } from "next/router";

import { Header, HeaderTitle, HeaderWrapper } from "./Layout.styled";

import Search from "./Search";
import Menu from "./Menu";

const Layout = () => {
  const isSmallScreen = useMediaQuery(980);
  const { route } = useRouter();

  const isGameRoute = route == "/games/[name]";

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

        {(isSmallScreen || isGameRoute) && <Menu />}
      </HeaderWrapper>
    </Header>
  );
};

export default Layout;
