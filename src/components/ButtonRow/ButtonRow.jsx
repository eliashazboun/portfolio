import React from 'react'
import { Link } from 'react-scroll'

const ButtonRow = ({items, color,scroll,onClick}) => {

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }
  return (
    <div className={color ? 'buttonrow-i row pad-b4' : 'buttonrow row pad-b4'}>
      {items.map((item,index) => {
        if(typeof item === 'object'){
          return <button key={index} onClick={() => openInNewTab(Object.values(item)[0])} className='btn-row-item '>{Object.keys(item)[0]}</button>
        }else if(scroll){
          return (
            <Link spy={false} smooth={true} to={item.toLowerCase()}>
              <button key={index} className='btn-row-item '>{item}</button>
            </Link>
          )

        }
        else{
          return <button key={index} onClick={onClick} className='btn-row-item '>{item}</button>
        }
      })}
    </div>
  )
}

export default ButtonRow