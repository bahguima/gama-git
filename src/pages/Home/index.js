import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom'; //controlar e acessar outras paginas


function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);
  


  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then( response => {
     const repositories = response.data;
     const repositoriesName = [];
     repositories.map((repository) => {
       repositoriesName.push(repository.name);
     });
     localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
     setErro(false);
     history.push('/repositories');
  })
  .catch(err => {
    setErro(true);
  })
 
}


  return (
    <S.HomeContainer>
    <S.Content>
    <S.Input className="UsuarioInput"  placeholder="Usuario"  value={usuario} onChange={e => setUsuario (e.target.value)} /> 
    <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
  
    </ S.Content>
    { erro ?  <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> :  '' }
    </ S.HomeContainer>
    
  );
}

export default App;


// state sempre real fonte de informação



// o hook useState retorna[ usuario, setUsuario ] ou seja arrays

// onchange captura qualquer alteracao do input

//e.target.value monitora tudo dentro do input   e(evento)

//handle lidar com pessquisa

//axios pacote baseado em promises pra fazer requisicoes

//.then pq é uma promise

//configurar axios e dar metodo get

