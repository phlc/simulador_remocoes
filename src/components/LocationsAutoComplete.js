import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import varas from '../data/varas.json';

function LocationsAutoComplete() {
  return (
    <Autocomplete
      size="small"
      disablePortal
      onChange={(e, value) => console.log(value)}
      id="combo-box-demo"
      options={varas}
      getOptionLabel={(option) =>
        `${option.vara} ${option.cidade} ${option.estado}`
      }
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Varas" />}
    />
  );
}

export default LocationsAutoComplete;
