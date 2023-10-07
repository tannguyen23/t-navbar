import { Box, Collapse, } from "@mui/material";
import NavbarItem from "./NavbarItem";
import { useState } from "react";

export default function NavSubList({ data }) {
    const hasChildren = data?.children.length > 0

    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    }

    return <Box>

        <NavbarItem key={data.id} data={data} hasChildren={hasChildren} onToggle={handleToggle} />

        {isCollapsed &&
            <Collapse in={isCollapsed}>
                {data.children.map((item) =>
                    <NavbarItem isChildren key={item?.id} data={item} />
                )}
            </Collapse>
        }

    </Box>
}