import { forwardRef } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { FilterWrapper, FilterDateInputWrapper } from "./Games.styled";

import DateInput from "lib/DateInput";
import { hasSort, hasReleaseYear } from "utils/filters";

const Filters = ({
  orderDesc,
  selectedOrder,
  platforms,
  selectedPlatform,
  handleChangeOrder,
  handleChangePlatform,
}) => {
  const { i18n } = useTranslation("common");
  const route = useRouter().asPath;

  const options = ["relevance", "created", "name", "released", "added", "rating"].map((item) => {
    return {
      value: item,
      label: i18n.t(item),
      className: selectedOrder.value.includes(item)
        ? `chevron ${orderDesc ? "chevron-down" : ""}`
        : "",
    };
  });

  platforms = platforms.map((platform) => {
    return { value: platform.id, label: platform.name };
  });
  platforms.unshift({ value: "All", label: i18n.t("all") });

  return (
    <FilterWrapper locale={i18n.language}>
      {hasSort(route) && (
        <Dropdown
          options={options}
          onChange={handleChangeOrder}
          value={selectedOrder}
          placeholder={i18n.t("dropdownPlaceholder")}
          className="dropdown__main"
          controlClassName="order-dropdown__control"
          menuClassName="dropdown-menu"
        />
      )}

      {hasReleaseYear(route) && (
        <FilterDateInputWrapper>
          <DateInput
            customInput={<Input />}
            dateFormat="yyyy"
            minDate={new Date("01-01-1990")}
            maxDate={new Date()}
            selected={null}
            showYearPicker
            yearItemNumber={9}
            showPopperArrow={false}
            onChange={(date) => console.log(date)}
          />
        </FilterDateInputWrapper>
      )}

      <Dropdown
        options={platforms}
        onChange={handleChangePlatform}
        value={selectedPlatform}
        placeholder={i18n.t("platforms")}
        className="platform-dropdown"
        controlClassName="platform-dropdown__control"
        menuClassName="dropdown-menu"
      />
    </FilterWrapper>
  );
};

const Input = forwardRef(({ value, onClick }, ref) => {
  const { i18n } = useTranslation("common");
  return (
    <input
      readOnly
      className="date-picker__input"
      onClick={onClick}
      ref={ref}
      value={value}
      placeholder={i18n.t("released")}
    />
  );
});

export default Filters;
