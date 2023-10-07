import { Icon } from "@iconify/react";
import { Box, IconButton, Stack, Typography, styled } from "@mui/material";
import { useNavigate, useLocation } from "react-router";

const StyledBoxNavBarItem = styled(Box)(({ theme, isselected, haschildren }) => ({
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(1.5),
    cursor: 'pointer',
    boxSizing: 'border-box',
    borderRadius: '8px',
    ...(!haschildren ? {
        '&:hover': {
            background: 'rgb(255,255,255,0.6)',
            color: '#000'
        },
    } : {
        paddingLeft: 0,
        marginLeft: 0.5,
    }
    ),
    ...(isselected &&
    {
        marginRight: theme.spacing(0),
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        background: '#fff',
        color: '#000'
    })
}));

export default function NavbarItem({ data, isChildren, hasChildren, onToggle, isCollapsed = true }) {

    const { id, label, icon, path } = data

    const { pathname } = useLocation();

    const isSelected = data.path === pathname

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(path);
    }

    return <StyledBoxNavBarItem
        isselected={isSelected ? 1 : 0}
        haschildren={hasChildren ? 1 : 0}
        onClick={() => {
            handleNavigate()
        }}
    >
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack sx={{ px: 1.5 }} alignItems={'center'}>

                {isChildren && <Icon icon="bi:dot" />}
                {hasChildren &&
                    <IconButton
                        onClick={onToggle}
                        color="inherit"
                        size="small">
                        <Icon
                            icon="bx:up-arrow"
                            rotate={isCollapsed ? 2 : 1} />
                    </IconButton>
                }


            </Stack>
            <Stack flexGrow={1} direction={"row"} alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant="subtitle1">{label}</Typography>
                {icon}
            </Stack>
        </Stack>
    </StyledBoxNavBarItem>
}