/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import PullToRefresh from 'react-simple-pull-to-refresh';
import HomeStyles from './HomeStyles';
import * as colors from '../../uicontants';
import MobilePlaceholder from '../../componentsv2/MobilePlaceholder';
import NftSection from '../../componentsv2/HomeComponents/NftSection';

const Home = props => {
  const classes = HomeStyles();
  const [mobileLog, setMobileLog] = useState(undefined);

  useEffect(() => {
    const match = window.matchMedia('(max-width: 1024px)');
    setMobileLog(match.matches);
    match.addEventListener('change', e => setMobileLog(e.matches));
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return mobileLog ? (
      <Box
        height="100vh"
        style={
          { overflowY: 'hidden' }
        }
      >
        <Box display="flex" flex={1}>
          <PullToRefresh onRefresh={handleRefresh} className={classes.pullFrame}>
            <Box display="flex" flexDirection="column">
              {/* page body */}
              <Box marginTop={2} display="flex" flexDirection="column">
                <Box style={{
                  display: "flex",
                  flexDirection: "row", 
                  alignItems: "center",
                  marginTop: 10,
                  justifyContent: "space-around"
                }}>
                  <Typography style={{
                    padding: 20,
                    margin: 2,
                    textAlign:"center",
                    backgroundColor: "white",
                    color: colors.PRIMARY,
                    width: "100%"
                  }} onClick={() => props.history.push('/happenings')}>Happenings</Typography>
                  <Typography style={{
                    padding: 20,
                    margin: 2,
                    textAlign:"center",
                    backgroundColor: "white",
                    color: colors.PRIMARY,
                    width: "100%"
                  }} onClick={() => props.history.push('/dao')}>DAO</Typography>
                </Box>
                {/* NFT Marketplace */}
                <Box className={classes.nftWrapper}>
                  <NftSection />
                </Box>
              </Box>
              <Box width="100%" height={250} />
            </Box>
          </PullToRefresh>
        </Box>
      </Box>
  ) : mobileLog === false ? (
    <MobilePlaceholder />
  ) : (
    <Fragment />
  );
};

export default Home;
