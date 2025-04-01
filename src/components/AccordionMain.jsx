import { useState } from 'react'
import AccordionItem from './AccordionItem'
import { data } from '../constants/data'

function AccordionMain() {
  const [open, setOpen] = useState(null)

  const handlerOpen = (id) => setOpen(id === open ? null : id)

  return (
    <div>
      <h2>FAQ</h2>
      {data.map(val => {
        return <AccordionItem key={val.id} val={val} onOpen={handlerOpen} open={open} />
      })}
    </div>
  )
}

export default AccordionMain