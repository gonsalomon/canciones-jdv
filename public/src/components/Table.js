import React from 'react'

function Table(props) {
    return (
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Autor</th>
                <th>Link</th>
                <th>Tono</th>
            </tr>
        </thead>
        <tbody>
            {props.songs.map(song => (
                <tr key={song.id}>
                    <td>{song.name}</td>
                    <td>{song.author}</td>
                    <td><a href={song.link}>{song.link}</a></td>
                    <td>{song.tone}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table