import React from 'react'

const LinkTo = (props) => {
  return (
    <a external className={ (() => props.external? props.external : "internal") } href={props.href}> {props.text}</a>
  )
}

export default LinkTo

