import { Box, Stack } from "@mui/material";
import NavbarItem from "./NavbarItem";
import NavSubList from "./NavSubList";
import { BACKGROUND_NAVBAR, NAVBAR_HEIGHT, NAVBAR_WIDTH } from "../../const";
import NavList from "./NavList";

export default function Navbar({ navConfig }) {



    return (
        <Box
            sx={{ position: 'absolute', color: theme => theme.palette.common.white }}
            bgcolor={BACKGROUND_NAVBAR}
            height={NAVBAR_HEIGHT}
            width={NAVBAR_WIDTH}
        >
            <NavList navConfig={navConfig}></NavList>
        </Box>)
}