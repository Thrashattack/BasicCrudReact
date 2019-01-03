import React from 'react'

//componentes de troca de página, roteamento e redirecionamento
import { Switch, Route, Redirect} from 'react-router'

//Duas possibilidades de renderização para a Main = { Home, UserCrud }
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'


//renderização dos componentes baseado no path da URL e tratativa de url inválida
export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' /> 

    </Switch>