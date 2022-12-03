import { ContentWrapper } from "../styles/Global.styled";

import Header from "../reusable/Header";
import InfoList from "./InfoList";

const InfoContent = ({ data, title, type }) => {
  return (
    <ContentWrapper>
      <Header title={title} />
      <InfoList data={data} type={type} />
    </ContentWrapper>
  );
};

export default InfoContent;
