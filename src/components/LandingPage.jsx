import React from "react";
import { useState } from "react";
import {
  Typography,
  Box,
  Container,
  IconButton,
  Paper,
  Grid,
  Stack,
  Button,
  Link,
  Drawer,
  Divider,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
  HiMenu,
} from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  return (
    <div>
      <HeaderMobile />
      <Banner />
      <Customers />
      <Retailers />
      <Shoffline />
      <Vision />
      <Footer />
    </div>
  );
}

export default LandingPage;

const Banner = () => {
  const Heading = (
    <Typography
      variant='Heading'
      component='p'
      sx={{ mb: "24px", fontWeight: 600 }}
    >
      <Typography variant='Heading'>{"Enhancing your "}</Typography>
      <Typography color='secondary.main' variant='Heading'>
        {"offline shopping "}
      </Typography>
      <Typography variant='Heading'>{"experience"}</Typography>
    </Typography>
  );

  const Description = (
    <Typography variant='Body' component='p' sx={{ mb: "48px" }}>
      At shoffline, with the aim of see online shop offline, you can search any
      product at a walking distance, which will reduce your in-store shopping
      time and we guarantee to show the product with best quality, price and
      reach of your interest
    </Typography>
  );

  const Tertiary = (
    <Button href='#' sx={{ mb: "10px", mr: "16px" }}>
      <Typography variant='Body' sx={{ fontWeight: "bold" }}>
        register
      </Typography>
    </Button>
  );

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "40px auto 40px auto",
      }}
    >
      <Stack
        justifyContent='center'
        alignItems='self-start'
        spacing={5}
        sx={{ width: "100%" }}
      >
        <Grid
          container
          direction='row'
          spacing={6}
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={12} sm={10} md={6}>
            <Box>
              {Heading}
              {Description}
              {Tertiary}
            </Box>
          </Grid>
          <Grid
            item
            xs={10}
            sm={10}
            md={6}
            sx={{
              mt: { xs: -10, md: "0" },
              pt: { xs: "0px !important", md: "48px !important" },
              pl: { xs: "96px !important", md: "48px !important" },
            }}
          >
            <img src='/Banner_Image.png' alt='image' width='100%' />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

const Customers = () => {
  const ShowcaseButtons = ({ next, previous }) => {
    return (
      <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            disabled={!previous}
            onClick={() => !!previous && previous()}
          >
            <HiOutlineArrowCircleLeft />
          </IconButton>
          <IconButton disabled={!next} onClick={() => !!next && next()}>
            <HiOutlineArrowCircleRight />
          </IconButton>
        </div>
      </Box>
    );
  };

  return (
    <Container sx={{ mb: 4 }}>
      <Typography paragraph variant='Headline' sx={{ letterSpacing: "5%" }}>
        What we have for customers
      </Typography>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          position: "relative",
          paddingBottom: "16px",
          textAlign: "center",
        }}
      >
        <Carousel
          responsive={bigcard}
          ssr
          arrows={false}
          showDots={false}
          renderButtonGroupOutside
          customButtonGroup={<ShowcaseButtons />}
        >
          {customers.map((data) => {
            return <Card {...data} key={data.festId + "-cometlabs"} />;
          })}
        </Carousel>
      </div>
    </Container>
  );
};

const Card = (data) => {
  return (
    <Paper
      sx={{
        background: "#D9D9D9",
        width: 320,
        margin: "20px 50px 20px 0",
        border: 0,
        borderRadius: "32px",
      }}
      elevation={1}
    >
      <img src={data.src} alt={data.alt} width='100%' />
      <div style={{ padding: "16px" }}>
        <Typography component='p' variant='Headline'>
          {data.headline}
        </Typography>
        <Typography variant='Boby'>{data.body}</Typography>
      </div>
    </Paper>
  );
};

