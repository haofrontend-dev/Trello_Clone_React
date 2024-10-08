import React from "react";

import ModelSelect from "../ModelSelect";
import { Box } from "@mui/material";
const AppBar = () => {
    return (
        <Box
            sx={{
                backgroundColor: "primary.light",
                width: "100%",
                height: (theme) => theme.trello.appBarHieght,
                display: "flex",
                alignItems: "center",
            }}
        >
            <ModelSelect />
        </Box>
    );
};

export default AppBar;
