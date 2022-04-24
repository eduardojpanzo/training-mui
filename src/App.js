import SideBar from './components/SideBar'
import NavBar from './components/Navbar'
import Feed from './components/Feed'
import RighBar from './components/RightBar'
import { Box, Stack } from '@mui/material';


function App() {
  return (
    <Box >
      <NavBar/>
      <Stack direction='row' spacing={2} justifyContent="space-between" >
        <SideBar/>
        <Feed/>
        <RighBar/>
      </Stack>
    </Box>
  );
}

export default App;
