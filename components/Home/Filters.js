import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { FilterWrapper } from "./Home.styled";

const Filters = ({
    orderDesc,
    selectedOrder,
    platforms,
    selectedPlatform,
    handleChangeOrder,
    handleChangePlatform,
}) => {
    const options = [
        {
            value: "rating",
            label: "По рейтингу",
            className: selectedOrder.value.includes("rating")
                ? `chevron ${orderDesc ? "chevron-down" : ""}`
                : "",
        },
        {
            value: "released",
            label: "По дате релиза игры",
            className: selectedOrder.value.includes("released")
                ? `chevron ${orderDesc ? "chevron-down" : ""}`
                : "",
        },
    ];

    platforms = platforms.map((platform) => {
        return { value: platform.id, label: platform.name };
    });
    platforms.unshift({ value: "All", label: "Все" });

    return (
        <FilterWrapper>
            <Dropdown
                options={options}
                onChange={handleChangeOrder}
                value={selectedOrder}
                placeholder="Select an option"
                className="dropdown__main"
                controlClassName="order-dropdown__control"
                menuClassName="dropdown-menu"
            />

            <Dropdown
                options={platforms}
                onChange={handleChangePlatform}
                value={selectedPlatform}
                placeholder="Платформы"
                className="platform-dropdown"
                controlClassName="platform-dropdown__control"
                menuClassName="dropdown-menu"
            />
        </FilterWrapper>
    );
};

export default Filters;
