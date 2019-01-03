//Componente de classe Component que ira ser responsável por renderizar todo o CRUD na SPA 
//e também controlara o estado do usuario atual e as atualizações de outros componentes (component will mount)

//Imports defaults, componentes e constantes
import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/main'
import Table from './Table'
import Form from './Form'
import {initialState, headerProps, baseUrl} from './Const'


export default class UserCrud extends Component {
    
    constructor(props) { // construtor da classe, binda todas as funções e seta o estado inicial
        super(props) 
        this.state = {...initialState}
        this.componentWillMount = this.componentWillMount.bind(this)
        this.clear = this.clear.bind(this)
        this.render = this.render.bind(this)  
        this.setState = this.setState.bind(this)

    }


    componentWillMount() { // ouve atualizações de componentes para setar o estado 
                          // da lista de usuários na exibição atual, de acordo com a db
        axios(baseUrl)
        .then(resp => {
            this.setState({list: resp.data})
        })        
    }
    

    clear () { //botão cancelar (limpa o estado atual)
        this.setState({user: initialState.user})
    }

    
    render () { //Renderização principal
        return ( // Main passando as propriedades do header atual.
                 // Form e table receberão o próprio UserCrud.
            <Main {...headerProps}> 
                <Form  {...this}/>
                <Table {...this}/>
            </Main>
        )
    }
}