import { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';
import PrimaryButton from './componentes/PrimaryButton';
import SecondaryButton from './componentes/SecondaryButton';
import TertiaryButton from './componentes/TertiaryButton';
// import LinkButton from './componentes/LinkButton';
import CardComponent from './componentes/CardPrimary';
import CardSecondary from './componentes/CardSecondary';
import CardPerfil from './componentes/CardPerfil';
import CardAvalia from './componentes/CardAvalia';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Battery0BarIcon from '@mui/icons-material/Battery0Bar';

// import MyButton from './componentes/MyButton';
import MyButtonTeste from './componentes/MyButtonTeste';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MyButtonTeste
          text='Clique Aqui'
          color='#000000'
          size='small'
          // icon={<DeleteIcon />}
          variant="contained" 
        />
        <hr />
        <MyButtonTeste
          text='Detalhes'
          size='large'
          // icon={<Battery0BarIcon />}
          variant="text"
        />
        <hr />
        <MyButtonTeste
          text='Detalhes'
          size='large'
          // icon={<Battery0BarIcon />}
          variant="text"
        />
        <hr />
        <PrimaryButton 
        text="LABEL" 
        color='#0D3B66'
        />
        <SecondaryButton text="LABEL" /> 
        <TertiaryButton text="LABEL" />
        <hr />
        {/* <LinkButton text="Link button" variant="primary" />
        <LinkButton text="Link button" variant="secondary" /> */}
        <CardComponent />
        <hr />
        <CardSecondary/>
        <hr />
        <CardPerfil/>
        <hr />
        <CardAvalia/>
      </div>
    </>
  );
}

export default App;
