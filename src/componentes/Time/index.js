import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const corBackground = { backgroundColor: props.corSecundaria }
    const corSublinhado = { borderColor: props.corPrimaria }

    return (
        (props.colaboradores.length) ?
        <section className="time" style={corBackground}>
            <h3 style={corSublinhado}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} /> )}
            </div>
        </section> : ''
    )
}

export default Time
