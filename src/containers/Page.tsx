import React, { useContext } from 'react'
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';
import Header from '../components/Header';
import Map from '../components/Map';
import List from '../components/List';
import SearchField from '../components/SearchField';
import { StoreDataContext } from '../providers/SearchProvider';

const BoxSection = styled(Paper)(() => ({
    padding: "16px",
    textAlign: 'center',
}));

export default function Page(): JSX.Element {


    return (
        <div style={{ height: '100vh' }}>
            <Header />
            <div style={{ maxWidth: '90%', margin: 'auto' }}>
                <Box sx={{ maxWidth: 'xl' }}>
                    <Grid container
                        spacing={2}
                        style={{ width: "100%" }}
                        sx={{ my: 1 }}
                    >
                        <Grid item xs={6}>
                            <BoxSection>
                                <SearchField searchType="loja" searchPlaceholder="Pesquisa por nome"/>
                            </BoxSection>
                        </Grid>
                        <Grid item xs={6}>
                            <BoxSection>
                                <SearchField searchType="faturamento" searchPlaceholder="R$ 15.000,00"/>
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
            </div>
        </div>
    )
}
