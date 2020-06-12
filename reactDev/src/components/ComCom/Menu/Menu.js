import React,{Component} from 'react';
import './Menu.scss';

import MenuItem from './MenuItem/MenuItem';
import Animator from '../Animator/Animator';

//Props
//title
//slogan
//menuItems

export default class Menu extends Component {

    renderMenuITems = (menuItems = []) => {
        let renderedItems = [];

        for (let i = 0; i < menuItems.length; i++){
            renderedItems.push(
                <Animator
					key     = {menuItems[i].title} 
					type    = 'fade'
					timeout = {i * 30}>
					<MenuItem
						key   = {menuItems[i].title}
						title = {menuItems[i].title}
						src   = {menuItems[i].image}
						href  = {`${menuItems[i].href}` || '#'}/>
				</Animator>
            )
        }

        return renderedItems
    }

    render(){
		console.log(this.props.menuItems);

        let menuItems = this.renderMenuITems(this.props.menuItems.sort((a,b) => a.priority - b.priority))

        return(
            <section className = 'Menu'> 
				<Animator type = 'fade'>
					<h1>{this.props.title || ''}</h1>
					<h2>{this.props.slogan || ''}</h2>
				</Animator>
				<ul>
					{menuItems}
				</ul>
			</section>
        )
    }
}