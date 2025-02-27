import React, { useEffect, useState } from 'react'; //monitora mudanca em cima de variavel e dispara funcao em cima da variavel alterada
import * as S from './styled';
import { useHistory } from 'react-router-dom';


 export default function Repositories(){
     const history = useHistory();
     const [repositories, setRepositories ] = useState([]); //valor do estado 
     useEffect(()=>{
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null){

        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear();
           
        } else {
            history.push('/')
        }
        
        
     }, []);

    return(
       

    <S.Container>
    <S.Title>Repositórios</S.Title>
       <S.List>
          { repositories.map( repository =>{
              return (
                  <S.ListItem>Repositório: { repository }</S.ListItem>
              )
          }) }

       </S.List>
       <S.LinkHome to="/">Voltar</ S.LinkHome> 
       </S.Container>

       

      
       
    )
}