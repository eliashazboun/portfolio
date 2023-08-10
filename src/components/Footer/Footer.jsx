import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-scroll';

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }

  return (
    <div className='footer'>
      <div className="display-f flex-d-col justify-center align-center">
      <Link  to='hero' spy={false} smooth={true} offset={0} >
      <ArrowDropUpIcon className='icon move' style={{fontSize:'5rem', color:'white'}}/> 

      </Link>

        <div className="items display-f gap-3">
          <DescriptionIcon onClick={() => openInNewTab('https://drive.google.com/file/d/1RG-6C1GRBk6he1RJ3fjGe7ruhQikC2--/view?usp=sharing')} className='icon move' style={{color:'white',fontSize:'3rem'}}/>
          <GitHubIcon onClick={() => openInNewTab('https://github.com/eliashazboun')} className='icon move' style={{color:'white',fontSize:'3rem'}}/>
          <LinkedInIcon onClick={() => openInNewTab('https://www.linkedin.com/in/elias-hazboun-5b6a0717a/')} className='icon move' style={{color:'white',fontSize:'3rem'}}/>
        </div>
      </div>
    </div>
  )
}

export default Footer