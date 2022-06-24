import styled from "styled-components";
import { Facebook, Instagram, Twitter, Pinterest } from "@material-ui/icons";
import { Room, Phone, MailOutline } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none" })};
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin:0px;
    padding:0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap; 
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#eee" })};
`
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Amazon</Logo>
                <Desc>
                    There are many variations of passages Lorem ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomised words which don't look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon bg="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon bg="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{ marginRight: "10px" }} />B503, Raj Labadhi Heritage<br />Gandhinagar (Gujarat)<br /> Pin:382421</ContactItem>
                <ContactItem><Phone style={{ marginRight: "10px" }} />(+91) 7564970051</ContactItem>
                <ContactItem><MailOutline style={{ marginRight: "10px" }} />hritikkumar01478@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
}

export default Footer;