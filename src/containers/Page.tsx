import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';
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
        <div style={{ height: '100vh' }}>
            <Header />
            <div style={{ margin: "0 2rem" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container
                        spacing={2}
                        sx={{ my: 1 }}
                    >
                        <Grid item xs={12} md={6}>
                            <BoxSection>
                                <SearchField searchType="loja" searchPlaceholder="Pesquisa por nome" label="Nome da Loja"/>
                            </BoxSection>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <BoxSection>
                                <SearchField searchType="faturamento" searchPlaceholder="R$ 15.000,00" label="Faturamento"/>
                            </BoxSection>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <BoxSection>
                                <List />
                            </BoxSection>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <BoxSection>
                                <Map />
                            </BoxSection>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
