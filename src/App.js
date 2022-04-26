import SideBar from './components/SideBar'
import NavBar from './components/Navbar'
import Feed from './components/Feed'
import RighBar from './components/RightBar'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './components/Add';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar/>
        <Stack direction='row' spacing={2} justifyContent="space-between" >
          <SideBar setMode={setMode} mode={mode}/>
          <Feed/>
          <RighBar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
