import React,{useState, useEffect} from 'react';
import Character from './Character'
import axios from 'axios';
import {Container, Row } from 'reactstrap';


const CharacterList= (props)=>{

  const[ricky, setRicky]= useState([]);

  useEffect(()=>{
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(resp => {
        console.log(resp)
        setRicky(resp.data.results)
      })
      .catch(err => console.log("error" + err));
  },[])

    return(
        <Container>
            <Row>
           {ricky.map((value,index)=>{
               return(
                   <Character 
                        key={index}
                        image={value.image}
                        name={value.name}
                        status={value.status}
                        gender={value.gender}
                        species={value.species}
                   />
               )
           })}  
           </Row>
        </Container>
    )
}
export default CharacterList;