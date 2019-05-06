import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'

// ReactRouter dummy components
const Dash = () => <h2>Dash</h2>
const Survey = () => <h2>Survey</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }

    render () {
        return (
            <div>
            {/* browser router only expects one child component */}
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dash" component={Dash} />
                        <Route path="/dash/new" component={Survey} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);