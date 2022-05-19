import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import emailjs, { sendForm } from "emailjs-com";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  AppBar,
  Button,
  Tabs,
  Tab,
  TextField,
  FormControl,
  MenuItem,
  FormHelperText,
  InputAdornment,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Image from "next/image";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import BusinessIcon from "@material-ui/icons/Business";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import aboutStyles from "../styles/About.module.css";
import styles from "../styles/Home.module.css";
import benefitStyles from "../styles/Benefits.module.css";
import appStyles from "../styles/App.module.css";
import directStyles from "../styles/Direct.module.css";
import footerStyles from "../styles/Footer.module.css";
import requestStyles from "../styles/Request.module.css";


const merchants = [
  {
    id: 1,
    name: "Receive Orders from Customers",
    description: "See what your customers wants!",
    image: require("../public/merchant1.png"),
    icon: require("../public/merchanticon1.png"),
  },
  {
    id: 2,
    name: "Update Product prices instantly",
    description: "Add, delete, update products and it’s prices",
    image: require("../public/merchant2.png"),
    icon: require("../public/merchanticon2.png"),
  },
  {
    id: 3,
    name: "Analytics",
    description: "Track your sales and get live analytics instantly",
    image: require("../public/merchant3.png"),
    icon: require("../public/merchanticon3.png"),
  },
];

const riderList = [
  {
    id: 1,
    name: "Deliver products through your driver",
    description: "Send delivery information to Riders",
    image: require("../public/rider1.png"),
    icon: require("../public/ridericon1.png"),
  },
  {
    id: 2,
    name: "Give location details of your customer",
    description: "The delivery person is notified about the order",
    image: require("../public/rider3.png"),
    icon: require("../public/ridericon2.png"),
  },
  {
    id: 3,
    name: "Notify customers on Order Status",
    description: "Send Order Status to customers.",
    image: require("../public/rider2.png"),
    icon: require("../public/ridericon3.png"),
  },
];

const shopperList = [
  {
    id: 1,
    name: "Notify your customers instantly",
    description: "Give live offer updates to customers",
    image: require("../public/shopper1.png"),
    icon: require("../public/ridericon3.png"),
  },
  {
    id: 2,
    name: "Just Scan & Order",
    description:
      "Use the QR code option to view and order products to customers",
    image: require("../public/shopper2.png"),
    icon: require("../public/shoppericon2.png"),
  },
  {
    id: 3,
    name: "Pickup and Delivery",
    description: "No delivery people? No worries change to pickup mode",
    image: require("../public/shopper3.png"),
    icon: require("../public/shoppericon3.png"),
  },
];

function handleFacebook() {
  window.location.href = "https://www.facebook.com/onecapebusiness/";
}

function handleTwitter() {
  window.location.href = "https://twitter.com/Onecapebusiness";
}

function handleInstagram() {
  window.location.href = "https://www.instagram.com/onecapebusiness/";
}

function handlePlaystore() {
  window.location.href = "https://play.google.com/store/apps/details?id=com.onecape_business_admin";
}


