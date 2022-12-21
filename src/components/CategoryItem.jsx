import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Image,
  Info,
  Title,
} from "./StyledCommponents/CategoryItemsStyled";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title style={{ color: "black" }}>{item.title}</Title>
          <Button style={{ color: "black" }}>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
