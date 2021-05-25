import React from 'react'
import './button.css'
import PropTypes from 'prop-types'



class Button extends React.Component{
   state = {
      count: 0,
   }

   

   onClick = () => {
      this.setState({
         count: this.state.count + 1,
      })
   }


   render(){
      let className = `button button__${this.props.type} button__${this.props.size}`;

      return(
         <button className={className} onClick={this.onClick}>
            {this.props.label}
            {this.state.count}
         </button>
      )
   }
}

Button.defaultProps = {
   size:'medium'
}

Button.propTypes = {
   label: PropTypes.string,
   size: PropTypes.oneOf(['big','medium','small']),
   type: PropTypes.oneOf(['secondary','primary']).isRequired
}


export default Button