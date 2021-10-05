import {useState} from 'react';
import Button from '../Button'

const Card = () => {
   
    const[valor, SetValor]=useState(0)

    function Adicionar(){
        SetValor(
            valor + 1
        )
    }
    function Remover(){
        SetValor(
            valor - 1
        )
    }
   
    return(
        <div className="card">
            <div className="card-header">
                Meu primeiro card 
            </div>
            <div className="card-body">
                
                <p className="card-text">{valor}</p>
               <Button
                    type="button" 
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                   Adicionar
               </Button>
               <Button
                    type="button" 
                    className="btn btn-danger"
                    onClick={Remover}
                >
                   Remover
               </Button>
            
            </div>
        </div>
    )
}

export default Card;