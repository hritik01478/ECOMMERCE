import styled from "styled-components"

const Container = styled.div`
    background-color: teal;
    height:30px;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15;
    font-weight: 500;
`

function Announcements() {
    return (
        <Container>Super Deal!!! Free Shipping on orders above Rs 1000</Container>
    )
}

export default Announcements