import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/mcsnsx" target="_blank" rel="noreferrer">
                            <GitHubIcon className='git' />
                        </a>
                        <a href="https://www.linkedin.com/in/maria-carolina-s-n-xavier-05340b191/" target="_blank" rel="noreferrer">
                            <LinkedInIcon className='lin' />
                        </a>
                    </Box>
                </Box>
                <Grid container justifyContent="center" alignItems="center" className='box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2020 |     
                        <a target="_blank" href="mariacarolina.tec.br" rel="noreferrer"  className='textos link'> mariacarolina.tec.br</a></Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;