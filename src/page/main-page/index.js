import { Container } from "@mui/material";
import Navbar from "../../components/navbar";
// config
import { navConfig } from "../../config/navigation";


export default function MainPage({ outlet }) {

    return <Container disableGutters maxWidth={false} style={{ p: 0, m: 0 }}>
        <Navbar navConfig={navConfig}/>
        {outlet}
    </Container>
}