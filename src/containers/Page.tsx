import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Container } from '@mui/material';
import Header from '../components/Header';
import Map from '../components/Map';
import List from '../components/List';
import SearchField from '../components/SearchField';

const BoxSection = styled(Paper)(() => ({
    padding: "16px",
    textAlign: 'center',
}));


export default function Page(): JSX.Element {
    return (
        <>
            <Header />
            <Container>
                <Box sx={{ maxWidth: 'xl' }}>
                    <Grid container
                        spacing={2}
                        style={{ width: "100%" }}
                        sx={{ my: 1 }}
                    >
                        <Grid item xs={6}>
                            <BoxSection>
                                <SearchField />
                            </BoxSection>
                        </Grid>
                        <Grid item xs={6}>
                            <BoxSection>
                                <SearchField />
                            </BoxSection>
                        </Grid>
                        <Grid item xs={5}>
                            <BoxSection>
                                <List />
                            </BoxSection>
                        </Grid>
                        <Grid item xs={7}>
                            <BoxSection>
                                <Map />
                            </BoxSection>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
