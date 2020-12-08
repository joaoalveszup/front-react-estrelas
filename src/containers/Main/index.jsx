import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import RegisterItem from '../RegisterItem'
import ListItems from '../ListItems'
import Login from '../Login'
import './styled.css'

const Main = () => (
  <div>
    <Header />
    <Navbar />
    <main>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/register' exact>
          <RegisterItem />
        </Route>
        <Route path='/list' exact>
          <ListItems />
        </Route>
      </Switch>
    </main>
  </div>
)

export default Main