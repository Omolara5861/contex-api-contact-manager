import React from 'react'

export default function About(props: any) {
  return (
    <div>
        <h1 className='display-4'>{props.match.params.name}</h1>
        <p className="lead">A simple app to manage contact lists. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde vel at, magni dicta doloribus reprehenderit modi ad non facilis.</p>
        <p className="text-secondary">Version 1.0.0</p>
    </div>
  )
}
