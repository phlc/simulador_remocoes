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
  id: int //priority
  location: string
  locationCascade: bool
  options: []
}

location
{
  id: integer
  state: string
  city: string
  court: string
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
  const [selectedPerson, setSelectedPerson] = useState(null);

  function handleAddPerson(person) {
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
    setPeople((array) => [...array, person].sort((a, b) => a.id - b.id));
    setAlertMessage({
      message: 'Juiz(a) inscrito com sucesso.',
      severity: 'success',
      open: true,
    });
    return true;
  }

  function handleEditPerson(oldPerson, newPerson) {
    if (newPerson.name === '') {
      setAlertMessage({
        message: 'Nome é um campo obrigatório.',
        severity: 'error',
        open: true,
      });
      return false;
    }
    if (newPerson.location === null) {
      setAlertMessage({
        message: 'Lotação é um campo obrigatório.',
        severity: 'error',
        open: true,
      });
      return false;
    }
    if (newPerson.id === '') {
      setAlertMessage({
        message: 'Antiguidade é um campo obrigatório.',
        severity: 'error',
        open: true,
      });
      return false;
    }
    if (newPerson.id !== oldPerson.id) {
      if (people.filter((item) => item.id === newPerson.id).length > 0) {
        setAlertMessage({
          message: 'Já existe um Juiz(a) cadastradado com essa antiguidade.',
          severity: 'error',
          open: true,
        });
        return false;
      }
    }
    setPeople((array) =>
      [...array.filter((item) => item.id !== oldPerson.id), newPerson].sort(
        (a, b) => a.id - b.id
      )
    );
    setAlertMessage({
      message: 'Juiz(a) alterado com sucesso.',
      severity: 'success',
      open: true,
    });
    return true;
  }

  function handleDeletePerson(person) {
    setPeople((array) => array.filter((item) => item.id !== person.id));
    setAlertMessage({
      message: 'Juiz(a) excluído com sucesso.',
      severity: 'success',
      open: true,
    });
  }

  function handleClearPeople() {
    setPeople([]);
    setAlertMessage({
      message: 'Lista limpa com sucesso.',
      severity: 'success',
      open: true,
    });
  }

  // FormDialog State
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    locationCascade: true,
    name: '',
    id: '',
    location: null,
  });

  return (
    <>
      <CssBaseline />
      <Header />
      <Body
        selectedPerson={selectedPerson}
        onSetSelectedPerson={setSelectedPerson}
        onSetFormData={setFormData}
        people={people}
        onOpenForm={() => setOpenForm(true)}
        onDeletePerson={handleDeletePerson}
        onClearPeople={handleClearPeople}
      />
      <Footer />
      <FormDialog
        selectedPerson={selectedPerson}
        onSetSelectedPerson={setSelectedPerson}
        formData={formData}
        onSetFormData={setFormData}
        onSetPerson={handleAddPerson}
        onEditPerson={handleEditPerson}
        onCloseForm={() => setOpenForm(false)}
        openForm={openForm}
      />
      <AlertMessage
        {...alertMessage}
        handleClose={() => setAlertMessage({ ...alertMessage, open: false })}
      />
    </>
  );
}
