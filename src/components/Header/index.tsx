import React from 'react';
import Typography from '../common/Typography';
import '../../styles/layout/header.scss'

const Header = () => {
  return (
        <div className='u-container c-header'>
            <Typography variant='h1' font='primary' weight='bold'>
                Exportadora internacional de pescado fresco y congelado 
            </Typography>
            <Typography variant='normal' font='primary' weight='regular'>
            Nuestro objetivo es ofrecer una amplia variedad de especies marinas. Actualmente exportamos a numerosos países de América y Europa.
            </Typography>
        </div>
  )
}

export default Header