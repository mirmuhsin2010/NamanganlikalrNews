import React from 'react'
import { useParams } from 'react-router-dom'
import { vmiredata } from '../store/data'

const Vmiredata = () => {

    const { id } = useParams()
  
    const data = vmiredata.find(e => e.id === parseInt(id))

  return (
    <div>
      <div>
        <h2>{data.title}</h2>
      </div>
    </div>
  )
}

export default Vmiredata
