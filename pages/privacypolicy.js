import React from "react";
import Head from "next/head";
import { Box, Typography, AppBar, Button } from "@material-ui/core";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const PrivacyPolicy = () => {
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
          <h1>Privacy Policy</h1>
          <p>
            <p>Last updated on 26th January 2021</p>
            <strong>Overview</strong> <br /> <br />
            Onecape Shops built the Onecape app as a Commercial app. This
            SERVICE is provided by Onecape Shops and is intended for use as is.
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service. If you choose to use our Service, then
            you agree to the collection and use of information in relation to
            this policy. The Personal Information that we collect is used for
            providing and improving the Service. We will not use or share your
            information with anyone except as described in this Privacy Policy.
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which is accessible at Onecape unless
            otherwise defined in this Privacy Policy.
          </p>
          <p>
            <strong>Information Collection and its Use </strong> <br />
            <br />
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to Name, Email, Contact Information,
            Address, Payment Information, Location. The information that we
            request will be retained by us and used as described in this privacy
            policy. The app does use third-party services that may collect
            information used to identify you. Link to the privacy policy of
            third party service providers used by the app Google Play Services,
            Facebook, Sentry
          </p>
          <p>
            <strong> Log Data </strong> <br /> <br />
            We want to inform you that whenever you use our Service, in case of
            an error in the app we collect data and information (through
            third-party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </p>
          <p>
            <strong> Cookies</strong> <br /> <br />
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device internal
            memory. This Service does not use these “cookies” explicitly.
            However, the app may use third party code and libraries that use
            “cookies” to collect information and improve their services. You
            have the option to either accept or refuse these cookies and know
            when a cookie is being sent to your device. If you choose to refuse
            our cookies, you may not be able to use some portions of this
            Service.
          </p>
          <p>
            <strong> Service Providers </strong> <br /> <br />
            We may employ third-party companies and individuals due to the
            following reasons: To facilitate our Service; To provide the Service
            on our behalf; To perform Service-related services; or To assist us
            in analyzing how our Service is used. We want to inform users of
            this Service that these third parties have access to your Personal
            Information. The reason is to perform the tasks assigned to them on
            our behalf. However, they are obligated not to disclose or use the
            information for any other purpose.
          </p>
          <p>
            <strong> Security </strong> <br />
            <br />
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>
          <p>
            <strong> Links to Other Sites </strong> <br />
            <br />
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>{" "}
          <strong> Children’s Privacy </strong> <br />
          <p>
            These Services do not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from children
            under 13. In the case we discover that a child under 13 has provided
            us with personal information, we immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact us
            so that we will be able to do the necessary actions.{" "}
          </p>{" "}
          <strong> Changes to This Privacy Policy </strong> <br /> We may update
          our Privacy Policy from time to time. Thus, you are advised to review
          this page periodically for any changes. We will notify you of any
          changes by posting the new Privacy Policy on this page. This policy is
          effective as of 2021-01-26 Contact Us If you have any questions about
          our Privacy Policy, do not hesitate to contact us at
          <a href="mailto:support@onecapesupport.freshdesk.com">
            <strong>support@onecapesupport.freshdesk.com</strong>
          </a>
          <p>
            <strong> Disclaimer </strong> <br />
            All the images used in all of our products are not real
            representation of each of them respectively. All the images are
            taken from various public forums, libraries, etc to bring
            attractiveness and make users choose to buy respective items.If
            someone wants credits to any of the photo, please contact us in the
            above support system. Thank you! for using Onecape product and its
            products! Have a great day
          </p>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
