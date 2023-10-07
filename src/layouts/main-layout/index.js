import { Container } from "@mui/material";
import Navbar from "./navbar";
// config
import { navConfig } from "../../config/navigation";
import { Box } from "@mui/system";
import { NAVBAR_WIDTH } from "../const";


export default function MainPage({ children }) {

    return <Container disableGutters maxWidth={false} style={{ p: 0, m: 0 }}>
        <Navbar navConfig={navConfig} />
        <Box sx={{ marginLeft: NAVBAR_WIDTH }}>
            {children}
        </Box>
    </Container>
}