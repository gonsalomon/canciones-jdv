import React from 'react'

function Input(props) {
  async function post(e){
    e.preventDefault()
    let { data: song, error } = await props.db
    .from('songs')
    .insert({
        name: e.target.name.value,
        author: e.target.author.innerHTML,
        link: e.target.link.value,
        tone: e.target.tone.value,
        lyrics: e.target.lyrics.value
    })
    if(error)
        console.log(error)
    else{
        props.setSongs([...props.songs, song])
        e.target.reset()
        e.target.lyrics.innerHTML = 'Letras y acordes (opcional)'
    }
  }
  
  return (
    <div className='col'>
        <h2>Ingresar contenido</h2>
        <p>Los campos opcionales necesitan que en base a lo que se complete, podamos hacer la canción después. Si tenés todo, genial!</p>
        <form className='col' onSubmit={post}>
            <input name='name' placeholder='Nombre'/>
            <input name='author' placeholder='Intérprete'/>
            <input name='link' placeholder='Link (opcional)'/>
            <input name='tone' placeholder='Tono (opcional)'/>
            <div name='lyrics' contentEditable='true'>Letra y acordes (opcional)</div>
            <button type='submit'>Subir</button>
        </form>
    </div>
  )
}

export default Input