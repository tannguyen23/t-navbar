import { Box, Stack } from "@mui/material";
import NavbarItem from "./NavbarItem";
import NavSubList from "./NavSubList";
import { Fragment } from "react";

const NAVBAR_HEIGHT = '100vh';
const NAVBAR_WIDTH = '220px';
const BACKGROUND_NAVBAR = '#1F4172'



export default function Navbar({ navConfig }) {

    const renderContent = (data) => {
        if (data?.children) return <NavSubList key={data.id} data={data} />
        return <NavbarItem key={data?.item} data={data}/>
    }

    return (
        <Box
            sx={{ position: 'relative', color: '#fff' }}
            bgcolor={BACKGROUND_NAVBAR}
            height={NAVBAR_HEIGHT}
            width={NAVBAR_WIDTH}
        >
            <Stack direction={'column'}>
                {navConfig.map(itemNav => {
                    return <Fragment key={itemNav.id}>
                        {renderContent(itemNav)}
                    </Fragment>
                }
                )}
            </Stack>
        </Box>)
}