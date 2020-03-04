import React,{Component} from 'react';
import './CakeOrderDetails.scss'; 
import {connect} from 'react-redux'; 

class CakeOrderDetails extends Component {

    render(){
        return(
            <div className="cakeOrderDetails">
                Cake Order Details
            </div>
        )
    }
} 

 const mapStateToProps = (state) => {
    return({
        
    })
} 

const mapDispatchToProps = {

} 

export default connect(mapStateToProps, mapDispatchToProps)(CakeOrderDetails)
