// Model que implementa as funções C, R, U e D na database (jsondb)

import {baseUrl, initialState} from './Const' // importação de constantes e do axios
import axios from 'axios'

export default class Model  {
        save = function (_this) { // funções recebem o this que irá representar o UserCrud atual em _this
            const user = _this.state.user
            const method = user.id ? 'put' : 'post'
            const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
            axios[method](url, user)
                .then(resp => {
                    const list = this.getUpdatedList(_this, resp.data)
                    _this.setState({user: initialState.user, list})
                }) 
        }
    
        getUpdatedList = function (_this, user, add = true) {
            const list = _this.state.list.filter(u => u.id !== user.id)
            if (add) list.unshift(user)
            return list
    
        }
    
        updateField (_this, event) {
            const user = { ..._this.state.user }
            user[event.target.name] = event.target.value
            return _this.setState( { user })
        }
    
        load = function(_this, user) {
            _this.setState({ user })
        }
        remove = function(_this, user) {
            axios.delete(`${baseUrl}/${user.id}`).then(resp => {
                const list = this.getUpdatedList(_this, user, false)
                _this.setState({ list })
            })
        }
    
    
}