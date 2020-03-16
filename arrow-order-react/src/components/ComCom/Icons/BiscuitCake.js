import React,{Component} from 'react';

export default class BiscuitCake extends Component {

    componentDidMount() {
        document.querySelectorAll('.biscuitCake *').forEach(element => {
            element.style.transition = '0.2s';
        });
        this.handaleColorChange();
    }

    componentDidUpdate() {
        this.handaleColorChange();
    }

    handaleColorChange = () => {
        let biscuits = document.querySelectorAll('#Biscuit1 > *, #Biscuit2 > *, #Biscuit3 > *')
        let fillings = document.querySelectorAll('#Filling1 > *, #Filling2 > *')
        let creams = document.querySelectorAll('#Cream3 > *, #Cream1 > *, #Cream2 > *')
        for (let item of biscuits){
            item.style.fill = this.props.biscuitColor;
            item.style.stroke = this.props.biscuitStroke;
        }

        for (let item of fillings){
            item.style.fill = this.props.fillingColor;
            item.style.stroke = this.props.fillingStroke;
        }

        for (let item of creams){
            item.style.fill = this.props.creamColor;
            item.style.stroke = this.props.creamStroke;
        }
    }

    render(){
        return(
            <div className="biscuitCake">
                <svg width="100%" height="100%" viewBox="0 0 303 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Cream1">
                        <path id="Vector" d="M14.59 45.45C7.22 51.87 2.27 44.24 1 74C1.15 86 3.22 166.92 3.22 166.92C3.22 179.49 9.54 187.92 25.07 197.65C32.07 202.03 43.14 206.2 52.54 209.65V121.57L69 99.12L14.59 45.45Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_2" d="M287.91 45.45C295.29 51.87 302.91 51.28 301.82 74.18C301.82 74.08 299.29 166.9 299.29 166.9C299.29 179.47 292.79 186.58 277.29 196.26C268.628 201.559 259.492 206.041 250 209.65V121.57L233.53 99.12L287.91 45.45Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_3" d="M300.71 65C300.71 72 297.96 78.81 292.91 85.13C287.28 92.18 278.75 98.68 267.91 104.35C261.972 107.441 255.839 110.143 249.55 112.44L156.82 80.75L151.25 78.86L145.7 80.75L53 112.43C50.55 111.52 48.18 110.59 45.87 109.63C45.06 109.29 44.24 108.93 43.44 108.57C41.9867 107.943 40.57 107.297 39.19 106.63L38.96 106.52C37.5133 105.853 36.0933 105.14 34.7 104.38H34.6C32.6 103.32 30.6 102.23 28.74 101.09C28.1 100.72 27.48 100.33 26.87 99.93C25.64 99.16 24.45 98.38 23.3 97.57C21.58 96.3767 19.9533 95.15 18.42 93.89C18.3628 93.8554 18.3092 93.8152 18.26 93.77C16.3475 92.2108 14.5278 90.5413 12.81 88.77C12.39 88.3367 11.98 87.8967 11.58 87.45C10.9133 86.7033 10.2467 85.9433 9.58001 85.17L9.26001 84.77C8.91001 84.32 8.57001 83.87 8.26001 83.41C7.95001 82.95 7.65001 82.54 7.35001 82.11L7.28001 81.99L6.43001 80.65C6.15001 80.19 5.88001 79.71 5.63001 79.24C5.38001 78.77 5.13001 78.3 4.89001 77.84C4.65001 77.38 4.40001 76.84 4.17001 76.29C3.94001 75.74 3.83001 75.45 3.67001 75.03C3.66706 75.0001 3.66706 74.9699 3.67001 74.94C3.52001 74.54 3.39001 74.15 3.25001 73.75C3.25001 73.68 3.25001 73.61 3.18001 73.53C3.06667 73.19 2.96667 72.8567 2.88001 72.53C2.88001 72.53 2.88001 72.53 2.88001 72.47C2.81001 72.21 2.75001 71.95 2.68001 71.69L2.56001 71.19C2.44001 70.66 2.34001 70.12 2.25001 69.59C2.18744 69.3981 2.1439 69.2004 2.12001 69C2.07001 68.74 2.04001 68.47 2.00001 68.21C1.96001 67.95 1.92001 67.5 1.90001 67.15C1.88001 66.8 1.84001 66.4 1.83001 66C1.82001 65.6 1.83001 65.28 1.83001 64.93C1.83001 30.15 68.74 1.92999 151.29 1.92999C233.84 1.92999 300.71 30.19 300.71 65Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_4" d="M151.25 78.86L52.54 112.43V121.57V209.64H56.54V120.22L151.25 88.05V78.86Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_5" d="M151.25 78.86L249.97 112.43V121.57V209.65H246.02L245.97 120.22L151.25 88.05V78.86Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <g id="Biscuit3">
                        <path id="Vector_6" d="M246.02 193.24V209.65L222.66 201.67L151.19 177.29L151.25 160.91L246.02 193.24Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_7" d="M151.25 160.91L151.19 177.28L79.86 201.66L56.54 209.64V193.27L151.25 160.91Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <g id="Cream2">
                        <path id="Vector_8" d="M56.54 172.6L78.57 165.09V185.67L56.54 193.01V172.6Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_9" d="M246.02 172.61L223.66 164.97V185.55L246.02 193.02V172.61Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <g id="Filling2">
                        <path id="Vector_10" d="M223.66 164.97V185.55L151.19 160.81L151.25 140.25L223.66 164.97Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_11" d="M78.5701 165.09V185.67L151.03 160.81L150.97 140.25L78.5701 165.09Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <g id="Biscuit2">
                        <path id="Vector_12" d="M246.02 156.21V172.61L222.66 164.63L151.19 140.25L151.25 123.87L246.02 156.21Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_13" d="M151.25 123.87L151.19 140.24L79.86 164.62L56.54 172.6V156.23L151.25 123.87Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <g id="Cream2">
                        <path id="Vector_14" d="M56.54 135.78L78.57 128.27V148.85L56.54 156.19V135.78Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_15" d="M246.02 135.79L223.66 128.15V148.73L246.02 156.2V135.79Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <g id="Filling1">
                        <path id="Vector_16" d="M223.66 128.15V148.73L151.19 123.99L151.25 103.44L223.66 128.15Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_17" d="M78.5701 128.27V148.85L151.03 123.99L150.97 103.44L78.5701 128.27Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <g id="Biscuit1">
                        <path id="Vector_18" d="M246.02 119.39V135.79L222.66 127.82L151.19 103.44L151.25 87.05L246.02 119.39Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path id="Vector_19" d="M151.25 87.05L151.19 103.42L79.86 127.81L56.54 135.78V119.41L151.25 87.05Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
            </div>
        )
    }
}
