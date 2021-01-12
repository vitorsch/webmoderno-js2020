import React, { Component } from 'react'

export default class Saudacao extends Component {
    
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props) // importante!
        
        this.setTipo = this.setTipo.bind(this) // uma solução fazendo com que o this dentro 
        //da função setTipo aponte pro this que queremos. A outra solução é com setNome
        // com a função arrow no Onchange

    }
    
    setTipo(e) {
        // console.log(e.target.value)
        // this.props.tipo = e.target.value // erro! Pois props é somente leitura
        this.setState({ tipo: e.target.value })
    }
    
    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder="Tipo.."
                    value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome.." 
                    value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}