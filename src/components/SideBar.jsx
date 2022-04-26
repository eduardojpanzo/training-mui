import { AccountBox, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";

function SideBar({mode, setMode}) {
    return (
        <Box
            flex={2}
            p={2}
            sx={{disply:{xs:'none',sm:"block"}}}
        >
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            <ListItemText primary="Homepage"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Pages/>
                            </ListItemIcon>
                            <ListItemText primary="pages"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Group/>
                            </ListItemIcon>
                            <ListItemText primary="Gruops"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Storefront/>
                            </ListItemIcon>
                            <ListItemText primary="Mrketplace"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary="Friends"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Settings/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <AccountBox/>
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <ModeNight/>
                            </ListItemIcon>
                            <Switch onChange={e=>setMode(mode ==="light"?"dark":"light")}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
  }
  
  export default SideBar;