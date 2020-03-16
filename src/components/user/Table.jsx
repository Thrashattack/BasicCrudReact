//Renderização da tabela de dados completa em tempo real (Usa Model)

import React from 'react'
import Model from './Model'

export default props => //props === UserCrud
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows(props)}
            </tbody>
        </table>
    
function renderRows(props) {
    return props.state.list.map(user => {
        return (
            <tr className="col-12" key={user.id}>
                <td className="col-3">{user.name}</td>
                <td className="col-3">{user.email}</td>
                <td className="col-6 d-flex justify-content-start">
                    <button className="btn btn-warning"
                        onClick={() => Model.load(props, user)} >
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger ml-2"
                        onClick={ () => window.confirm(`Deseja realmente remover ${user.name}?`) ?Model.remove(props, user) : 0} >
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })
}
