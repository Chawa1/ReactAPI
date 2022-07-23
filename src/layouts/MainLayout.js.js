import React from 'react'; 

export default function MainLayout(props) {
  return (
    <div>
    <div>navbar</div>

    {props.children}
  </div>
  )
}