const bigcard = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 800 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const customers = [
  {
    src: "/look-online.png",
    alt: "Look Online",
    headline: "Easily look for offline products, online!",
    body: "With just an app",
  },
  {
    src: "/explore.png",
    alt: "Explore",
    headline: "Explore shops within walking distance.",
    body: "Explore shops nearby!",
  },
  {
    src: "/offers.png",
    alt: "Latest Offers",
    headline: "latest offers!",
    body: "Checkout awesome coupons which will help save you a ton!",
  },
  {
    src: "/search-filters.png",
    alt: "Search Filters",
    headline: "Explore with search filters",
    body: "search favorited shop or product in your area.",
  },
  {
    src: "/packing-moving.png",
    alt: "Online Visiting",
    headline: "online visiting any offline shop!",
    body: "explore the inventory of all shop across the app",
  },
  {
    src: "/pickupgo.png",
    alt: "Pickup-and-go",
    headline: "pickup-and-go parcels",
    body: "request pre-order parcels",
  },
];

const Retailers = () => {
  const ShowcaseButtons = ({ next, previous }) => {
    return (
      <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            disabled={!previous}
            onClick={() => !!previous && previous()}
          >
            <HiOutlineArrowCircleLeft />
          </IconButton>
          <IconButton disabled={!next} onClick={() => !!next && next()}>
            <HiOutlineArrowCircleRight />
          </IconButton>
        </div>
      </Box>
    );
  };

  return (
    <Container sx={{ mb: 4 }}>
      <Typography variant='Headline'>What we have for Retailers</Typography>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          position: "relative",
          paddingBottom: "16px",
          textAlign: "center",
        }}
      >
        <Carousel
          responsive={bigcard}
          ssr
          arrows={false}
          showDots={false}
          renderButtonGroupOutside
          customButtonGroup={<ShowcaseButtons />}
        >
          {retailers.map((data) => {
            return <Card {...data} key={data.festId + "-cometlabs"} />;
          })}
        </Carousel>
      </div>
    </Container>
  );
};

const retailers = [
  {
    src: "/visibility.png",
    alt: "Visibility",
    headline: "Expand your reach ",
    body: " and boost your visibility with an online presence as a small retailer!",
  },
  {
    src: "/audience.png",
    alt: "Target Audience",
    headline: "Attract your target audience ",
    body: " and showcase your inventory with our platform!",
  },
  {
    src: "/discounts.png",
    alt: "Discounts and offers",
    headline: "Unleash the power of discounts ",
    body: " and real-time offers on your product as a retailer anytime anywhere!",
  },
  {
    src: "/ratings.png",
    alt: "Customer Bonds",
    headline: "Build strong bonds ",
    body: " and earn customer trust with our platform",
  },
  {
    src: "/insights.png",
    alt: "Insights",
    headline: "Gain valuable insights ",
    body: "and optimize your business with AI generated reports on sales, purchase, profits and more.",
  },
  {
    src: "/sales.png",
    alt: "Pickup-and-go",
    headline: "Boost your sales ",
    body: " and profits and foot traffic without being an online seller",
  },
];

const Shoffline = () => {
  return (
    <Container sx={{ mb: 10 }}>
      {/* <Stack
            justifyContent="center"
            alignItems="self-start"
            spacing={5}
            sx={{ width: "100%" }}
        > */}
      <Grid
        container
        direction='row'
        spacing={6}
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={12} sm={10} md={6}>
          <Typography component='p' variant='Headline'>
            Why to choose
          </Typography>
          <Typography component='p' color='secondary' variant='Heading'>
            shoffline
          </Typography>
          <Typography variant='Body' sx={{ fontWeight: 400 }}>
            Shoffline, a one-stop online inventory showcase platform, founded in
            2022 by students of IIIT Nagpur, where you can easily find anything
            just by searching. Starting from clothing, electronics to even
            groceries, you can explore all your locality with shofline. Which
            stores have exciting offers for you and compare offer values
            ​​across stores. At shoffline, with the aim of see online shop
            offline , you can search for any product within walking distance,
            which will reduce your in-store shopping time and we guarantee to
            show the product with the best quality, price and reach of your
            interest. We are in a hurry to bring the future of the offline
            retail market in India.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Box>
            <img src='/image.png' alt='image' width='100%' />
          </Box>
        </Grid>
      </Grid>
      {/* </Stack> */}
    </Container>
  );
};

