import React from "react";

class Botones extends React.Component {
    render() {
        return (
            <div className="opciones">
                <div className="opcion">
                    <button className="botones" onClick={this.props.chooseA}> A </button>
                    <p> {this.props.a} </p>
                </div>
                <div className="opcion">
                    <button className="botones" onClick={this.props.chooseB}> B </button>
                    <p> {this.props.b} </p>
                </div>
            </div>
        )
    }
}

export default Botones;