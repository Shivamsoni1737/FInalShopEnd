import React,{useState} from 'react'

const Inventory = () => {

    const [items, setItems] = useState([
        {
            name: "M416",
            bullet_type : "5.56 mm",
        },
        {
            name: "AKM",
            bullet_type : "7.95 mm",
        }
    ])

  return (
    <div className='p-4'>
      {items.map((item) => (
        <>
            <div>{item.name}</div>
            <div>{item.bullet_type}</div>
        </>
      ))}
    </div>
  )
}

export default Inventory
