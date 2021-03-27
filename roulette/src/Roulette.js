import React from 'react'
import _ from 'lodash'

class Roulette extends React.Component{
    constructor(){
        super()
        this.state={
            timerscroll: 200,
            timerwinner: 1000,
            nome:"Let's go"
        }
    }

    

    randomChoice = () =>{
        const nomi =["Pippo","Pluto","Spongebob","Patrick","Homer","Marge","Bart","Lisa","Phil","Luke","Manny","Joe","Superman","Iron-man","Spiderman","Batman","Wolverine"]
        //let random = Math.floor(Math.random() * ((nomi.length-1) - 0) ) + 0;
        
        return _.sample(nomi)
    }

    timer = (evento) => {
        let chiave= evento.target.value
        chiave = parseInt(chiave)
        this.setState({
            timerscroll:chiave
        })
    }
    timer2 = (evento) => {
        let chiave= evento.target.value
        chiave = parseInt(chiave)
        this.setState({
            timerwinner:chiave
        })
    }
    showName = (evento) => {
        let timer = setInterval(() => {
            this.setState({
                nome: this.randomChoice()
            })
          }, this.state.timerscroll);
        setTimeout(function timx() {
            clearInterval(timer)
        },this.state.timerwinner)
    }
    

    render(){
        return(
            <section>
                <div>
                    <label>Timer scroll nomi </label>
                    <input type="number" step="50" min="200" value={this.state.timerscroll} onChange={this.timer}/>
                </div>
                <div>
                    <label>Timer attesa vincitore </label>
                    <input type="number" step= "500" min="1000" value={this.state.timerwinner} onChange={this.timer2}/>
                </div>
                <h1>
                {this.state.nome}
                </h1>
                <button onClick={this.showName}>Start</button>
            </section>
        )
    }
}

export default Roulette