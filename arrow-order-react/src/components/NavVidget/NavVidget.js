import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './NavVidget.scss';
import {goTo} from '../../actions/historyActions';

class NavVidget extends Component {

    renderCrumbs = () => {
        let links = this.props.tree.map((item) => {
            let {title, link} = item;
            return <span key={title}><Link to={link}>{title}</Link></span>
        })

        let result = [];
        for (let i=0; i < links.length; i++){
            if (i !== links.length-1){
                result.push(links[i]);
                result.push(<span key = {i}>></span>)
            } else {
                result.push(links[i]);
            }
        }
        return result
    }

    render() {

        let crumbs = this.renderCrumbs()
        return(
            <section className="NavVidget">
                {crumbs}
            </section>
        )
    }
}

const mapStateToProps = function(state){
    return{
        tree : state.history.tree
    }
}

const mapDispatchToPRops = {
    goTo : goTo
}

export default connect(mapStateToProps, mapDispatchToPRops)(NavVidget)