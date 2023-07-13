import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './Header';
import Body from './Body';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './Footer';
import FormDialog from './FormDialog';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Body />
      <Footer />
      <FormDialog />
    </>
  );
}

export default App;
