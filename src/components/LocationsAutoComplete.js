import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import varas from '../data/varas.json';

function LocationsAutoComplete({ onChange, value, disabled }) {
  return (
    <Autocomplete
      disabled={disabled}
      size="small"
      disablePortal
      onChange={(e, value) => onChange(value)}
      value={value}
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
