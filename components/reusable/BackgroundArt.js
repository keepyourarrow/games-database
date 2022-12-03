import { Art, ArtWrapper, PageArt } from "../styles/Global.styled";

const BackgroundArt = ({ image }) => {
  return (
    <PageArt>
      <ArtWrapper>
        <Art art={image} />
      </ArtWrapper>
    </PageArt>
  );
};

export default BackgroundArt;
