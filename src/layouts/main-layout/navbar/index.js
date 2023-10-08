import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import NavbarItem from "./NavbarItem";
import NavSubList from "./NavSubList";
import { Fragment, useEffect, useMemo, useState } from "react";
import { BACKGROUND_NAVBAR, NAVBAR_HEIGHT, NAVBAR_WIDTH, TOGGLE_BUTTON_WIDTH } from "../../const";
import useBreakpoint from "../../../hooks/useBreakpoints";
import { Icon } from "@iconify/react";

export default function Navbar({ navConfig }) {
    const breakpoint = useBreakpoint().getBreakPointName();
    const isSmallScreen = breakpoint === 'sm' || breakpoint === 'xs'

    const [isOpen, setIsOpen] = useState(false);



    const handleToggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        if (!isSmallScreen) {
            setIsOpen(false);
        }
    }, [breakpoint])


    return (
        <>
            {isSmallScreen ?
                <Box
                    sx={{ ...(!isOpen && ({ position: 'relative', p: 2 })) }}
                >
                    {!isOpen && <IconButton color="inherit" onClick={handleToggleMenu}>
                        <Icon icon="ep:menu" color={BACKGROUND_NAVBAR} sx={{ width: TOGGLE_BUTTON_WIDTH }} />
                    </IconButton>}
                    {isOpen && <Box
                        sx={{ position: 'absolute', color: theme => theme.palette.common.white }}
                        bgcolor={BACKGROUND_NAVBAR}
                        height={NAVBAR_HEIGHT}
                        width={'100vw'}
                    >
                        <Stack direction={'column'}>
                            <Stack direction={'row'} sx={{ px: 2 }} justifyContent={'space-between'} alignItems={'center'}>
                                <Typography variant="subtitle2">Menu</Typography>
                                <IconButton onClick={handleToggleMenu}>
                                    <Icon icon="ep:menu" color={'#fff'} sx={{ width: TOGGLE_BUTTON_WIDTH }} />
                                </IconButton>
                            </Stack>
                            {navConfig.map(itemNav => {
                                return <Fragment key={itemNav.id}>
                                    {renderContent(itemNav)}
                                </Fragment>
                            }
                            )}
                        </Stack>
                    </Box>}
                </Box> :
                <Box
                    sx={{ position: 'absolute', color: theme => theme.palette.common.white }}
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
                </Box>
            }
        </>
    )
}