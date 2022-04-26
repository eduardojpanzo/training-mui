import {Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from "@mui/material";

function RightBar() {
    return (
        <Box
            flex={2}
            p={2}
            sx={{disply:{xs:'none',sm:"block"}}}
        >
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontFamily={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src=""/>
                    <Avatar alt="Remy Sharp" src=""/>
                    <Avatar alt="Remy Sharp" src=""/>
                    <Avatar alt="Remy Sharp" src=""/>
                    <Avatar alt="Remy Sharp" src=""/>
                    <Avatar alt="Remy Sharp" src=""/>
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Latest Photos
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src="" alt="first things" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="" alt="second things" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="" alt="some things" />
                    </ImageListItem>
                </ImageList>

                <Typography variant="h6" fontWeight={100} mt={2}>
                    Latest Conversations
                </Typography>
            </Box>
        </Box>
    );
  }
  
  export default RightBar;