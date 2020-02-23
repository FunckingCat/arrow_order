import React,{Component} from 'react';
import './BiscuitCake.scss'; 

export default class BiscuitCake extends Component {

    state = {
        biscuitColor : this.props.BiscuitColor   || '#fff' ,
        biscuitStroke: this.props.biscuitStroke  || '#000' ,
        fillingColor : this.props.FillingColor   || '#fff' ,
        fillingStroke: this.props.fillingStroke  || '#000' ,
        creamColor   : this.props.creamColor     || '#fff' ,
        creamStroke  : this.props.creamStroke    || '#000' ,
        prevColors   : [],
    }

    componentDidUpdate() {
        this.handaleColorChange();
    }

    handaleColorChange = () => {
        let biscuits = document.querySelectorAll('#Biscuit1 > *, #Biscuit2 > *, #Biscuit3 > *')
        let treeStrangeThings = document.querySelectorAll('#Vector_23, #Vector_24, #Vector_25');
        let fillings = document.querySelectorAll('#Filling1 > #Filling_1 > *, #Filling2 > #Filling_2 > *')
        let creams = document.querySelectorAll('#Cream_3 > *, #Filling1 > #Cream_1 > *, #Filling2 > #Cream_2 > *')
        console.log(treeStrangeThings)
        for (let item of biscuits){
            item.style.fill = this.state.biscuitColor;
            item.style.stroke = this.state.biscuitStroke;
        }

        for (let item of treeStrangeThings){
            item.style.fill = this.state.biscuitStroke;
            item.style.stroke = 'transparent';
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
            <div className="biscuitCake">
                <svg width="100%" height="100%" viewBox="0 0 114 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="BiscuitCake">
                <g id="Biscuit3">
                <path id="Vector" d="M111.74 121.891L111.39 98.3813L54.54 149.501C54.0609 149.935 53.678 150.464 53.4162 151.055C53.1544 151.646 53.0194 152.285 53.02 152.931V175.931C53.0208 175.99 53.0389 176.047 53.0719 176.096C53.1049 176.144 53.1515 176.182 53.2058 176.205C53.2601 176.227 53.3197 176.233 53.3774 176.222C53.435 176.21 53.4881 176.182 53.53 176.141L110.53 124.741C111.294 123.988 111.729 122.964 111.74 121.891V121.891Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_2" d="M110.15 97.0113L5.74996 112.111C5.35633 112.163 4.97684 112.292 4.6335 112.491C4.29016 112.691 3.98979 112.956 3.74981 113.272C3.50983 113.589 3.335 113.949 3.23547 114.334C3.13593 114.718 3.11367 115.118 3.16996 115.511C4.16996 123.341 10.73 144.211 52.5 150.761C52.6598 150.785 52.8229 150.774 52.9782 150.729C53.1334 150.684 53.2773 150.606 53.4 150.501L111.03 98.8813C111.202 98.726 111.319 98.5196 111.365 98.2925C111.41 98.0654 111.382 97.8297 111.283 97.6201C111.184 97.4106 111.021 97.2383 110.817 97.1286C110.613 97.019 110.379 96.9779 110.15 97.0113V97.0113Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_3" d="M52.92 152.471C52.92 160.111 53.02 169.051 53.02 175.411C53.0137 175.559 52.9749 175.702 52.9064 175.833C52.838 175.963 52.7416 176.077 52.624 176.166C52.5065 176.255 52.3708 176.317 52.2266 176.347C52.0824 176.377 51.9334 176.375 51.79 176.341C45.25 174.521 13.7 170.951 4.53 146.761C3.57256 144.148 3.05554 141.394 3 138.611L3.09 114.391C3.76 121.521 9.25 143.251 51.05 150.251C51.5763 150.335 52.0548 150.606 52.3981 151.013C52.7414 151.421 52.9267 151.938 52.92 152.471V152.471Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                </g>
                <g id="Filling2">
                <g id="Filling_2">
                <path id="Vector_4" d="M110.02 82.0097L5.62013 97.1097C5.22561 97.16 4.84504 97.2883 4.50055 97.4871C4.15607 97.6859 3.85455 97.9512 3.61354 98.2676C3.37253 98.584 3.19684 98.9451 3.09668 99.33C2.99652 99.7149 2.9739 100.116 3.03013 100.51C4.03013 108.34 10.5901 129.21 52.3701 135.76C52.5285 135.784 52.6901 135.773 52.8439 135.728C52.9976 135.683 53.1397 135.605 53.2601 135.5L110.89 83.8797C111.061 83.7248 111.177 83.5195 111.223 83.2936C111.268 83.0678 111.241 82.8333 111.143 82.6244C111.046 82.4155 110.885 82.2432 110.683 82.1326C110.481 82.022 110.248 81.9789 110.02 82.0097Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_5" d="M111.26 83.1696V98.3796L53.2603 150V135.5L111.26 83.1696Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_6" d="M52.37 135.76C24.26 131.35 12.09 120.47 6.83003 111.43C4.84122 108.083 3.54872 104.368 3.03003 100.51V115.01C4.03003 122.84 10.59 143.71 52.37 150.26C52.5284 150.284 52.69 150.273 52.8438 150.228C52.9975 150.183 53.1396 150.105 53.26 150V135.5C53.1396 135.605 52.9975 135.683 52.8438 135.728C52.69 135.773 52.5284 135.784 52.37 135.76V135.76Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                </g>
                <g id="Cream_2">
                <path id="Vector_7" d="M53.5201 135.25L53.2601 135.48C53.1621 135.562 53.0504 135.626 52.9301 135.67C52.7523 135.74 52.5588 135.761 52.3701 135.73L50.4401 135.41C48.9301 135.15 47.4401 134.87 46.0501 134.58C45.2501 134.41 44.4701 134.24 43.7101 134.06L42.5601 133.79C41.8001 133.6 41.0601 133.42 40.3301 133.22C39.6001 133.02 38.9601 132.85 38.3301 132.66L37.1701 132.31L36.1701 131.99L34.1701 131.34L33.1701 131C32.1701 130.66 31.3001 130.31 30.4001 129.95L29.5201 129.59C28.9401 129.35 28.3701 129.1 27.8101 128.85L26.9901 128.48L25.3901 127.71C24.6101 127.32 23.8601 126.92 23.1301 126.52L22.4101 126.12C21.9101 125.83 21.4101 125.54 20.9301 125.24C20.4501 124.94 20.1001 124.73 19.7001 124.47C19.3001 124.21 18.8601 123.91 18.4501 123.62C18.0401 123.33 17.6401 123.06 17.2601 122.77L16.1301 121.91C14.8208 120.879 13.5751 119.771 12.4001 118.59L11.7601 117.93L11.1601 117.25C10.5501 116.59 10.0001 115.93 9.49013 115.25C9.32013 115.04 9.15013 114.82 8.99013 114.6C8.66013 114.17 8.35013 113.73 8.07013 113.3C7.92013 113.09 7.78013 112.88 7.64013 112.66C7.36013 112.23 7.10013 111.81 6.86013 111.39C6.62013 110.98 6.40013 110.58 6.20013 110.18L5.88013 109.57C5.68013 109.17 5.49013 108.77 5.32013 108.37L5.06013 107.78C4.67962 106.871 4.34585 105.943 4.06013 105C3.90013 104.47 3.76013 104 3.64013 103.48C3.42619 102.615 3.25598 101.741 3.13013 100.86C3.13013 100.73 3.13013 100.6 3.13013 100.48C3.07239 100.086 3.09358 99.6846 3.19244 99.2991C3.2913 98.9137 3.46588 98.5517 3.70599 98.2343C3.9461 97.917 4.24695 97.6506 4.59103 97.4506C4.9351 97.2507 5.31552 97.1212 5.71013 97.0697L13.9901 95.8697C16.7201 105.36 26.8001 121.25 62.3201 126.84C62.5401 126.87 54.9101 134.03 53.5201 135.25Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_8" d="M62.8803 126.9L63.5703 140.81L53.2603 149.99V135.49L53.5203 135.26L62.8803 126.9Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_9" d="M52.37 135.76C24.26 131.35 12.09 120.47 6.83003 111.43C4.84122 108.083 3.54872 104.368 3.03003 100.51V115.01C4.03003 122.84 10.59 143.71 52.37 150.26C52.5284 150.284 52.69 150.273 52.8438 150.228C52.9975 150.183 53.1396 150.105 53.26 150V135.5C53.1396 135.605 52.9975 135.683 52.8438 135.728C52.69 135.773 52.5284 135.784 52.37 135.76V135.76Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                </g>
                </g>
                <g id="Biscuit2">
                <path id="Vector_10" d="M111.72 80.51L111.37 57L54.52 108.12C54.0408 108.554 53.658 109.083 53.3962 109.674C53.1343 110.265 52.9994 110.904 53 111.55V134.55C53.0008 134.609 53.0189 134.666 53.0519 134.714C53.0849 134.763 53.1314 134.801 53.1857 134.823C53.24 134.846 53.2997 134.851 53.3574 134.84C53.415 134.829 53.4681 134.801 53.51 134.76L110.51 83.36C111.274 82.6071 111.709 81.5825 111.72 80.51V80.51Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_11" d="M110.15 57.0113L5.74996 72.1113C5.35633 72.1629 4.97684 72.2921 4.6335 72.4914C4.29016 72.6907 3.98979 72.9562 3.74981 73.2724C3.50983 73.5887 3.335 73.9494 3.23547 74.3338C3.13593 74.7181 3.11367 75.1183 3.16996 75.5113C4.16996 83.3413 10.73 104.211 52.5 110.761C52.6598 110.785 52.8229 110.774 52.9782 110.729C53.1334 110.684 53.2773 110.606 53.4 110.501L111.03 58.8813C111.202 58.726 111.319 58.5196 111.365 58.2925C111.41 58.0654 111.382 57.8297 111.283 57.6201C111.184 57.4106 111.021 57.2383 110.817 57.1286C110.613 57.019 110.379 56.9779 110.15 57.0113V57.0113Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_12" d="M52.92 112.471C52.92 120.111 53.02 129.051 53.02 135.411C53.0137 135.559 52.9749 135.702 52.9064 135.833C52.838 135.963 52.7416 136.077 52.624 136.166C52.5065 136.255 52.3708 136.317 52.2266 136.347C52.0824 136.377 51.9334 136.375 51.79 136.341C45.25 134.521 13.7 130.951 4.53 106.761C3.57256 104.148 3.05554 101.394 3 98.6113L3.09 74.3913C3.76 81.5213 9.25 103.251 51.05 110.251C51.5763 110.335 52.0548 110.606 52.3981 111.013C52.7414 111.421 52.9267 111.938 52.92 112.471V112.471Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                </g>
                <g id="Filling1">
                <g id="Filling_1">
                <path id="Vector_13" d="M110.02 42.0097L5.62013 57.1097C5.22561 57.16 4.84504 57.2883 4.50055 57.4871C4.15607 57.6859 3.85455 57.9512 3.61354 58.2676C3.37253 58.584 3.19684 58.9451 3.09668 59.33C2.99652 59.7149 2.9739 60.1159 3.03013 60.5097C4.03013 68.3397 10.5901 89.2097 52.3701 95.7597C52.5285 95.7837 52.6901 95.7729 52.8439 95.728C52.9976 95.6831 53.1397 95.6052 53.2601 95.4997L110.89 43.8797C111.061 43.7248 111.177 43.5195 111.223 43.2936C111.268 43.0678 111.241 42.8333 111.143 42.6244C111.046 42.4155 110.885 42.2432 110.683 42.1326C110.481 42.022 110.248 41.9789 110.02 42.0097Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_14" d="M111.26 43.1696V58.3796L53.2603 110V95.4996L111.26 43.1696Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_15" d="M52.37 95.7596C24.26 91.3496 12.09 80.4696 6.83003 71.4296C4.84122 68.0825 3.54872 64.3683 3.03003 60.5096V75.0096C4.03003 82.8396 10.59 103.71 52.37 110.26C52.5284 110.284 52.69 110.273 52.8438 110.228C52.9975 110.183 53.1396 110.105 53.26 110V95.4996C53.1396 95.6052 52.9975 95.6831 52.8438 95.728C52.69 95.7729 52.5284 95.7837 52.37 95.7596V95.7596Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                </g>
                <g id="Cream_1">
                <path id="Vector_16" d="M53.5201 95.2497L53.2601 95.4797C53.1621 95.5619 53.0504 95.6262 52.9301 95.6697C52.7523 95.7398 52.5588 95.7605 52.3701 95.7297L50.4401 95.4097C48.9301 95.1497 47.4401 94.8697 46.0501 94.5797C45.2501 94.4097 44.4701 94.2397 43.7101 94.0597L42.5601 93.7897C41.8001 93.5997 41.0601 93.4197 40.3301 93.2197C39.6001 93.0197 38.9601 92.8497 38.3301 92.6597L37.1701 92.3097L36.1701 91.9897L34.1701 91.3397L33.1701 90.9997C32.1701 90.6597 31.3001 90.3097 30.4001 89.9497L29.5201 89.5897C28.9401 89.3497 28.3701 89.0997 27.8101 88.8497L26.9901 88.4797L25.3901 87.7097C24.6101 87.3197 23.8601 86.9197 23.1301 86.5197L22.4101 86.1197C21.9101 85.8297 21.4101 85.5397 20.9301 85.2397C20.4501 84.9397 20.1001 84.7297 19.7001 84.4697C19.3001 84.2097 18.8601 83.9097 18.4501 83.6197C18.0401 83.3297 17.6401 83.0597 17.2601 82.7697L16.1301 81.9097C14.8208 80.8795 13.5751 79.7708 12.4001 78.5897L11.7601 77.9297L11.1601 77.2497C10.5501 76.5897 10.0001 75.9297 9.49013 75.2497C9.32013 75.0397 9.15013 74.8197 8.99013 74.5997C8.66013 74.1697 8.35013 73.7297 8.07013 73.2997C7.92013 73.0897 7.78013 72.8797 7.64013 72.6597C7.36013 72.2297 7.10013 71.8097 6.86013 71.3897C6.62013 70.9797 6.40013 70.5797 6.20013 70.1797L5.88013 69.5697C5.68013 69.1697 5.49013 68.7697 5.32013 68.3697L5.06013 67.7797C4.67962 66.8706 4.34585 65.9428 4.06013 64.9997C3.90013 64.4697 3.76013 63.9997 3.64013 63.4797C3.42619 62.6155 3.25598 61.741 3.13013 60.8597C3.13013 60.7297 3.13013 60.5997 3.13013 60.4797C3.07239 60.0859 3.09358 59.6846 3.19244 59.2991C3.2913 58.9137 3.46588 58.5517 3.70599 58.2343C3.9461 57.917 4.24695 57.6506 4.59103 57.4506C4.9351 57.2507 5.31552 57.1212 5.71013 57.0697L13.9901 55.8697C16.7201 65.3597 26.8001 81.2497 62.3201 86.8397C62.5401 86.8697 54.9101 94.0297 53.5201 95.2497Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_17" d="M62.8803 86.8997L63.5703 100.81L53.2603 109.99V95.4897L53.5203 95.2597L62.8803 86.8997Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_18" d="M52.37 95.7596C24.26 91.3496 12.09 80.4696 6.83003 71.4296C4.84122 68.0825 3.54872 64.3683 3.03003 60.5096V75.0096C4.03003 82.8396 10.59 103.71 52.37 110.26C52.5284 110.284 52.69 110.273 52.8438 110.228C52.9975 110.183 53.1396 110.105 53.26 110V95.4996C53.1396 95.6052 52.9975 95.6831 52.8438 95.728C52.69 95.7729 52.5284 95.7837 52.37 95.7596V95.7596Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                </g>
                </g>
                <g id="Biscuit1">
                <path id="Vector_19" d="M111.74 40.8913L111.39 17.3813L54.54 68.5013C54.0609 68.9349 53.678 69.4643 53.4162 70.0551C53.1544 70.6459 53.0194 71.2851 53.02 71.9313V94.9313C53.0208 94.99 53.0389 95.0472 53.0719 95.0958C53.1049 95.1443 53.1515 95.1821 53.2058 95.2045C53.2601 95.2269 53.3197 95.2328 53.3774 95.2216C53.435 95.2103 53.4881 95.1824 53.53 95.1413L110.53 43.7413C111.294 42.9884 111.729 41.9639 111.74 40.8913V40.8913Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_20" d="M110.15 16.0113L5.74996 31.1113C5.35633 31.1629 4.97684 31.2921 4.6335 31.4914C4.29016 31.6907 3.98979 31.9562 3.74981 32.2724C3.50983 32.5887 3.335 32.9494 3.23547 33.3338C3.13593 33.7181 3.11367 34.1183 3.16996 34.5113C4.16996 42.3413 10.73 63.2113 52.5 69.7613C52.6598 69.7849 52.8229 69.7738 52.9782 69.729C53.1334 69.6841 53.2773 69.6065 53.4 69.5013L111.03 17.8813C111.202 17.726 111.319 17.5196 111.365 17.2925C111.41 17.0654 111.382 16.8297 111.283 16.6201C111.184 16.4106 111.021 16.2383 110.817 16.1286C110.613 16.019 110.379 15.9779 110.15 16.0113V16.0113Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path id="Vector_21" d="M52.92 71.4713C52.92 79.1113 53.02 88.0513 53.02 94.4113C53.0137 94.5585 52.9749 94.7025 52.9064 94.833C52.838 94.9634 52.7416 95.0771 52.624 95.166C52.5065 95.2549 52.3708 95.3166 52.2266 95.347C52.0824 95.3773 51.9334 95.3753 51.79 95.3413C45.25 93.5213 13.7 89.9513 4.53 65.7613C3.57256 63.148 3.05554 60.3939 3 57.6113L3.09 33.3913C3.76 40.5213 9.25 62.2513 51.05 69.2513C51.5763 69.3353 52.0548 69.6058 52.3981 70.0134C52.7414 70.4209 52.9267 70.9384 52.92 71.4713V71.4713Z" fill="white" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                </g>
                <g id="Cream_3">
                <path id="Vector_22" d="M108 39.4114L103.77 38.9014C102.823 38.7901 101.866 39.0061 101.058 39.5136C100.25 40.0211 99.6407 40.7896 99.33 41.6914L92.81 58.6914C92.0644 60.8391 90.753 62.7456 89.014 64.21C87.2751 65.6743 85.1732 66.6422 82.93 67.0114L72.67 68.6814C71.8288 68.8224 71.0506 69.2168 70.4394 69.8118C69.8283 70.4069 69.4133 71.1743 69.25 72.0114L64.67 111.011C64.5276 111.72 64.2036 112.379 63.7296 112.925C63.2557 113.47 62.6482 113.883 61.9666 114.123C61.285 114.363 60.5527 114.422 59.8416 114.294C59.1304 114.165 58.4648 113.854 57.91 113.391V113.391C57.3875 112.958 56.7673 112.659 56.103 112.52C55.4388 112.381 54.7507 112.406 54.0984 112.594C53.4461 112.781 52.8493 113.124 52.3599 113.595C51.8705 114.065 51.5033 114.647 51.29 115.291L40.35 154.641C40.1684 155.185 39.877 155.686 39.4937 156.112C39.1104 156.539 38.6435 156.882 38.122 157.12C37.6005 157.358 37.0356 157.486 36.4624 157.497C35.8892 157.508 35.3199 157.4 34.79 157.181L14.17 148.631C13.0031 148.148 11.7025 148.095 10.5 148.481L9 149.011C7.16 149.591 6.68 148.341 5.7 146.681C4.50154 144.633 3.4747 142.489 2.63 140.271C1.61869 137.593 1.06759 134.763 1 131.901C1 131.901 1.61 19.2714 1.58 18.8214C1.53158 18.3062 1.68477 17.7922 2.00738 17.3876C2.32999 16.9829 2.79691 16.719 3.31 16.6514L111.42 1.01144C111.609 0.984001 111.801 1.00612 111.979 1.07562C112.157 1.14512 112.313 1.25962 112.433 1.40788C112.553 1.55614 112.633 1.73306 112.664 1.92128C112.695 2.10949 112.676 2.30253 112.61 2.48144C112.63 2.48606 112.648 2.49754 112.661 2.51394C112.674 2.53035 112.681 2.55067 112.68 2.57144V35.2714C112.68 35.8622 112.555 36.4463 112.312 36.985C112.07 37.5236 111.715 38.0046 111.273 38.3961C110.83 38.7875 110.31 39.0804 109.746 39.2555C109.181 39.4305 108.586 39.4837 108 39.4114V39.4114Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <path id="Vector_23" d="M53.41 54.9014L104.55 9.81143L54.76 56.3814C54.5664 56.5631 54.3086 56.6604 54.0432 56.652C53.7779 56.6435 53.5267 56.53 53.345 56.3364C53.1634 56.1428 53.066 55.885 53.0745 55.6196C53.0829 55.3542 53.1964 55.1031 53.39 54.9214L53.41 54.9014Z" fill="black"/>
                <path id="Vector_24" d="M8.11011 34.2214C9.40112 36.0054 10.8395 37.6779 12.4101 39.2214C13.9889 40.7426 15.6767 42.1463 17.4601 43.4214C21.0537 45.9334 24.9262 48.0207 29.0001 49.6414C33.0529 51.292 37.2334 52.6097 41.5001 53.5814C42.5601 53.8614 43.6301 54.0614 44.7001 54.2814C45.7701 54.5014 46.8401 54.7414 47.9301 54.9014L51.1601 55.4314L51.5601 55.4914H51.8501C52.0457 55.4934 52.2406 55.4699 52.4301 55.4214C52.8028 55.3212 53.1458 55.1325 53.4301 54.8714C53.6175 54.6852 53.8709 54.5806 54.1351 54.5806C54.3993 54.5806 54.6527 54.6852 54.8401 54.8714C54.9338 54.9644 55.0082 55.075 55.059 55.1969C55.1098 55.3187 55.1359 55.4494 55.1359 55.5814C55.1359 55.7134 55.1098 55.8442 55.059 55.966C55.0082 56.0879 54.9338 56.1985 54.8401 56.2914V56.2914C54.3023 56.7812 53.6483 57.1254 52.9401 57.2914C52.5913 57.361 52.2357 57.3912 51.8801 57.3814C51.6992 57.3712 51.5189 57.3512 51.3401 57.3214L50.9301 57.2414L47.6701 56.5714C46.5801 56.3714 45.5101 56.0814 44.4301 55.8314C43.3501 55.5814 42.2701 55.3214 41.2101 54.9914C36.9193 53.8433 32.7288 52.3483 28.6801 50.5214C24.6232 48.7225 20.7878 46.4608 17.2501 43.7814C15.5001 42.428 13.8523 40.9473 12.3201 39.3514C10.7721 37.7654 9.36361 36.0491 8.11011 34.2214V34.2214Z" fill="black"/>
                <path id="Vector_25" d="M53.6299 56.4714L52.6299 100.801L51.6299 56.4714C51.6299 56.2062 51.7352 55.9519 51.9228 55.7643C52.1103 55.5768 52.3647 55.4714 52.6299 55.4714C52.8951 55.4714 53.1495 55.5768 53.337 55.7643C53.5245 55.9519 53.6299 56.2062 53.6299 56.4714V56.4714Z" fill="black"/>
                </g>
                </svg>

            </div>
        )
    }
}
