import { useRouter } from "next/router";
import StaticContent from "hooks/useStaticContent";

import {
  HeaderStyle,
  HeaderTags,
  HeaderTagItem,
  HeaderTitle,
  HeaderDescription,
  HeaderSecondaryDescription,
  HeaderAvatar,
} from "./Reusable.styled";

import HeaderLoader from "./HeaderLoader";

import DateInput from "lib/DateInput";
import { splitSlug } from "utils/strings";
import { hasCalendar } from "utils/filters";

const Header = ({ date, info, tags, title, description, handleChangeDate }) => {
  const route = useRouter().asPath;

  return (
    <HeaderStyle>
      <HeaderTitle image={info?.image}>
        {splitSlug(title)}
        {info?.image && <HeaderAvatar image={info.image} />}
      </HeaderTitle>

      {hasCalendar(route) && (
        <div>
          <DateInput
            inline
            minDate={new Date("01-01-1990")}
            maxDate={new Date()}
            selected={new Date(date)}
            showPopperArrow={false}
            showMonthYearPicker
            showFullMonthYearPicker
            showFourColumnMonthYearPicker
            onChange={handleChangeDate}
          />
        </div>
      )}

      <StaticContent>
        {info?.positions?.length > 0 && (
          <HeaderDescription>
            {info.positions.map((position) => position.name).join(", ")}
          </HeaderDescription>
        )}
        {info?.description && (
          <HeaderSecondaryDescription
            dangerouslySetInnerHTML={{ __html: info?.description }}
          ></HeaderSecondaryDescription>
        )}

        {tags?.length > 0 && (
          <HeaderTags>
            <span>Related tags:</span>
            {tags.map((item, index) => (
              <HeaderTagItem key={index}>{item.name}</HeaderTagItem>
            ))}
          </HeaderTags>
        )}
      </StaticContent>

      {description !== undefined && (
        <div>
          {description !== null ? (
            <HeaderDescription>{description}</HeaderDescription>
          ) : (
            <HeaderLoader height={20} />
          )}
        </div>
      )}
    </HeaderStyle>
  );
};

export default Header;
