import React from 'react'

function Footer(props) {
    function handleLogin(e){
        e.preventDefault()
        props.handleLogin(e.target.user.value, e.target.pass.value)
        if(props.user===''){
            alert('Usuario o contraseña incorrectos')
        }
    }

    return (
        <footer className='col'>
            {props.loggedIn ? 
            <div>
                <h1>Hola, {props.user}!</h1>
                <button onClick={() => props.setLoggedIn(false)}>Logout</button>
            </div> : 
            <div className='col center'>
                <b>Login</b>
                <form onSubmit={handleLogin} className='col'>
                    <input name='user' type='text' placeholder='Usuario' />
                    <input name='pass' type='password' placeholder='Contraseña' />
                    <button name='login' type='submit' onClick={handleLogin}>Iniciar sesión</button>
                    <button name='register' type='submit'>Registrarme</button>
                </form>
            </div>}
            <p>Sitio creado en 2022.</p>
        </footer>
    )
}

export default Footer