
import './App.css'
import '@mantine/core/styles.css';

import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/code-highlight/styles.css';
import GlobalButton from './components/Button/GlobalButton';
import { MantineThemeProvider, Stack, Text } from '@mantine/core';

function App() {

  return (
     <MantineThemeProvider>
      <Stack align="center" mt={50}>
        <Text size="xl">
          Welcome to Mantine!
        </Text>
        <GlobalButton label={"Hallo"}/>
      </Stack>
    </MantineThemeProvider>
  )
}

export default App
