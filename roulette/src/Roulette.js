import React from 'react'

class Roulette extends React.Component{
    constructor(){
        super()
        this.state={
            nome:"Let's go"
        }
    }

    

    randomChoice(){
        let nomi =["Pippo","Pluto","Spongebob","Patrick","Homer","Marge","Bart","Lisa","Phil","Luke","Manny","Joe","Superman","Iron-man","Spiderman","Batman","Wolverine"]
        let random = Math.floor(Math.random() * ((nomi.length-1) - 0) ) + 0;
        return nomi[random]
    }

    showName = (evento) =>{
        this.setState({
            nome : this.randomChoice()
        })
    }

    render(){
        return(
            <section>
                <h1>
                {this.state.nome}
                </h1>
                <button onClick={this.showName}>Start</button>
            </section>
        )
    }
}

export default Roulette