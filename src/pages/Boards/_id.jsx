import React from "react";
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import AppBar from "../../components/AppBar";

const Board = () => {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
            <AppBar />
            <Box
                sx={{
                    backgroundColor: "primary.dark",
                    width: "100%",
                    height: (theme) => theme.trello.boardBarHeight,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                Board bar
            </Box>
            <Box
                sx={{
                    backgroundColor: "primary.main",
                    width: "100%",
                    height: (theme) =>
                        `calc(100vh - ${theme.trello.appBarHieght} - ${theme.trello.boardBarHeight})`,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                Board content
            </Box>
        </Container>
    );
};

export default Board;
