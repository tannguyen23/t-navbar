import { Box, Collapse, } from "@mui/material";
import NavbarItem from "./NavbarItem";
import { useState, memo } from "react";
import NavList from "./NavList";

const NavSubList = ({ data }) => {
    console.log('re-render')

    const hasChildren = data?.children.length > 0

    const [isCollapsed, setIsCollapsed] = useState();

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    }

    return <Box>

        <NavbarItem key={data.id} data={data} hasChildren={hasChildren} isCollapsed={isCollapsed} onToggle={handleToggle} />

        {isCollapsed &&
            <Collapse in={isCollapsed}>
                <NavList isChildren navConfig={data.children}/>

                {/* {data.children.map((item) =>
                    <NavbarItem isChildren key={item?.id} data={item} />
                )} */}
            </Collapse>
        }

    </Box>
}

export default memo(NavSubList)