import React from "react";

class Historial extends React.Component { 
    render () {
        return (
            <div className="recordatorio">
                <p> Selección anterior: {this.props.anterior} </p>
                <p> Historial de opciones elegidas: </p>
                <ul> 
                    {
                        this.props.elecciones.map(
                            (item, index) => {
                                return <li key={index}> {item} </li>
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Historial;