const Vision = () => {
  return (
    <Container sx={{ mb: 10 }}>
      {/* <Stack
            justifyContent="center"
            alignItems="self-start"
            spacing={5}
            sx={{ width: "100%" }}
        > */}
      <Grid
        container
        spacing={6}
        justifyContent='center'
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <img src='/image.png' alt='image' width='100%' />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography component='p' sx={{ mb: 2 }} variant='Headline'>
            Our Vision
          </Typography>
          <Typography component='p' variant='Body'>
            We have a vision of taking online even the smallest of retailers and
            have them connect to their customers in a better way to ensure their
            increase in Sales, Profits and Brand equity with our digital
            platform and become the preferred choice of every offline retailer
            in India.
          </Typography>
        </Grid>
      </Grid>
      {/* </Stack> */}
    </Container>
  );
};

const HeaderMobile = () => {
  const drawerWidth = 340;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const links = (
    <>
      <Link
        sx={{ cursor: "pointer" }}
        href='#'
        underline='none'
        component='span'
        color='textPrimary'
        variant='Body'
      >
        About
      </Link>
      <Link
        sx={{ cursor: "pointer" }}
        href='#'
        underline='none'
        component='span'
        color='textPrimary'
        variant='Body'
      >
        Contact
      </Link>
      <Button
        onClick={() => console.log("clicked")}
        sx={{ color: "onprimay.main", alignItems: "center" }}
        href='#'
      >
        <Typography variant='Body'>Register</Typography>
      </Button>
    </>
  );

  const drawer = (
    <div>
      <Grid
        item
        xs={"auto"}
        sx={{ display: "flex", my: 2, mx: 2, justifyContent: "space-between" }}
      >
        <Link
          href='#'
          sx={{ textDecoration: "none !important", color: "light.main" }}
        >
          <Logo />
        </Link>
        <IconButton onClick={handleDrawerToggle}>
          <RxCross2 />
        </IconButton>
      </Grid>
      <Divider />
      <Grid
        item
        xs={"auto"}
        sx={{ display: "flex", width: "130px", flexDirection: "column", m: 2 }}
      >
        <Stack spacing={2} alignItems='center'>
          {links}
        </Stack>
      </Grid>
      <Divider />
    </div>
  );

  const showdrawer = (
    <Box component='nav' aria-label='mailbox folders'>
      <Drawer
        variant='temporary'
        open={mobileOpen}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );

  return (
    <Paper sx={{ pb: 5 }} style={{ padding: "0px" }} elevation={1}>
      <Container sx={{ width: "100%", py: 5, palette: "dark" }}>
        <Grid
          container
          sx={{ flexWrap: "nowrap" }}
          alignItems='center'
          justifyContent='space-between'
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link href='#' sx={{ textDecoration: "none !important" }}>
              <Logo />
            </Link>
            <div style={{ display: "flex" }}>
              <Button
                onClick={() => console.log("clicked")}
                sx={{
                  color: "onprimay.main",
                  display: { xs: "flex", md: "none" },
                  mr: 2,
                  alignItems: "center",
                }}
                href='#'
              >
                <Typography variant='Body'>Register</Typography>
              </Button>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" }, mr: 1 }}
              >
                <HiMenu />
              </IconButton>
            </div>
          </Grid>
          {!mobileOpen ? (
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {links}
            </Grid>
          ) : (
            showdrawer
          )}
        </Grid>
      </Container>
    </Paper>
  );
};

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={"/logo.png"} alt={"logo"} height={50} width={50} />
      <Typography
        paragraph
        sx={{ mb: 0, ml: 1, fontWeight: "900" }}
        color='dark.main'
        variant='Body'
      >
        SHOFFLINE
      </Typography>
    </div>
  );
}

function Footer() {
  return (
    <section className='main'>
      <div className='main-box'>
        <div className='box1'>
          <img src='logo.png' alt='logo.png' />
        </div>
        <div className='box2'>
          <div>
            <a href='http://gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </div>
          <div>
            <a href='http://'>
              <FontAwesomeIcon icon={faLocationDot} /> Locate Us
            </a>
          </div>
        </div>
        <div className='box3'>
          <div className='foll'>Follow us</div>
          <div>
            <a href='http://facebook.com'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='http://instagram.com'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='http://twitter.com'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href='http://linkdin.com'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div className='reserved'>© 2021 All Rights Reserved by Shoffline</div>
    </section>
  );
}
