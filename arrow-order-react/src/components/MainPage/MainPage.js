/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './MainPage.scss';
import RequestService from '../../servises/requestService';

import Hat from '../ComCom/Hat/Hat';
import Image from '../ComCom/ImageComp/Image';
import Error from '../ComCom/ErrorMassage/Error';
import Animator from '../ComCom/Animator/Animator';
import BurgerButton from '../ComCom/Hat/HatComponents/BurgerButton/BurgerButton';
import OrderButton from '../ComCom/Hat/HatComponents/OrderButton/OrderButton';

import ContentBlock from './MainPageComponents/ContnetBlock/ContentBlock';
import Basement from './MainPageComponents/Basement/Basement';

export default class MainPage extends Component {
    RequestService = new RequestService();

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

        for (i; i < data.length; i++){
            content.push(<Image key = {i} src = {`/static/MainPageImages/bg (${i}).png`} alt = 'Arrow Products'/>);
            content.push(<ContentBlock
            key = {i+0.5} 
            header = {data[i].title}
            text = {data[i].text}/>)
        }

        content.push(<Image key = 'last' src = {`/static/MainPageImages/bg(last).png`} alt = 'Arrow Products'/>);

        return content
    }

    render() {

        let content = this.renderContent(this.state.contentBlocks);

        if (this.state.error){
            content = <Error />
        }

        return(
            <div className="mainPage">
                <Animator type = 'fade'>
                    <Hat
                        left = {<BurgerButton/>}
                        right = {<OrderButton/>} />
                </Animator>
                <Animator type = 'fade' timeout = '300'>
                    <div className="parallaxContainer">
                        <div className="underhat" id = 'underHat'>Under Hat</div>
                        {content}
                    <Basement />
                     </div>
                </Animator>
            </div>
        )
    }
}