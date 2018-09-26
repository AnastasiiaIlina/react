import React from 'react';
import './styles.css';
import logoIcon from './assets/logo.png';

class Logo extends React.Component {
    render() {
        return(
            <img className="Logo" src={logoIcon} alt=""/>
        )
    }
}

export default Logo;