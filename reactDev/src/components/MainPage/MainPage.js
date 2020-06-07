/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MainPage.scss';
import RequestService from '../../servises/requestService';

import Hat          from '../ComCom/HatAndNav/Hat/Hat';
import Image        from '../ComCom/ImageComp/Image';
import Error        from '../ComCom/ErrorMassage/Error';
import Animator     from '../ComCom/Animator/Animator';
import BurgerButton from '../ComCom/Buttons/BurgerButton/BurgerButton';
import OrderButton  from '../ComCom/Buttons/OrderButton/OrderButton';

import ContentBlock from './MainPageComponents/ContnetBlock/ContentBlock';
import Basement     from './MainPageComponents/Basement/Basement';

class MainPage extends Component {
    RequestService = new RequestService(this.props.domen);

    state = {
        contentBlocks : [],
        error : false
    }

    componentDidMount() {
        this.updateContentBlocks();
    }

    updateContentBlocks() {
        this.RequestService.getMainPageBlocksContents()
        .then(this.onContentLoaded)
        .catch(this.onError)
    }

    onContentLoaded = (content) => {
        this.setState({
            contentBlocks : content
        })
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderContent(data) {

        let content = [];
        let i =0;
        
        let mainImage = data.filter((item) => item.title === 'Главная картинка').map((item) => item.image)[0];
        content.push(<Image key = 'first' src = {mainImage} alt = 'Arrow Products'/>);

        data = data.filter(item => item.title !== 'Главная картинка').sort((a, b) => a.priority - b.priority)

        for (i; i < data.length; i++){
            content.push(<ContentBlock
            key = {i+0.5} 
            header = {data[i].title}
            text = {data[i].text}
            href = {data[i].href}
            hrefText = {data[i].href_text}/>);
            content.push(<Image key = {i + data[i].title} src = {data[i].image} alt = 'Arrow Products'/>);
        }

        return content
    }

    render() {

        let content = this.renderContent(this.state.contentBlocks);

        if (this.state.error){
            return <Error />
        }

        return(
            <div className="mainPage">
                <Animator type = 'fade'>
                    <Hat
                        left = {<BurgerButton/>}
                        right = {<OrderButton link = '/Products'/>} />
                </Animator>
                <Animator type = 'fade' timeout = '300'>
                    <div className="parallaxContainer">
                        <div className="underhat" id = 'underHat'></div>
                        {content}
                    <Basement />
                     </div>
                </Animator>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		domen : state.domen
	}
}

export default connect(mapStateToProps)(MainPage)