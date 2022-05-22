import Link from "next/link";

import {
    DropdownContent,
    DropdownClose,
    DropdownWrapper,
    SuggestionsInfoPlatforms,
    SuggestionsImage,
    SuggestionsItem,
    SuggestionsHeader,
    SuggestionsWrapper,
} from "./Layout.styled";
import { PlatformIcon } from "../styles/Global.styled";

import SearchLoader from "../reusable/SearchLoader";

import { getPlatformImage } from "../../utils/game";

const Dropdown = ({ gamesCount, isLoading, isSmallScreen, searchResults, handleClose }) => {
    return (
        <DropdownWrapper>
            <DropdownContent>
                <SuggestionsWrapper>
                    {isLoading && <SearchLoader isSmallScreen={isSmallScreen} />}

                    {searchResults?.length > 0 && (
                        <>
                            <SuggestionsHeader>
                                {gamesCount && (
                                    <div>
                                        Игры<span>{gamesCount}</span>
                                    </div>
                                )}
                            </SuggestionsHeader>
                            {searchResults.map((item) => (
                                <SuggestionsItem key={item.id}>
                                    <Link href={`/games/${item.slug}`}>
                                        <SuggestionsImage
                                            img={item.background_image}
                                            onClick={handleClose}
                                        >
                                            <span role="button" />
                                        </SuggestionsImage>
                                    </Link>

                                    <div>
                                        <SuggestionsInfoPlatforms>
                                            {item.parent_platforms
                                                ?.slice(0, 3)
                                                .map(({ platform }, index) => (
                                                    <PlatformIcon
                                                        key={index}
                                                        small={true}
                                                        style={{
                                                            backgroundImage: `url(
                                                                                data:image/svg+xml;base64,${getPlatformImage(
                                                                                    platform.name
                                                                                )}
                                                                            )`,
                                                        }}
                                                    />
                                                ))}
                                            {item.parent_platforms?.length > 3 && (
                                                <div>+{item.parent_platforms.slice(3).length}</div>
                                            )}
                                        </SuggestionsInfoPlatforms>

                                        <Link href={`/games/${item.slug}`}>
                                            <a onClick={handleClose}>{item.name}</a>
                                        </Link>
                                    </div>
                                </SuggestionsItem>
                            ))}
                        </>
                    )}
                </SuggestionsWrapper>
            </DropdownContent>

            {isSmallScreen && (
                <DropdownClose onClick={handleClose}>
                    <span />
                </DropdownClose>
            )}
        </DropdownWrapper>
    );
};

export default Dropdown;
