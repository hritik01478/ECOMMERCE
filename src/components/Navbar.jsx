import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 70px;
    ${mobile({ height: "50px" })};
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })};
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })};
`
const SearchContainer = styled.div`
    display: flex;
    align-items:center;
    border: 0.5px solid lightgray;
    margin-left: 20px;
    padding:5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })};
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    // ${mobile({ justifyContent: "flex-start" })};
`
const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    font-size: 40px;
    ${mobile({ fontSize: "25px" })};
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center", flex: 2 })};
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor:pointer;
    margin-left: 20px;
    ${mobile({ fontSize: "12px", marginLeft: "12px" })};
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>IN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: "16px" }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>E - Shopy</Logo></Center>
                <Right>
                    <Link to="/register" style={{ textDecoration: "none" }}>
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to="/cart" style={{ color: "black" }}>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined />

                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;