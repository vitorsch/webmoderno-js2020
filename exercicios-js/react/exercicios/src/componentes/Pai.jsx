import React from 'react'
import Filho from './Filho'
import { childrenWithProps } from '../utils/utils'

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* Como inserir filhos aqui pelo index? */}
            {/* {props.children} */}

            { childrenWithProps(props) }

            {/* <Filho nome="Pedro" sobrenome={props.sobrenome}/>
            <Filho {...props}/>
            <Filho  {...props} nome="Carla"/> */} {/* a Ordem afeta a sobreescrita de valores */}
        </ul>
    </div>