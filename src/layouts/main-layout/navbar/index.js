import { Box, Stack } from "@mui/material";
import NavbarItem from "./NavbarItem";
import NavSubList from "./NavSubList";
import { Fragment } from "react";
import { BACKGROUND_NAVBAR, NAVBAR_HEIGHT, NAVBAR_WIDTH } from "../../const";

export default function Navbar({ navConfig }) {

    const renderContent = (data) => {
        if (data?.children) return <NavSubList key={data.id} data={data} />
        return <NavbarItem key={data?.item} data={data} />
    }

    return (
        <Box
            sx={{ position : 'absolute', color: theme => theme.palette.common.white }}
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