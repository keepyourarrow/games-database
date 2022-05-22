import React from 'react'
import ContentLoader from 'react-content-loader';

import useMediaQuery from '../../hooks/useMediaQuery';

// Skeleton loader
const GamesListLoader = () => {
    const isSmallScreen = useMediaQuery(980);

    let content = [
        {x:0, y: 0},
        {x:110, y: 0},
        {x:220, y: 0},
        {x:0, y: 110},
        {x:110, y: 110},
        {x:220, y: 110},
    ]

    let viewBox = "0 0 450 215";
    let contentHeight = 550;

    if (isSmallScreen) {
        viewBox = "0 0 150 105";
        contentHeight = 250;
        content = [
            {x: 0, y: 0},
        ]
    }
    return (
        <div>
            <ContentLoader
                height={contentHeight}
                speed={4}
                backgroundColor={'#333'}
                foregroundColor={'rgba(255,255,255,0.1'}
                viewBox={viewBox}
            >
                {content.map((item, index) => {
                    const platformsProps = {
                        rx: "4",
                        ry: "4",
                        width: "10",
                        height: "8"
                    }
                    return (
                    <React.Fragment key={index}>
                        <rect x={item.x} y={item.y} rx="5" ry="5" width="100" height="65" />
                        <rect x={item.x} y={item.y + 70} {...platformsProps} />
                        <rect x={item.x + 12} y={item.y + 70} {...platformsProps} />
                        <rect x={item.x + 24} y={item.y + 70} {...platformsProps} />
                        <rect x={item.x} y={item.y + 82} rx="3" ry="3" width="60" height="10" />
                    </React.Fragment>
                    )
                })}

            </ContentLoader>
        </div>
    )
}

export default GamesListLoader
