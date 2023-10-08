import { Box, Collapse, } from "@mui/material";
import NavbarItem from "./NavbarItem";
import { useState } from "react";
import NavList from "./NavList";

export default function NavSubList({ data }) {
    const hasChildren = data?.children.length > 0

    const [isCollapsed, setIsCollapsed] = useState(false);

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