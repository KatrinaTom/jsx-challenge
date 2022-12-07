import React from 'react'

const ListItems = (props) => {
  return (
    props.items.map((item, index) => (
        <li key={index}>
            {item}
        </li>
    ))
  )
}

export default ListItems