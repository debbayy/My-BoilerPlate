
import './App.css'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/code-highlight/styles.css';
import { MantineThemeProvider } from '@mantine/core';
import Content from './layout/content';

function App() {

  return (
    <MantineThemeProvider>
      <Content/>
    </MantineThemeProvider>
  )
}

export default App
