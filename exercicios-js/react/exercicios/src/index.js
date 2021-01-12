import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro' // ao usar Primeiro, deve-se usar com P maiuscullo
// para todos arquivos personalizados

// import BomDia from './componentes/BomDia'

// import Multi, { BoaNoite } from './componentes/Multiplos' 

// import Saudacao from './componentes/Saudacao' 

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//Syntax do React
// const elemento = <h1>React 2</h1>

// ReactDOM.render(<BomDia nome="Vitor" idade={10} vf="true"/>, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome="Vitor" sobrenome="Azevedo">
            {/* Como passar os componentes Filhos aqui? */}
            <Filho nome="Joao" />
            <Filho nome="Maria" />
            <Filho nome="Rita" />
        </Pai>
    </div>
    , document.getElementById('root'))

// <h1>React 2</h1> gera resultado parecido com $('<h1>').html('React 2')