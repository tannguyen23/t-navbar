import { Stack } from "@mui/material";
import { Fragment } from "react";
import NavbarItem from "./NavbarItem";
import NavSubList from "./NavSubList";

export default function NavList({ navConfig, isChildren }) {
    const renderContent = (data) => {
        if (data?.children) return <NavSubList key={data.id} data={data} />
        return <NavbarItem isChildren={isChildren} key={data?.item} data={data} />
    }

    return <Stack direction={'column'}>
        {navConfig.map(itemNav => {
            return <Fragment key={itemNav.id}>
                {renderContent(itemNav)}
            </Fragment>
        }
        )}
    </Stack>

}