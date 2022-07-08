import React, { useState } from 'react'
import Content from './Content'

function Nav() {
    const [state, setState] = useState("")
    switch (state) {
        case "rdy":
            return (
                <div>
                    <nav className='nav'>
                        <p className={state === 'rdy' ? 'focus' : 'normal'} onClick={() => {
                            setState('rdy')
                        }}>Canciones listas</p>
                        <p className={state === 'todo' ? 'focus' : 'normal'} onClick={() => {
                            setState('todo')
                        }}>Canciones sugeridas</p>
                        <p className={state === 'propose' ? 'focus' : 'normal'} onClick={() => {
                            setState('propose')
                        }}>Sugerir nueva canción</p>
                    </nav>
                    <Content className='ctrCnt' state='rdy' />
                </div>
            )
        case "todo":
            return (
                <div>
                    <nav className='nav'>
                        <p className={state === 'rdy' ? 'focus' : 'normal'} onClick={() => {
                            setState('rdy')
                        }}>Canciones listas</p>
                        <p className={state === 'todo' ? 'focus' : 'normal'} onClick={() => {
                            setState('todo')
                        }}>Canciones sugeridas</p>
                        <p className={state === 'propose' ? 'focus' : 'normal'} onClick={() => {
                            setState('propose')
                        }}>Sugerir nueva canción</p>
                    </nav>
                    <Content className='ctrCnt' state='todo' />
                </div>
            )
        case "propose":
            return (
                <div>
                    <nav className='nav'>
                        <p className={state === 'rdy' ? 'focus' : 'normal'} onClick={() => {
                            setState('rdy')
                        }}>Canciones listas</p>
                        <p className={state === 'todo' ? 'focus' : 'normal'} onClick={() => {
                            setState('todo')
                        }}>Canciones sugeridas</p>
                        <p className={state === 'propose' ? 'focus' : 'normal'} onClick={() => {
                            setState('propose')
                        }}>Sugerir nueva canción</p>
                    </nav>
                    <Content className='ctrCnt' state='propose' />
                </div>
            )
        default:
            return (
                <div>
                    <nav className='nav'>
                        <p className={state === 'rdy' ? 'focus' : 'normal'} onClick={() => {
                            setState('rdy')
                        }}>Canciones listas</p>
                        <p className={state === 'todo' ? 'focus' : 'normal'} onClick={() => {
                            setState('todo')
                        }}>Canciones sugeridas</p>
                        <p className={state === 'propose' ? 'focus' : 'normal'} onClick={() => {
                            setState('propose')
                        }}>Sugerir nueva canción</p>
                    </nav>
                    <Content state='' />
                </div>
            )
    }


}

export default Nav