import React from 'react'

import Table from './Table'
import Input from './Input'

function Content(props) {
  return (
    <div className='cnt'>
      {props.logged?
        null:
        <div className='col'>
          <Table songs={props.songs}></Table>
          <Input db={props.db} setSongs={props.setSongs}/>
        </div>
        }
    </div>    
  )
}

export default Content