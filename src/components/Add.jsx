import {Avatar,Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material";
import {Add as AddIcon,Image, DateRange, EmojiEmotions, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import { useState } from "react";

const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems:"center",
    gap:"20px",
    marginBotton:"20px",
})

function Add() {
    const [open, setOpen] = useState(false);
  return (
      <>
        <Tooltip 
            onClick={e=>setOpen(true)}
            title="Delete"
            sx={{
                position: "fixed",
                bottom:20,
                left:{xs:"calc(50% - 25px)", md:30},
            }}
        >
            <Fab color="primary" aria-label="add">
                <AddIcon/>
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={e=>setOpen(true)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box 
                width={400}
                height={280}
                bgcolor={"background.default"}
                color={"text.primary"}
                p={3}
                borderRadius={5}
            >
                <Typography variant="h6" color="gray" align="center">
                    Create post
                </Typography>
                <UserBox>
                    <UserBox>
                        <Avatar
                            src=""
                            sx={{width:30,height:30}}
                        />
                        <Typography fontWeight={500} variant="span">
                            John Doe
                        </Typography>
                    </UserBox>
                </UserBox>
                <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    label="Multiline"
                    multilene
                    rows={4}
                    placeholder="What's in your mind"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mb={2} mt={3}>
                    <EmojiEmotions color="primary"/>
                    <Image color="secondary"/>
                    <VideoCameraBack color="success"/>
                    <PersonAdd color="error"/>
                </Stack>

                <ButtonGroup 
                    fullWidth
                    variant="contined"
                    aria-label="outlined primary button group">
                    <Button color="primary">Post</Button>
                    <Button sx={{width:"100px"}}>
                        <DateRange/>
                    </Button>
                    <Button></Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
      </>
  );
}

export default Add;