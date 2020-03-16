// Componente que renderiza o formulário de input de dados (Usa Model)
import React from 'react'
import Model from './Model'


export default props => //props recebe o this do objeto UserCrud que contem atributos e funcoes
        <div className="form">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="">Nome</label>
                        <input type="text" className="form-control" name="name"
                                value={props.state.user.name} //UserCrud.state.user.name 
                                onChange={e => Model.updateField(props, e) } // model precisa ser instanciada pra 
                                                                                   // funcionar, por alguma razão desconhecida....
                                placeholder="Digite o nome..."/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="">E-mail</label>
                        <input type="text" className="form-control" name="email"
                                value={props.state.user.email}
                                onChange={e => Model.updateField(props, e) }
                                placeholder="Digite o email..."/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button onClick={ () => Model.save(props)} className="btn btn-primary">
                    Salvar
                    </button>
                    <button onClick={ () => Model.clear(props)} className="btn btn-secondary ml-2">
                    Cancelar
                    </button>
                </div>
            </div>

        </div>
  