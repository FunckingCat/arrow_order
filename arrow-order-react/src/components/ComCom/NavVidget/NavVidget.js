import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './NavVidget.scss';
import {goTo} from '../../../actions/historyActions';

class NavVidget extends Component {

    handaleClick = (title) => {
        this.props.goTo(title)
    }

    renderCrumbs = (handaleClick) => {
        let links = this.props.tree.map((item) => {
            let {title, link} = item;
            if(title === 'Меню'){return NaN}
            return <span key={title} onClick = {
                () => {handaleClick(title)}
            }><Link to={link} >{title}</Link></span>
        })

        let result = [];
        let i;
        i = links.length > 4? links.length - 4 : 0;
        for (i; i < links.length; i++){
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
        let crumbs = this.renderCrumbs(this.handaleClick)
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

const mapDispatchToProps = {
    goTo : goTo
}

export default connect(mapStateToProps, mapDispatchToProps)(NavVidget)