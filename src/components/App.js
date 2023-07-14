import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './Header';
import Body from './Body';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './Footer';
import FormDialog from './FormDialog';
import { useState } from 'react';
import AlertMessage from './AlertMessage';

/*
people
{
  name:
  id: //priority
  location:
  locationCascade:
}

location
{
  id:
  state:
  city:
  court:
}
*/

export default function App() {
  //Alert Message State
  const [alertMessage, setAlertMessage] = useState({
    message: 'Test',
    severity: 'error',
    open: false,
  });

  //People State and Functions
  const [people, setPeople] = useState([]);

  function handleAddPeople(person) {
    if (person.name === '') {
      setAlertMessage({
        message: 'Nome é um campo obrigatório.',
        severity: 'error',
        open: true,
      });
      return false;
    }
    if (person.location === '') {
      setAlertMessage({
        message: 'Lotação é um campo obrigatório.',
        severity: 'error',
        open: true,
      });
      return false;
    }
    if (person.id === '') {
      setAlertMessage({
        message: 'Antiguidade é um campo obrigatório.',
        severity: 'error',
        open: true,
      });
      return false;
    }
    if (people.filter((item) => item.id === person.id).length > 0) {
      setAlertMessage({
        message: 'Já existe um Juiz(a) cadastradado com essa antiguidade.',
        severity: 'error',
        open: true,
      });
      return false;
    }
    setPeople((item) => [...item, person].sort((a, b) => a.id - b.id));
    setAlertMessage({
      message: 'Juiz(a) inscrito com sucesso.',
      severity: 'success',
      open: true,
    });
    return true;
  }

  // FormDialog State
  const [form, setForm] = useState(false);

  return (
    <>
      <CssBaseline />
      <Header />
      <Body people={people} onOpenForm={() => setForm(true)} />
      <Footer />
      <FormDialog
        onSetPeople={handleAddPeople}
        onCloseForm={() => setForm(false)}
        openForm={form}
      />
      <AlertMessage
        {...alertMessage}
        handleClose={() => setAlertMessage({ ...alertMessage, open: false })}
      />
    </>
  );
}
