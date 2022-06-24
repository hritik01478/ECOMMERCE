import styled from "styled-components"
import Announcements from "./Announcements"
import Footer from "./Footer"
import Navbar from "./Navbar"
import NewsLetter from "./NewsLetter"
import Products from "./Products"

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
`
const FilterTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
`
const ProductList = () => {
    return (
        <Container>
            <Announcements />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterTitle>Filter Products</FilterTitle></Filter>
                <Filter><FilterTitle>Sort Products</FilterTitle></Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList