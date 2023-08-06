import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';

import { html } from '../data/info.js';

export default function Footer() {
  return (
    <Box sx={{ position: 'fixed', width: 1.0 }}>
      <BottomNavigation>
        <BottomNavigationAction
          onClick={() =>
            window.open(
              'https://github.com/phlc/simulador_remocoes',
              '_blank',
              'noreferrer'
            )
          }
          label="Github"
          icon={<GitHubIcon />}
        />
        <BottomNavigationAction
          onClick={() => (window.location = 'mailto:pedrocarvalho@outlook.com')}
          label="Email"
          icon={<EmailIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            const info = window.open('', '', 'name=Informações');
            info.document.body.insertAdjacentHTML('beforeend', html);
          }}
          label="Info"
          icon={<InfoIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
