import React,{Component} from 'react';

export default class CupCake extends Component {

    componentDidMount() {
        document.querySelectorAll('.cupCake *').forEach(element => {
            element.style.transition = '0.2s';
        });
        this.handaleColorChange();
    }

    componentDidUpdate() {
        this.handaleColorChange();
    }

    handaleColorChange = () => {
        let biscuits = document.querySelectorAll('#Biscuit > *')
        let fillings = document.querySelectorAll('#Filling > *')
        let creams = document.querySelectorAll('#Cream > *')

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
            <div className="cupCake">
               <svg width="80%" height="80%" viewBox="0 0 137 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Biscuit">
                    <path id="BiscuitLeft" d="M65.41 143.69V98.69V93.4H8C8.00882 95.2127 8.34768 97.0087 9 98.7C9.11238 99.1206 9.28769 99.5218 9.52 99.89C9.84544 100.579 10.2128 101.246 10.62 101.89C12.0728 104.08 13.2706 106.428 14.19 108.89C19.29 123.4 17.93 143.46 17.93 143.46C17.93 155.53 36.37 165.46 60.08 166.78C60.7622 166.822 61.4459 166.724 62.0887 166.492C62.7316 166.26 63.32 165.898 63.8177 165.43C64.3153 164.961 64.7116 164.396 64.982 163.768C65.2525 163.14 65.3913 162.464 65.39 161.78V143.78L65.41 143.69Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="BiscuitTop" d="M122.79 93.4H65.4V121.78C33.7 121.78 8 109.07 8 93.4C8 77.73 33.7 65 65.4 65C97.1 65 122.79 77.71 122.79 93.4Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="BiscuitRight" d="M112.72 134.46C112.92 123.14 114.56 103.87 122.79 93.4C122.79 93.4 75.9799 79.06 65.3999 88.82V143.43H103.58C105.975 143.43 108.274 142.491 109.983 140.813C111.693 139.136 112.675 136.855 112.72 134.46Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <g id="Filling">
                    <path id="FillingFront" d="M96.0501 87C83.7301 84.94 70.8201 84.23 65.8701 88.8V104.52V116.67L68.3501 116.61L92.9501 117.03C92.9501 117.03 103.21 88.15 96.0501 87Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="FillingTop" d="M97.7 88.08C97.5172 87.7934 97.2755 87.5489 96.9911 87.3627C96.7066 87.1765 96.3858 87.0529 96.05 87C83.73 84.94 70.82 84.23 65.87 88.8V104.52C48.27 104.52 34 97.46 34 88.76C34 80.06 48.27 73 65.87 73C83 73 97 79.7 97.7 88.08Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <g id="Cream">
                    <path id="CreamRight" d="M66.5335 89.26C76.1335 80.4 115.624 91.41 122.804 93.51L123.864 92.51C127.864 88.65 130.494 85.78 131.104 85.05C136.104 79.17 140.624 66.48 122.954 62.62C122.954 62.62 133.824 51.3 120.954 47.44C120.954 47.44 121.854 32.94 108.034 34.75C108.034 34.75 110.974 22.51 94.0335 23.42C94.0335 23.42 94.9435 14.36 82.9335 13.91C70.9235 13.46 73.5035 1 73.5035 1C73.5035 1 58.8435 22.57 58.0935 54.07C58.0935 55.83 58.0435 57.61 58.0935 59.4C58.0638 65.7087 59.0152 71.9836 60.9135 78C62.1554 82.0366 64.0542 85.841 66.5335 89.26Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="CreamLeft" d="M63.8634 121.68C64.3534 121.8 65.2134 122.1 65.7534 122.22C-4.73656 122.22 -7.54656 66.49 10.1334 62.63C10.1334 62.63 -0.746558 51.31 12.1334 47.45C12.1334 47.45 11.2234 32.95 25.0434 34.76C25.0434 34.76 22.1034 22.52 39.0934 23.43C39.0934 23.43 38.1834 14.37 50.1934 13.92C57.4073 8.67853 65.2355 4.33961 73.5034 1C69.5315 7.33144 66.3416 14.1209 64.0034 21.22C63.5194 22.6611 62.5604 23.8951 61.2834 24.72C50.1834 31.72 55.9634 39.72 55.9634 39.72C39.4234 48.08 48.8434 58.04 48.8434 58.04C34.8434 63.83 43.5334 77.04 43.5334 77.04C33.4534 87.7 49.8534 92.49 49.8534 92.49C35.2734 105.73 46.4334 115.25 54.3334 118.09C57.3479 119.68 60.5494 120.886 63.8634 121.68Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="CreamCenter" d="M60.9135 78C62.1408 82.0579 64.0405 85.881 66.5335 89.31L65.7535 122.31C65.2135 122.19 64.3535 121.89 63.8636 121.77C60.5495 120.976 57.348 119.77 54.3336 118.18C46.4336 115.34 35.2735 105.82 49.8535 92.58C49.8535 92.58 33.4536 87.79 43.5436 77.14C43.5436 77.14 34.8235 63.94 48.8535 58.14C48.8535 58.14 39.4335 48.14 55.9736 39.82C55.9736 39.82 50.1936 31.76 61.2936 24.82C62.559 24.0073 63.5137 22.7919 64.0035 21.37C60.3939 31.9084 58.4078 42.9344 58.1136 54.07C58.1136 55.83 58.0536 57.61 58.1136 59.39C58.0747 65.7011 59.0194 71.9797 60.9135 78Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            </div>
        )
    }
}
