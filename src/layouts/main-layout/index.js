import { Container, IconButton } from "@mui/material";
import Navbar from "./navbar";
// config
import { navConfig } from "../../config/navigation";
import { Box } from "@mui/system";
import { NAVBAR_WIDTH, TOGGLE_BUTTON_WIDTH } from "../const";
import { useTheme } from "@emotion/react";
import useBreakpoint from "../../hooks/useBreakpoints";
import { Icon } from "@iconify/react";


export default function MainPage({ children }) {
    const breakpoint = useBreakpoint().getBreakPointName();
    const isSmallScreen = breakpoint === 'sm' || breakpoint === 'xs'

    return <Container disableGutters maxWidth={false} style={{ p: 0, m: 0 }}>
        <Box>
            <Navbar navConfig={navConfig} />
        </Box>
        <Box sx={{
            marginLeft: !isSmallScreen && NAVBAR_WIDTH
        }}>
            {children}
        </Box>
    </Container>
}