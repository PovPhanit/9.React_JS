import React from 'react'

export default function AddCabin() {
  return (
    <div>
        <Button onClick={()=> setShowForm((show)=>!show)}>Add new cabins</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </div>
  )
}
