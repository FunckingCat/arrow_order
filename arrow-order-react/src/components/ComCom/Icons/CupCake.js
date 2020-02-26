import React,{Component} from 'react';

export default class CupCake extends Component {

    state = {
        biscuitColor : '' ,
        biscuitStroke: '' ,
        fillingColor : '' ,
        fillingStroke: '' ,
        creamColor   : '' ,
        creamStroke  : '' ,
    }

    componentDidMount() {
        this.handaleColorChange();
    }

    componentDidUpdate() {
        this.updateColors();
        this.handaleColorChange();
    }

    compare (o1, o2){
        let c1  = o1.biscuitColor === o2.biscuitColor;
        let c2  = o1.biscuitStroke === o2.biscuitStroke;
        let c3  = o1.fillingColor === o2.fillingColor;
        let c4  = o1.fillingStroke === o2.fillingStroke;
        let c5  = o1.creamColor === o2.creamColor;
        let c6  = o1.creamStroke === o2.creamStroke;
        if (c1&&c2&&c3&&c4&&c5&&c6){
            return false
        }
        return true
    }

    updateColors = () => {
        if (this.compare(this.props, this.state)){
            this.setState({
                biscuitColor : this.props.biscuitColor  ,
                biscuitStroke: this.props.biscuitStroke ,
                fillingColor : this.props.fillingColor  ,
                fillingStroke: this.props.fillingStroke ,
                creamColor   : this.props.creamColor    ,
                creamStroke  : this.props.creamStroke   ,
            })
        }
    }

    handaleColorChange = () => {
        let biscuits = document.querySelectorAll('#Biscuit > *')
        let fillings = document.querySelectorAll('#Filling > *')
        let creams = document.querySelectorAll('#Cream > *')

        for (let item of biscuits){
            item.style.fill = this.state.biscuitColor;
            item.style.stroke = this.state.biscuitStroke;
        }

        for (let item of fillings){
            item.style.fill = this.state.fillingColor;
            item.style.stroke = this.state.fillingStroke;
        }

        for (let item of creams){
            item.style.fill = this.state.creamColor;
            item.style.stroke = this.state.creamStroke;
        }
    }

    render(){
        return(
            <div className="cupCake">
                <svg width="100%" height="100%" viewBox="0 0 137 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="CupCake">
                <g id="Biscuit">
                <path id="BiscuitLeft" d="M67.41 210.69V165.69V160.4H10C10.0088 162.213 10.3477 164.009 11 165.7C11.1124 166.121 11.2877 166.522 11.52 166.89C11.8454 167.579 12.2128 168.246 12.62 168.89C14.0728 171.08 15.2706 173.428 16.19 175.89C21.29 190.4 19.93 210.46 19.93 210.46C19.93 222.53 38.37 232.46 62.08 233.78C62.7622 233.822 63.4459 233.724 64.0887 233.492C64.7316 233.26 65.3201 232.898 65.8177 232.43C66.3153 231.961 66.7116 231.396 66.982 230.768C67.2525 230.14 67.3913 229.464 67.39 228.78V210.78L67.41 210.69Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="BiscuitTop" d="M124.79 160.4H67.4V188.78C35.7 188.78 10 176.07 10 160.4C10 144.73 35.7 132 67.4 132C99.1 132 124.79 144.71 124.79 160.4Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="BiscuitRight" d="M114.72 201.46C114.92 190.14 116.56 170.87 124.79 160.4C124.79 160.4 77.9799 146.06 67.3999 155.82V210.43H105.58C107.975 210.43 110.274 209.491 111.983 207.813C113.693 206.136 114.675 203.855 114.72 201.46Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g id="Filling">
                <path id="FillingFront" d="M98.0501 154C85.7301 151.94 72.8201 151.23 67.8701 155.8V171.52V183.67L70.3501 183.61L94.9501 184.03C94.9501 184.03 105.21 155.15 98.0501 154Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="FillingTop" d="M99.7 155.08C99.5172 154.793 99.2755 154.549 98.9911 154.363C98.7066 154.177 98.3858 154.053 98.05 154C85.73 151.94 72.82 151.23 67.87 155.8V171.52C50.27 171.52 36 164.46 36 155.76C36 147.06 50.27 140 67.87 140C85 140 99 146.7 99.7 155.08Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g id="Cream">
                <path id="CreamRight" d="M66.5335 89.26C76.1335 80.4 115.624 91.41 122.804 93.51L123.864 92.51C127.864 88.65 130.494 85.78 131.104 85.05C136.104 79.17 140.624 66.48 122.954 62.62C122.954 62.62 133.824 51.3 120.954 47.44C120.954 47.44 121.854 32.94 108.034 34.75C108.034 34.75 110.974 22.51 94.0335 23.42C94.0335 23.42 94.9435 14.36 82.9335 13.91C70.9235 13.46 73.5035 1 73.5035 1C73.5035 1 58.8435 22.57 58.0935 54.07C58.0935 55.83 58.0435 57.61 58.0935 59.4C58.0638 65.7087 59.0152 71.9836 60.9135 78C62.1554 82.0366 64.0542 85.841 66.5335 89.26Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="CreamLeft" d="M63.8634 121.68C64.3534 121.8 65.2134 122.1 65.7534 122.22C-4.73656 122.22 -7.54656 66.49 10.1334 62.63C10.1334 62.63 -0.746558 51.31 12.1334 47.45C12.1334 47.45 11.2234 32.95 25.0434 34.76C25.0434 34.76 22.1034 22.52 39.0934 23.43C39.0934 23.43 38.1834 14.37 50.1934 13.92C57.4073 8.67853 65.2355 4.33961 73.5034 1C69.5315 7.33144 66.3416 14.1209 64.0034 21.22C63.5194 22.6611 62.5604 23.8951 61.2834 24.72V24.72C50.1834 31.72 55.9634 39.72 55.9634 39.72C39.4234 48.08 48.8434 58.04 48.8434 58.04C34.8434 63.83 43.5334 77.04 43.5334 77.04C33.4534 87.7 49.8534 92.49 49.8534 92.49C35.2734 105.73 46.4334 115.25 54.3334 118.09C57.3479 119.68 60.5494 120.886 63.8634 121.68Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="CreamCenter" d="M60.9135 78C62.1408 82.0579 64.0405 85.881 66.5335 89.31L65.7535 122.31C65.2135 122.19 64.3536 121.89 63.8636 121.77C60.5495 120.976 57.348 119.77 54.3336 118.18C46.4336 115.34 35.2735 105.82 49.8535 92.58C49.8535 92.58 33.4536 87.79 43.5436 77.14C43.5436 77.14 34.8235 63.94 48.8535 58.14C48.8535 58.14 39.4335 48.14 55.9736 39.82C55.9736 39.82 50.1936 31.76 61.2936 24.82C62.559 24.0073 63.5137 22.7919 64.0035 21.37C60.3939 31.9084 58.4078 42.9344 58.1136 54.07C58.1136 55.83 58.0536 57.61 58.1136 59.39C58.0747 65.7011 59.0194 71.9797 60.9135 78V78Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                </g>
                </svg>
            </div>
        )
    }
}
