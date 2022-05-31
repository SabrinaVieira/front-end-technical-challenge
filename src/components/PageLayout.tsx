import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Header from './Header';

const BoxSection = styled(Paper)(() => ({
    padding: "16px",
    textAlign: 'center',
}));


export default function PageLayout() {
    return (
        <>
            <Header />
            <Container>
                <Box sx={{ maxWidth: 'xl' }}>
                    <Grid container
                        spacing={2}
                        sx={{
                            my: 1,
                        }}>
                        <Grid item xs={6}>
                            <BoxSection>Filtro de pesquisa por nome</BoxSection>
                        </Grid>
                        <Grid item xs={6}>
                            <BoxSection>Filtro de pesquisa por faturamento</BoxSection>
                        </Grid>
                        <Grid item xs={5}>
                            <BoxSection>Listagem</BoxSection>
                        </Grid>
                        <Grid item xs={7}>
                            <BoxSection>Mapa</BoxSection>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