function TabPanel(props) {
  const { children, value, name, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <motion.div
          style={{ padding: "3px" }}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
        >
          <Image src={name[index].image} alt="images" />
        </motion.div>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Home() {
  const [merchant, setMerchant] = useState(0);
  const [rider, setRider] = useState(0);
  const [shoppers, setShoppers] = useState(0);
  const [status, setStatus] = useState("");
  const [phoneValid, setPhoneValid] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [name, setName] = useState("")
  const [options, setOptions] = useState("")
  const router = useRouter();
  const handleMerchantChange = (event, newValue) => {
    setMerchant(newValue);
  };
  const handleRiderChange = (event, newValue) => {
    setRider(newValue);
  };
  const handleShoppersChange = (event, newValue) => {
    setShoppers(newValue);
  };

  function sendEmail(e) {
    e.preventDefault();
    if (phoneNumber && phoneValid && name && options) {
      console.log(phoneNumber, phoneValid, name, options)
      emailjs
        .send(
          "onecapeshops@gmail.com",
          "template_cnhr7yx",
          { phonenumber: phoneNumber, username: name, businesstype: options },
          "user_XCHNPSqoQegbvcEf65HD0"
        )
        .then(
          (result) => {
            setPhoneNumber("");
            setName("")
            setOptions("")
            setPhoneValid(false)
            setStatus("We'll catch your soon.");
          },
          (error) => {
            setStatus("Something went wrong! Please try again!");
          }
        );
    }
    setTimeout(() => {
      setStatus("");
    }, 10000);
  }

  const handleTerms = (e) => {
    e.preventDefault();
    router.push(`${window.location.origin}/termsandconditions`);
  };
  const handlePolicy = (e) => {
    e.preventDefault();
    router.push(`${window.location.origin}/privacypolicy`);
  };
  const handleRefund = (e) => {
    e.preventDefault();
    router.push(`${window.location.origin}/refund`);
  };

  const phoneValidation = (number) => {
    const phone = new RegExp("^[7-9][0-9]{9}$")
    setPhoneValid(phone.test(number))
  }

  useEffect(() => {
    console.log(merchant)
    setTimeout(() => {
      setInterval(() => {
        setMerchant(prev => (prev + 1) % 3)
        setRider(prev => (prev + 1) % 3)
        setShoppers(prev => (prev + 1) % 3)
      }, 4000)
    }, 4000)
  }, [])

  return (
    <div>
      <Head>
        <title>Onecape | Your Shop! Your Power!</title>
        <meta
          name="description"
          content="Set up your shop online and grow your business, focus only on your customers leave everything else with us"
        />
        <meta name="og:title" content="Onecape" />
        <meta name="og:type" content="website" />
        <meta property="og:image" content="ogp_page.png" />
        <meta property="og:image:secure_url" content="ogp_page.png" />
        <meta name="og:url" content="https://about.onecape.in" />
        <meta
          name="og:description"
          content="Set up your shop online and grow your business, focus only on your customers leave everything else with us"
        />

        <link rel="icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merienda+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* <Hero /> */}

      <div className={styles.globalStyle} style={{ scrollBehavior: "smooth" }}>
        <AppBar
          position="fixed"
          elevation={3}
          className={styles.header}
          style={{
            backgroundColor: "transparent",
            boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box className={styles.headerWrapper}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: "#FF5A49",
              }}
            >
              <Image src={require("../public/logo.png")} alt="logo" />
              <Typography
                variant="h1"
                style={{
                  fontFamily: "Merienda One",
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                Onecape
              </Typography>
            </div>
            <Button color="primary" size="large" variant="outlined">
              <a
                href="#requestdemo"
                style={{ textDecoration: "none", color: "#FF7264" }}
              >
                Lets Talk
              </a>
            </Button>
          </Box>
        </AppBar>

        {/* hero */}
        <div className={styles.hero} style={{ marginTop: 120 }}>
          <div className={styles.heroWrapper}>
            <div className={styles.textWrapper}>
              <motion.div
                className={styles.textWrapper}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ ease: "easeOut", duration: 0.4 }}
              >
                <h2 className={styles.heroContent}>
                  Get your very own app for your
                  <div className={styles.wordAnimate}>
                    <ul className={styles.words}>
                      <li className={styles.word}>Restaurant</li>
                      <li className={styles.word}>Grocery Store</li>
                      <li className={styles.word}>Meat Shop</li>
                    </ul>
                  </div>
                </h2>
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: "white",
                    marginTop: 20,
                  }}
                  endIcon={<ArrowForwardIcon style={{ color: "#FF7264" }} />}
                >
                  <a
                    href="#requestdemo"
                    style={{ textDecoration: "none", color: "#FF7264" }}
                  >
                    Request a Demo!
                  </a>
                </Button>
              </motion.div>
            </div>
            <motion.div
              className={styles.heroImage}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
            >
              <Image
                src={require("../public/heroillustration.png")}
                alt="heroillustration"
                style={{ marginRight: 40 }}
              />
            </motion.div>
          </div>
        </div>

        {/* about */}
        <div className={aboutStyles.about}>
          <div className={aboutStyles.aboutWrapper}>
            <div className={aboutStyles.textWrapper}>
              <h1 className={aboutStyles.aboutHeading}>About</h1>
              <p className={aboutStyles.aboutParagraph}>
                Have you ever noticed almost all the people around us use mobile
                for everything? Right from ordering food to earning money
                through the internet?{" "}
                <strong>
                  Online sales have increased up to 77% since last March 2020.
                </strong>{" "}
                <br />
                Give your shop the identity which it always deserved.
                <strong>
                  {" "}
                  Onecape Business provides all the tools to make your business
                  a success
                </strong>
                and we thrive for the success which you always wished for.
              </p>
            </div>
            <motion.div
              className={aboutStyles.aboutImage}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
            >
              <Image src={require("../public/about.png")} alt="about onecape" />
            </motion.div>
          </div>
        </div>

        {/* whyonecape */}
        <div>
          <div className={aboutStyles.whyonecapeWrapper}>
            <h1 className={aboutStyles.onecapeHeading}>Why Onecape?</h1>
            <p className={aboutStyles.onecapeParagraph}>
              All of the delivery applications on the market are focused on
              their own growth by branding themselves, but we are focused on
              your growth. {`That's`} why
              <strong>
                {" "}
                we provide a separate app solely for your {`business's`} online
                growth at an affordable price
              </strong>
              .
            </p>
          </div>
        </div>

        {/* benefits */}
        <div style={{ marginTop: 120, marginBottom: 120 }}>
          <div className={benefitStyles.benefitsWrapper}>
            <div className={benefitStyles.textWrapper}>
              <h1 className={benefitStyles.benefitsTitle}>
                Benefits of using Onecape
              </h1>
              <p className={benefitStyles.benefitsParagraph}>
                We are providing end-to-end solutions for your business
              </p>
            </div>

            <div className={benefitStyles.cardGrouper}>
              <div
                className={benefitStyles.cardWrapper}
                style={{ backgroundColor: "white" }}
              >
                <div className={benefitStyles.textWrapper}>
                  <Image
                    src={require("../public/benefits1.png")}
                    alt="benefits"
                  />
                  <h2>
                    Improve your <br /> business at ease
                  </h2>
                  <p style={{ lineHeight: 2 }}>
                    Ignoring online marketing is like starting a business but
                    not telling anyone about it. Hence, we convey it loudly by
                    promoting your business and app regionally through Facebook
                    and Instagram regional ads.
                  </p>
                </div>
              </div>
              <div
                className={benefitStyles.cardWrapper}
                style={{ border: "4px solid white" }}
              >
                <div className={benefitStyles.textWrapper}>
                  <Image
                    src={require("../public/benefits2.png")}
                    alt="benefits"
                  />
                  <h2>
                    Build your own <br /> Community
                  </h2>
                  <p style={{ lineHeight: 2 }}>
                    {`We understand your business & your customers' needs hence we provide end-to-end solutions from listing the products to delivering the product to your customer seamlessly via our restaurant, delivery & customer app.`}
                  </p>
                  <div className={benefitStyles.textWrapper}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* merchants */}
        <div
          style={{
            marginTop: 120,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 120,
          }}
        >
          <div className={appStyles.appWrapper}>
            <div className={appStyles.selectorWrapper}>
              <div className={appStyles.textWrapper}>
                <Typography
                  variant="h2"
                  className={appStyles.appTitle}
                  style={{ fontWeight: "bold" }}
                >
                  Merchant Application
                </Typography>
                <p className={appStyles.appParagraph}>
                  Your very own Android app to receive orders from customers...
                </p>
              </div>
              <Tabs
                orientation="vertical"
                variant="flexContainer"
                value={merchant}
                onChange={handleMerchantChange}
                className={appStyles.tabs}
              >
                <Tab
                  style={
                    merchant == 0
                      ? {
                        background:
                          "linear-gradient(to right, #FFECEC, rgba(255, 255, 255, 0))",
                        filter: "grayscale(0%)",
                      }
                      : { background: "transparent", filter: "grayscale(100%)" }
                  }
                  label={
                    <div className={appStyles.tabInnerWrapper}>
                      <Image src={merchants[0].icon} alt="icons" />
                      <div className={appStyles.tabsAlign}>
                        <Typography
                          variant="h5"
                          style={{ fontWeight: 600, textAlign: "left" }}
                        >
                          {merchants[0].name}
                        </Typography>
                        <p style={{ textAlign: "left", marginTop: 0 }}>
                          {merchants[0].description}
                        </p>
                      </div>
                    </div>
                  }
                  {...a11yProps(0)}
                ></Tab>
                <Tab
                  style={
                    merchant == 1
                      ? {
                        background:
                          "linear-gradient(to right, #FFECEC, rgba(255, 255, 255, 0))",
                        filter: "grayscale(0%)",
                      }
                      : { background: "transparent", filter: "grayscale(100%)" }
                  }
                  label={
                    <div className={appStyles.tabInnerWrapper}>
                      <Image src={merchants[1].icon} alt="icons" />
                      <div className={appStyles.tabsAlign}>
                        <Typography
                          variant="h45"
                          style={{ fontWeight: 600, textAlign: "left" }}
                        >
                          {merchants[1].name}
                        </Typography>
                        <p style={{ textAlign: "left", marginTop: 0 }}>
                          {merchants[1].description}
                        </p>
                      </div>
                    </div>
                  }
                  {...a11yProps(1)}
                />
                <Tab
                  style={
                    merchant == 2
                      ? {
                        background:
                          "linear-gradient(to right, #FFECEC, rgba(255, 255, 255, 0))",
                        filter: "grayscale(0%)",
                      }
                      : { background: "transparent", filter: "grayscale(100%)" }
                  }
                  label={
                    <div className={appStyles.tabInnerWrapper}>
                      <Image src={merchants[2].icon} alt="icons" />
                      <div className={appStyles.tabsAlign}>
                        <Typography
                          variant="h5"
                          style={{ fontWeight: 600, textAlign: "left" }}
                        >
                          {merchants[2].name}
                        </Typography>
                        <p style={{ textAlign: "left", marginTop: 0 }}>
                          {merchants[2].description}
                        </p>
                      </div>
                    </div>
                  }
                  {...a11yProps(2)}
                />
              </Tabs>
            </div>
            <div>
              <TabPanel value={merchant} index={0} name={merchants}></TabPanel>
              <TabPanel value={merchant} index={1} name={merchants}></TabPanel>
              <TabPanel value={merchant} index={2} name={merchants}></TabPanel>
            </div>
          </div>
        </div>
        {/* rider */}
        <div
          style={{
            marginTop: 120,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 120,
          }}
        >
          <div className={appStyles.appRiderWrapper}>
            <div className={appStyles.selectorWrapper}>
              <div className={appStyles.textWrapper}>
                <Typography
                  variant="h2"
                  className={appStyles.appTitle}
                  style={{ fontWeight: "bold" }}
                >
                  Rider Application
                </Typography>
                <p className={appStyles.appParagraph}>
                  Your delivery app to navigate your product to reach
                  customer...
                </p>
              </div>
              <Tabs
                orientation="vertical"
                variant="flexContainer"
                value={rider}
                onChange={handleRiderChange}
                className={appStyles.tabs}
              >
                <Tab
                  style={
                    rider == 0
                      ? {
                        background:
                          "linear-gradient(to right, #FFECEC, rgba(255, 255, 255, 0))",
                        filter: "grayscale(0%)",
                      }
                      : { background: "transparent", filter: "grayscale(100%)" }
                  }
                  label={
                    <div className={appStyles.tabInnerWrapper}>
                      <Image src={riderList[0].icon} alt="icons" />
                      <div className={appStyles.tabsAlign}>
                        <Typography
                          variant="h5"
                          style={{ fontWeight: 600, textAlign: "left" }}
                        >
                          {riderList[0].name}
                        </Typography>
                        <p style={{ textAlign: "left", marginTop: 0 }}>
                          {riderList[0].description}
                        </p>
                      </div>
                    </div>
                  }
                  {...a11yProps(0)}
                ></Tab>
                <Tab
                  style={
                    rider == 1
                      ? {
                        background:
                          "linear-gradient(to right, #FFECEC, rgba(255, 255, 255, 0))",
                        filter: "grayscale(0%)",
                      }
                      : { background: "transparent", filter: "grayscale(100%)" }
                  }
                  label={
                    <div className={appStyles.tabInnerWrapper}>
                      <Image src={riderList[1].icon} alt="icons" />
                      <div className={appStyles.tabsAlign}>
                        <Typography
                          variant="h5"
                          style={{ fontWeight: 600, textAlign: "left" }}
                        >
                          {riderList[1].name}
                        </Typography>
                        <p style={{ textAlign: "left", marginTop: 0 }}>
                          {riderList[1].description}
                        </p>
                      </div>
                    </div>
                  }
                  {...a11yProps(1)}
                />
                <Tab
                  style={
                    rider == 2
                      ? {
                        background:
                          "linear-gradient(to right, #FFECEC, rgba(255, 255, 255, 0))",
                        filter: "grayscale(0%)",
                      }
                      : { background: "transparent", filter: "grayscale(100%)" }
                  }
                  label={
                    <div className={appStyles.tabInnerWrapper}>
                      <Image src={riderList[2].icon} alt="icons" />
                      <div className={appStyles.tabsAlign}>
                        <Typography
                          variant="h5"
                          style={{ fontWeight: 600, textAlign: "left" }}
                        >
                          {riderList[2].name}
                        </Typography>
                        <p style={{ textAlign: "left", marginTop: 0 }}>
                          {riderList[2].description}
                        </p>
                      </div>
                    </div>
                  }
                  {...a11yProps(2)}
                />
              </Tabs>
            </div>
            <div className={appStyles.riderImageWrapper}>
              <TabPanel value={rider} index={0} name={riderList}></TabPanel>
              <TabPanel value={rider} index={1} name={riderList}></TabPanel>
              <TabPanel value={rider} index={2} name={riderList}></TabPanel>
            </div>
          </div>
        </div>
        {/* shoppers */}
        <div
          style={{
            marginTop: 120,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 120,
          }}
        >
          <div className={appStyles.appWrapper}>
            <div className={appStyles.selectorWrapper}>
              <div className={appStyles.textWrapper}>
                <Typography
                  variant="h2"
                  className={appStyles.appTitle}
                  style={{ fontWeight: "bold" }}
                >
                  Shoppers Application
                </Typography>
                <p className={appStyles.appParagraph}>
                  Your very own website platform to portray your products to
                  customers
                </p>
              </div>
              <Tabs
                orientation="vertical"
                variant="flexContainer"
                value={shoppers}
                onChange={handleShoppersChange}
                className={appStyles.tabs}
              >
                <Tab
                  style={
                    shoppers === 0
                      ? {
                        background:
                          "linear-gradient(to right, #FFECEC, rgba(255, 255, 255, 0))",
                        filter: "grayscale(0%)",
                      }
                      : { background: "transparent", filter: "grayscale(100%)" }
                  }
                  label={
                    <div className={appStyles.tabInnerWrapper}>
                      <Image src={shopperList[0].icon} alt="icons" />
                      <div className={appStyles.tabsAlign}>
                        <Typography
                          variant="h5"
                          style={{ fontWeight: 600, textAlign: "left" }}
                        >
                          {shopperList[0].name}
                        </Typography>
                        <p style={{ textAlign: "left", marginTop: 0 }}>
                          {shopperList[0].description}
                        </p>
                      </div>
                    </div>
                  }
                  {...a11yProps(0)}
                ></Tab>
                <Tab
                  style={
                    shoppers == 1
                      ? {
                        background:
                          "linear-gradient(to right, #FFECEC, rgba(255, 255, 255, 0))",
                        filter: "grayscale(0%)",
                      }
                      : { background: "transparent", filter: "grayscale(100%)" }
                  }
                  label={
                    <div className={appStyles.tabInnerWrapper}>
                      <Image src={shopperList[1].icon} alt="icons" />
                      <div className={appStyles.tabsAlign}>
                        <Typography
                          variant="h5"
                          style={{ fontWeight: 600, textAlign: "left" }}
                        >
                          {shopperList[1].name}
                        </Typography>
                        <p style={{ textAlign: "left", marginTop: 0 }}>
                          {shopperList[1].description}
                        </p>
                      </div>
                    </div>
                  }
                  {...a11yProps(1)}
                />
                <Tab
                  style={
                    shoppers == 2
                      ? {
                        background:
                          "linear-gradient(to right, #FFECEC, rgba(255, 255, 255, 0))",
                        filter: "grayscale(0%)",
                      }
                      : { background: "transparent", filter: "grayscale(100%)" }
                  }
                  label={
                    <div className={appStyles.tabInnerWrapper}>
                      <Image src={shopperList[2].icon} alt="icons" />
                      <div className={appStyles.tabsAlign}>
                        <Typography
                          variant="h5"
                          style={{ fontWeight: 600, textAlign: "left" }}
                        >
                          {shopperList[2].name}
                        </Typography>
                        <p style={{ textAlign: "left", marginTop: 0 }}>
                          {shopperList[2].description}
                        </p>
                      </div>
                    </div>
                  }
                  {...a11yProps(2)}
                />
              </Tabs>
            </div>
            <div>
              <TabPanel
                value={shoppers}
                index={0}
                name={shopperList}
              ></TabPanel>
              <TabPanel
                value={shoppers}
                index={1}
                name={shopperList}
              ></TabPanel>
              <TabPanel
                value={shoppers}
                index={2}
                name={shopperList}
              ></TabPanel>
            </div>
          </div>
        </div>

        {/* OrderDirect */}
        <div
          style={{
            marginTop: 120,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 120,
          }}
        >
          <div className={directStyles.directWrapper}>
            <div className={directStyles.textWrapper}>
              <h1
                variant="h1"
                className={directStyles.orderTitle}
                style={{ fontWeight: "bold" }}
              >
                #OrderDirect
              </h1>
              <p className={directStyles.orderParagraph}>
                Set up a platform to enforce your customers to{" "}
                <strong>order directly from you</strong>, Instead of a middleman
                platform! You have{" "}
                <strong>full control of your digital shop </strong> and have
                direct access to your customers...
              </p>
              <Button
                size="large"
                href="https://nrai.org/one-direct-order-for-eatery-giant-leap-for-hospitality/"
                endIcon={<ArrowForwardIcon />}
                style={{
                  backgroundColor: "#00C288",
                  color: "white",
                  borderRadius: 100,
                  paddingLeft: 20,
                  border: "1px solid #00FFB2",
                  paddingRight: 20,
                }}
              >
                Learn More
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                width: "60%",
              }}
            >
              <Image
                src={require("../public/orderdirect.png")}
                alt="orderdirect"
                className={directStyles.imageStyles}
              />
            </div>
          </div>
        </div>
        {/* payment */}
        <div
          className={aboutStyles.about}
          style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
        >
          <div className={aboutStyles.paymentWrapper}>
            <div className={aboutStyles.textWrapper}>
              <h1 className={aboutStyles.aboutHeading}>Get Direct Payment</h1>
              <p className={aboutStyles.aboutParagraph}>
                To make the transactions easier for your customer, we provide
                variety of payment options all the major debit and credit cards,
                <strong>
                  50+ net banking options, UPI, EMI, and popular wallets
                  including Mobikwik, PayUmoney, FreeCharge, Airtel Money, Ola
                  Money and PayZapp
                </strong>
                . You will receive payments directly to your bank account within
                two business days.
              </p>
            </div>
            <div className={aboutStyles.aboutImage}>
              <Image
                src={require("../public/paymentcard.png")}
                alt="about onecape"
              />
            </div>
          </div>
        </div>

        {/* requestademo */}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onSubmit={sendEmail}
          id="requestdemo"
        >
          <div className={requestStyles.requestDemo}>
            <div className={requestStyles.requestWrapper}>
              <h1>Request a Demo</h1>
              <div className={requestStyles.inputAlign}>
                <TextField
                  name="username"
                  value={name}
                  placeholder="Your Name"
                  variant="filled"
                  onChange={(e) => setName(e.target.value)}
                  InputProps={
                    {
                      disableUnderline: true,
                      style: {
                        backgroundColor: "white",
                        padding: 5,
                        borderRadius: 10,
                        border: '5px solid #E3E4EB'
                      }
                    }
                  }
                  style={{
                    width: "100%",
                    margin: 10,
                    borderRadius: 10,
                  }}
                />
                <TextField
                  name="phonenumber"
                  placeholder="Phone Number"
                  variant="filled"
                  value={phoneNumber}
                  onChange={(e) => { phoneValidation(e.target.value); setPhoneNumber(e.target.value) }}
                  type="tel"
                  InputProps={{
                    disableUnderline: true,
                    style: {
                      backgroundColor: "white",
                      padding: 5,
                      borderRadius: 10,
                      border: '5px solid #E3E4EB'
                    },
                    endAdornment: <InputAdornment position="end">{phoneValid &&
                      <CheckCircleIcon style={{ color: "green" }} />}</InputAdornment>
                  }}
                  style={{
                    width: "100%",
                    margin: 10,
                    // backgroundColor: "white",
                    // padding: 5,
                    // borderRadius: 10,
                  }}
                />
                <FormControl
                  variant="filled"
                  required="true"
                  style={{
                    width: "100%",
                    margin: 10,
                    backgroundColor: "white",
                    borderRadius: 10,
                  }}
                >
                  <InputLabel
                    htmlFor="name-multiple"
                    style={{ color: "#858585" }}
                  >
                    Select type of Business
                  </InputLabel>
                  <Select
                    value={options}
                    disableUnderline={true}
                    onChange={e => setOptions(e.target.value)}
                    style={{
                      backgroundColor: "white",
                      padding: 5,
                      borderRadius: 10,
                      border: '5px solid #E3E4EB'
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select type of Business
                    </MenuItem>
                    <MenuItem value="Restaurant">
                      Restaurant or Food joints
                    </MenuItem>
                    <MenuItem value="Grocery">
                      Super market or Grocery shop
                    </MenuItem>
                    <MenuItem value="Butcher">Meat or Vegetable Shop</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {status?.length ? (
                <Box
                  style={{
                    padding: 20,
                    paddingLeft: 60,
                    paddingRight: 60,
                    color: "#FF7264",
                    marginBottom: 5,
                    backgroundColor: "#FFE6D7",
                    borderRadius: 100,
                  }}
                >
                  <Typography variant="h4">{status}</Typography>
                </Box>
              ) : (
                <Box />
              )}
              <Button
                variant="contained"
                size="large"
                type="submit"
                onClick={e => sendEmail(e)}
                style={{
                  paddingLeft: 40,
                  paddingRight: 40,
                  backgroundColor: "white",
                  marginTop: 5,
                  color: "#FF7264",
                }}
              >
                Request Demo
              </Button>
            </div>
            <div className={requestStyles.requestWrapper}>
              <h3>
                For New Business inquiries -
                <a
                  href="tel:7799967397"
                  style={{
                    color: "white",
                    fontSize: "0.9em",
                    // textDecoration: "none",
                  }}
                >
                  {" "}
                  +91-7799967397
                </a>{" "}
                (10 am to 8 pm)
              </h3>
              <h3>
                For support -
                <a
                  href="mailto: onecapeshops@gmail.com"
                  style={{
                    color: "white",
                    fontSize: "0.9em",
                    // textDecoration: "none",
                  }}
                >
                  {" "}
                  onecapeshops@gmail.com
                </a>
              </h3>
            </div>
          </div>
        </form>

        {/* footer */}
        <footer className={footerStyles.footerWrapper}>
          <div className={footerStyles.footerDetailsWrapper}>
            <div className={footerStyles.logoWrapper}>
              <Image
                src={require("../public/footer-logo.svg")}
                alt="footer-logo"
              />
              <h1
                style={{
                  fontFamily: "Merienda One",
                  fontWeight: "bold",
                  fontSize: 36,
                }}
              >
                Onecape
              </h1>
              <div onClick={handlePlaystore} className={footerStyles.playstore}
                style={{
                  width: 250
                }}>
                <Image src={require("../public/playstore.png")} alt="playstore" />
              </div>
            </div>
            <div className={footerStyles.logoWrapper}>
              <div className={footerStyles.infoWrapper}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <BusinessIcon />
                  <p style={{ marginLeft: 5, fontSize: 16 }}>ADDRESS</p>
                </div>
                <a
                  href="https://goo.gl/maps/GQiRJo8umt1zP1MD6"
                  className={footerStyles.detailsText}
                  style={{
                    marginTop: -2,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.17em",
                    textDecoration: "none",
                  }}
                >
                  No:2,Pugaliya Pillai St <br />
                  Indian bank building (Basement), <br /> Trichy - 620002
                </a>
              </div>
            </div>
            <div className={footerStyles.logoWrapper}>
              <div className={footerStyles.infoWrapper}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <PhoneIcon />
                  <p style={{ marginLeft: 5, fontSize: 16 }}>PHONE NUMBER</p>
                </div>
                <a
                  href="tel:7799967397"
                  className={footerStyles.detailsText}
                  style={{
                    marginTop: -2,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.17em",
                    textDecoration: "none",
                  }}
                >
                  7799967397
                </a>
              </div>
            </div>
          </div>
          <div className={footerStyles.mediaCard}>
            <h4 onClick={handlePolicy} className={footerStyles.linkes} >Privacy Policy</h4>
            <h4 onClick={handleTerms} className={footerStyles.linkes}>Terms & Conditions</h4>
            <h4 onClick={handleRefund} className={footerStyles.linkes}>
              Refunds & cancellation Policy
            </h4>
            <div className={footerStyles.socialMedia}>
              <div className={footerStyles.socialHovers}>
                <FacebookIcon onClick={handleFacebook} />
              </div>
              <div className={footerStyles.socialHovers}>
                <TwitterIcon onClick={handleTwitter} />
              </div>
              <div className={footerStyles.socialHovers}>
                <InstagramIcon onClick={handleInstagram} />
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* <About />
      <Benefits />
      <Merchant />
      <Rider />
      <Shoppers />
      <OrderDirect />
      <Payment />
      <RequestDemo />
      <Footer /> */}
    </div >
  );
}
