import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { mobile } from "../responsive";

// styled Components

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Zed Store</Logo>
        <Desc>
          There are many variations of passage of lorem Ipsum available, but the
          majority have suffered altertation in some form, by injected humor, or
          randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://facebook.com/sherifashraf404"
          >
            <SocialIcon color={"3B5999"}>
              <Facebook />
            </SocialIcon>
          </a>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://twitter.com/sherifashraf177"
          >
            <SocialIcon color={"E4405f"}>
              <Twitter />
            </SocialIcon>
          </a>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://instagram.com/sherifashraf17"
          >
            <SocialIcon color={"55ACEE"}>
              <Instagram />
            </SocialIcon>
          </a>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
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
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} />
          Cairo, Egypt
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px" }} />
          +20 1146708833
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px" }} />
          contact@zedstore.com
        </ContactItem>
        <Payment src={"https://i.ibb.co/Qfvn4z6/payment.png"} />
      </Right>
    </Container>
  );
};

export default Footer;
