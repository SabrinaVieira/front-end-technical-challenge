import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function Header() {
    return (
        <AppBar
            position="static"
            color="primary"
        >
            <Toolbar>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ mx: 5 }}>
                    Desempenho das Lojas
                </Typography>
            </Toolbar>
        </AppBar>
    )
}