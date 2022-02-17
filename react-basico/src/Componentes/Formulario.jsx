import React from "react";

export default class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        }
    }

    asignarValoresFormulario = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    enviarValoresFormulario = (event) => {
        event.preventDefault();
        // enviar datos

        console.log("Enviando formulario");
        this.limpiarValoresFormulario();
    }

    limpiarValoresFormulario = () => {
        this.setState({
            first_name: "",
            last_name: "",
            email: ""
        });
    }

    render() {
        return (
            <>
                <form onSubmit={this.enviarValoresFormulario}   >
                    <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        placeholder="Ingresa el Nombre"
                        required={true}
                        value={this.state.first_name}
                        onChange={this.asignarValoresFormulario}

                    />
                    <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        placeholder="Ingresa el Apellido"
                        required={true}
                        value={this.state.last_name}
                        onChange={this.asignarValoresFormulario}

                    />
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="usuario@dominio.ext"
                        required={true}
                        value={this.state.email}
                        onChange={this.asignarValoresFormulario}

                    />

                    <div>
                        <button type="submit">Agregar Usuario</button>
                        <button onClick={this.limpiarValoresFormulario} type="reset">Limpiar Formulario</button>
                    </div>




                </form>

            </>
        );
    }
}