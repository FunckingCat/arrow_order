import React, { Component } from 'react';

export default class CupCake extends Component {

    state = {
        color : this.props.color,
        stroke : this.props.stroke,
    }

    componentDidMount() {
        this.handaleColorChange();
    }

    componentDidUpdate() {
        this.handaleColorChange();
    }

    handaleColorChange = () => {
        let top = document.querySelector('#Biscuit > #Top');
        let front = document.querySelector('#Biscuit > #Front');
        let line = document.querySelector('#Biscuit > #Line');

        top.style.fill = this.state.color;
        top.style.stroke = this.state.stroke;
        front.style.fill = this.state.color;
        front.style.stroke = this.state.stroke;
        line.style.fill = this.state.stroke;
    }

    render() {
        return (
            <div className="biscuit">
                <svg width="100%" height="100%" viewBox="0 0 196 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Biscuit">
                        <path id="Top" strokeWidth="3" d="M98.1157 55.5211C151.751 55.5211 195.231 43.3161 195.231 28.2605C195.231 13.205 151.751 1 98.1157 1C44.4802 1 1 13.205 1 28.2605C1 43.3161 44.4802 55.5211 98.1157 55.5211Z" fill="white" stroke="black" strokeMiterlimit="10" />
                        <path id="Front" strokeWidth="3" d="M1 71.3595C1 86.3528 44.4806 98.62 98.1157 98.62C151.751 98.62 195.231 86.3528 195.231 71.3595V28.2605C195.231 43.2538 151.751 55.5211 98.1157 55.5211C44.4806 55.5211 1 43.3084 1 28.2605V71.3595Z" fill="white" stroke="black" strokeMiterlimit="10" />
                        <path id="Line" strokeWidth="3" d="M188.184 23.1356C188.198 25.2586 187.534 27.3306 186.29 29.0511C185.06 30.7804 183.555 32.2955 181.833 33.5355C178.385 35.9506 174.643 37.9157 170.697 39.3828C162.804 42.2509 154.651 44.3462 146.353 45.6391C138.084 46.9421 129.755 47.8247 121.396 48.2834C113.045 48.7468 104.69 48.8468 96.3301 48.5833C100.501 48.4061 104.672 48.297 108.843 48.0381C113.014 47.7791 117.171 47.5746 121.328 47.2339C129.629 46.566 137.93 45.6937 146.135 44.2897C154.36 43.0584 162.458 41.0877 170.329 38.4015C174.256 37.0608 177.997 35.2289 181.465 32.9494C183.189 31.8358 184.726 30.4556 186.017 28.8603C187.307 27.2182 188.064 25.2204 188.184 23.1356V23.1356Z" fill="black" />
                    </g>
                </svg>
            </div>
        )
    }
}
