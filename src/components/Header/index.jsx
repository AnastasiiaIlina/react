import React from 'react';
import './Header.css';

class Header extends React.Component {
    render(){
        const { text } = this.props;
        return(
            <header className="Header">
                <div className="Header_logo">
                    { this.props.children }
                </div>
                <h1 className="Header_text">{ text }</h1>
            </header> 
        )
      

       
       
    
    }
}

export default Header;