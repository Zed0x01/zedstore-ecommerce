import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { mobile } from "../responsive";

// styled Components

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const SelectItem = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <SelectItem disabled selected>
              Color
            </SelectItem>
            <SelectItem>White</SelectItem>
            <SelectItem>Black</SelectItem>
            <SelectItem>Red</SelectItem>
            <SelectItem>Blue</SelectItem>
            <SelectItem>Yellow</SelectItem>
            <SelectItem>Green </SelectItem>
          </Select>
          <Select>
            <SelectItem disabled selected>
              Size
            </SelectItem>
            <SelectItem>XS</SelectItem>
            <SelectItem>S</SelectItem>
            <SelectItem>M</SelectItem>
            <SelectItem>L</SelectItem>
            <SelectItem>XL</SelectItem>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <SelectItem>Newest</SelectItem>
            <SelectItem>Price (asc)</SelectItem>
            <SelectItem>Price (des)</SelectItem>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
