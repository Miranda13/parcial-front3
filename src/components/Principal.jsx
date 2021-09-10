import data from "./data";
import React from "react";
import Botones from "./Botones";
import Historial from "./Historial";

class Principal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        iterador: 0,
        anterior: '',
        elecciones: []
      };
      this.chooseA = this.chooseA.bind(this);
      this.chooseB = this.chooseB.bind(this);
    }

    chooseA() {
        if (this.state.anterior === 'A') {
            this.setState((state, props)=>(
                {
                iterador: state.iterador + 2,
                anterior: "A",
                elecciones: [...this.state.elecciones,"A"]
            }));
        } else {
            this.setState((state, props)=>(
                {
                iterador: state.iterador + 1,
                anterior: "A",
                elecciones: [...this.state.elecciones,"A"]
            }));
        }
        
    }

    chooseB() {
        if (this.state.anterior === 'A') {
            this.setState((state, props)=>({
                iterador: state.iterador + 3,
                anterior: "B",
                elecciones: [...this.state.elecciones,"B"]
            }))
        } else if(this.state.anterior === 'B') {
            this.setState((state, props)=>({
                iterador: state.iterador + 2,
                anterior: "B",
                elecciones: [...this.state.elecciones,"B"]
            }))
        } else {
            this.setState((state, props)=>({
                iterador: state.iterador + 2,
                anterior: "B",
                elecciones: [...this.state.elecciones,"B"]
            }))
        }
        
    }
    
    render() {
      return (
        <div className="layout">
            <p className="historia"> {data[this.state.iterador].historia} </p>  
            <Botones 
            chooseA = {this.chooseA}
            chooseB = {this.chooseB}
            a = {data[this.state.iterador].opciones.a}
            b = {data[this.state.iterador].opciones.b}
            />
            <Historial
            anterior = {this.state.anterior}
            elecciones = { this.state.elecciones}
            />
        </div>
      );
    }
  }
  
  export default Principal;
  