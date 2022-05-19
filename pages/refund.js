import React from "react";
import Head from "next/head";
import { Box, Typography, AppBar, Button } from "@material-ui/core";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const RefundPolicy = () => {
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
        <meta property="og:image" content="favicon.ico" />
        <meta name="og:url" content="https://onecape.in" />
        <meta
          name="og:description"
          content="Set up your shop online and grow your business, focus only on your customers leave everything else with us"
        />

        <link rel="icon" href="/favicon.ico" />
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
      <div className={styles.globalStyle}>
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
        <div
          style={{ margin: "60px", marginTop: "110px", fontFamily: "inherit" }}
        >
          <h1>Refund & Cancellation Policy</h1>
          <p>Last updated: June 12, 2021</p>
          <p>Thank you for shopping at Onecape.</p>
          <p>
            If, for any reason, You are not completely satisfied with a purchase
            We invite You to review our policy on refunds and Cancellation
          </p>
          <p>
            The following terms are applicable for any products that You
            purchased with Us.
          </p>
          <h1>Interpretation and Definitions</h1>
          <h2>Interpretation</h2>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
          <h2>Definitions</h2>
          <p>For the purposes of this Refund & Cancellation Policy:</p>
          <ul>
            <li>
              <p>
                <strong>Company</strong> (referred to as either &quot;the
                Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;
                in this Agreement) refers to Onecape.
              </p>
            </li>
            <li>
              <p>
                <strong>Goods</strong> refer to the items offered for sale on
                the Service.
              </p>
            </li>
            <li>
              <p>
                <strong>Orders</strong> mean a request by You to purchase Goods
                from Us.
              </p>
            </li>
            <li>
              <p>
                <strong>Service</strong> refers to the Website.
              </p>
            </li>
            <li>
              <p>
                <strong>Website</strong> refers to Onecape, accessible from{" "}
                <a href="https://onecape.in" rel="external nofollow noopener">
                  https://onecape.in
                </a>
              </p>
            </li>
            <li>
              <p>
                <strong>You</strong> means the individual accessing or using the
                Service, or the company, or other legal entity on behalf of
                which such individual is accessing or using the Service, as
                applicable.
              </p>
            </li>
          </ul>
          <h1>Your Order Cancellation Rights</h1>
          <p>
            You are entitled to cancel Your Order within 3 hrs without giving
            any reason for doing so
          </p>
          <p>
            The deadline for canceling an Order is 1 day from the date on which
            You received the Goods or on which a third party you have appointed,
            who is not the carrier, takes possession of the product delivered.
          </p>
          <p>
            In order to exercise Your right of cancellation, You must inform Us
            of your decision by means of a clear statement. You can inform us of
            your decision by:
          </p>
          <ul>
            <li>
              <a href="mailto:support@onecapesupport.freshdesk.com">
                By email: support@onecapesupport.freshdesk.com
              </a>
            </li>
            <li>
              <a href="tel:7799967397">By phone number: 7799967397</a>
            </li>
            <li>
              <p>
                By calling to the merchant owner which is available on the
                profile page.
              </p>
            </li>
          </ul>
          <p>
            We will reimburse You no later than 14 days from the day on which We
            receive confirmation from the merchant that the product was not
            delivered and was cancelled due to the negligence of the merchant.
            We will use the same means of payment as You used for the Order, and
            You will not incur any fees for such reimbursement.
          </p>
          <p>
            Note that the refunds can also be in the form of coupons and future
            credits which can be used in the same website which you were
            refunded for,Each coupons while disbursing will have a particular
            expiry date
          </p>
          <p>
            Note that once the order is placed, there might be extra
            cancellation charges incurred bgefore refunding, hence only part
            amount of the original amount would be refunded, with consideration
            of taxes and other service oriented fees.
          </p>
          <p>
            Onecape highly recommends users to not cancel orders once placed{" "}
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our Refund & Cancellation Policy,
            please contact us:
          </p>
          <ul>
            <li>
              <a href="mailto:support@onecapesupport.freshdesk.com">
                By email: support@onecapesupport.freshdesk.com
              </a>
            </li>
            <li>
              <a href="tel:7799967397">By phone number: 7799967397</a>
            </li>
            <li>
              <p>
                By calling to the merchant owner which is available on the
                profile page.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default RefundPolicy;
