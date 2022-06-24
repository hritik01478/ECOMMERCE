import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Products from "../components/Products"
import { mobile } from "../responsive"

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right:10px;
    ${mobile({ marginRight: "0px" })};
`
const Select = styled.select`
    padding: 5px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })};
`
const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Announcements />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Yellow</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL </Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option>Newest Arrival</Option>
                        <Option>Price (low to high)</Option>
                        <Option>Price (high to low)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList