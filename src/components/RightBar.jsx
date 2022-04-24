import { Box } from "@mui/material";

function RightBar() {
    return (
        <Box
            bgcolor="lightcoral"
            flex={2}
            p={2}
            sx={{disply:{xs:'none',sm:"block"}}}
        >
            RightBar
        </Box>
    );
  }
  
  export default RightBar;