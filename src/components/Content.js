import React, { useState } from 'react'
import Helper from './Helper'

function Content(props) {
    const [rdy, setState] = useState([])

    const [proposalName, setProposalName] = useState('')
    const [proposalAuthor, setProposalAuthor] = useState('')
    const [proposalLink, setProposalLink] = useState('')
    const [proposalTone, setProposalTone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setState([...rdy, {
            name: proposalName,
            author: proposalAuthor,
            link: proposalLink,
            tone: proposalTone
        }])
        console.log(rdy)
    }

    switch (props.state) {
        case 'rdy':
            return (
                <div className='container col center'>
                    <table>
                        <caption>Estas son las canciones que ya tenemos ensayadas y listas para hacer</caption>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Intérprete</th>
                                <th>Link</th>
                                <th>Tono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rdy.map((song, index) => (
                                <tr key={index}>
                                    <td>{song.name}</td>
                                    <td>{song.author}</td>
                                    <td><a href={song.link}>Link</a></td>
                                    <td>{song.tone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Helper />
                </div>
            )
        case 'todo':
            return (
                <div className='container col center'>
                    <table>
                        <caption>Estas son las canciones propuestas hasta ahora</caption>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Intérprete</th>
                                <th>Link</th>
                                <th>Tono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rdy.map((song, index) => (
                                <tr key={index}>
                                    <td>{song.name}</td>
                                    <td>{song.author}</td>
                                    <td><a href={song.link}>Link</a></td>
                                    <td>{song.tone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Helper />
                </div>
            )
        case 'propose':
            return (
                <div className='col'>
                    <form className='col center' onSubmit={handleSubmit}>
                        <p>Para sugerir una nueva canción, completá los campos a continuación:</p>
                        <input value={proposalName} onChange={e => setProposalName(e.target.value)}
                            autoComplete='off' type='text' placeholder='Título/nombre' />
                        <input value={proposalAuthor} onChange={e => setProposalAuthor(e.target.value)}
                            autoComplete='off' type='text' placeholder='Autor' />
                        <input value={proposalLink} onChange={e => setProposalLink(e.target.value)}
                            autoComplete='off' type='text' placeholder='Link' />
                        <input value={proposalTone} onChange={e => setProposalTone(e.target.value)}
                            autoComplete='off' type='text' placeholder='Tono (opcional)' />
                        <button className='center' action='submit'>Enviar</button>
                    </form>
                    <Helper />
                </div>
            )
        default:
            return (
                <div>
                    Elegir alguna de las acciones
                    <Helper />
                </div>
            )
    }
}

export default Content