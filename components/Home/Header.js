import { HeaderStyle, Title } from "./Home.styled";

const Header = ({ count, selectedOrder, orderDesc, platform }) => {
    let filters = selectedOrder.label;
    const platforms = platform.label;

    // desc
    if (orderDesc) {
        filters += "(по убыванию)";
    } else {
        filters += "(по возрастанию)";
    }

    return (
        <HeaderStyle>
            <Title>{count} Игр</Title>
            <div>
                Фильтрация: <strong>{filters}</strong>
            </div>

            <div>
                Платформы: <strong>{platforms}</strong>
            </div>
        </HeaderStyle>
    );
};

export default Header;
