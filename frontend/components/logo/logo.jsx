import React from 'react';


const Logo = ({ formType }) => {
  let header;

  if(formType === 'Greeting') {
    header =
      <a className="greeting-logo-header" href="/"><h1>snoozer</h1></a>
  } else {
    header = 
      <a className="logo-header" href="/"><h1>snoozer</h1></a>
  }

  return (
    <div className="logo-container">
      <a className="logo" href="/">
        <img src="https://i.ibb.co/8x6GDxf/og-logo-66ee2f04c1dc70ba8cb5ec9f780990d1.png" alt="" />
      </a>
      {header}
    </div>
  )
}

export default Logo;