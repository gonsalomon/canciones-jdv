import React, { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'

import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  const supabaseUrl = 'https://okcmnkeanvkbfntgqljn.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rY21ua2VhbnZrYmZudGdxbGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcwNjE0NDgsImV4cCI6MTk3MjYzNzQ0OH0.dChUkYlKEC9yvDxHEYC_D8Gi-fa2x2_H1pY4II25BUo'
  const supabase = createClient(supabaseUrl, supabaseKey)
  
  const [canciones, setCanciones] = React.useState([])
  const [logged, setLogged] = React.useState(false)

  useEffect(() => {
    async function getCanciones(){
      let { data: songs, error } = await supabase
      .from('songs')
      .select('*')
      if(error)
        console.log(error)
      else{
        setCanciones(songs)
        console.log(songs)
      }
    }
    getCanciones()   
  }, [])
  
  async function handleLogin(userInput, pass){
    
  }

  async function handleRegister(userInput, pass){
    
  }

  return (
    <div className="App col">
      <Header />
      <Content songs={canciones} setSongs={setCanciones} logged={logged} db={supabase}/>
      <Footer handleLogin={handleLogin} handleRegister={handleRegister}/>
    </div>
  )
}

export default App
