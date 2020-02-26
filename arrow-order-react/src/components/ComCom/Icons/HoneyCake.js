import React,{Component} from 'react';

export default class HoneyCake extends Component {

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
        console.log(o1, o2);
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
        let biscuits = document.querySelectorAll('#Biscuit1 > *, #Biscuit2 > *, #Biscuit3 > *')
        let fillings = document.querySelectorAll('#Filling1 > *, #Filling2 > *')
        let creams = document.querySelectorAll('#Cream1 > *, #Cream2 > *, #Cream3 > *')

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
            <div className="honeyCake">
                <svg width="100%" height="100%" viewBox="0 0 349 240" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="HoneyCake">
<g id="Biscuit3">
<path id="Vector" d="M1 173L174.21 73L347.41 173L260.81 223L174.21 173.06L87.66 223.03L1 173Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_2" d="M260.81 238.12L347.41 188.12V173L260.81 223V238.12Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_3" d="M87.66 238.12L1 188.12V173.03L87.66 223.03V238.12Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_4" d="M260.81 238.12V223L174.21 173.06L174.15 188.15L260.81 238.12Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_5" d="M174.21 173.06L174.15 188.15L87.6599 238.12V223.03L174.21 173.06Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<g id="Filling2">
<path id="Vector_6" d="M45 154.6L174.21 80L303.42 154.6L238.82 191.9L174.21 154.65L109.65 191.92L45 154.6Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_7" d="M238.82 210.57L303.42 173.27V154.6L238.82 191.9V210.57Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_8" d="M109.65 210.57L45 173.27V154.62L109.65 191.92V210.57Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_9" d="M238.82 210.57V191.9L174.21 154.65L174.17 173.3L238.82 210.57Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_10" d="M174.21 154.65L174.17 173.3L109.65 210.57V191.92L174.21 154.65Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<g id="Cream3">
<path id="Vector_11" d="M27.7787 170.066C23.2987 184.066 -0.84132 175.746 4.86868 162.066C6.04868 156.646 21.7687 149.066 24.4387 151.816C21.6587 157.516 29.4187 166.246 27.7787 170.066Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_12" d="M343.189 172.736C338.749 186.906 316.129 178.046 321.609 164.736C322.659 159.346 337.529 151.626 340.039 154.426C337.419 160.186 344.739 168.916 343.189 172.736Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_13" d="M258.949 204.426C254.509 218.596 231.889 209.726 237.369 196.376C238.369 191.036 253.279 183.316 255.799 186.136C253.179 191.826 260.499 200.556 258.949 204.426Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_14" d="M330.029 180.186C325.589 194.356 302.969 185.486 308.449 172.186C309.499 166.846 324.369 159.126 326.879 161.936C324.249 167.636 331.579 176.356 330.029 180.186Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_15" d="M316.469 187.746C312.019 201.916 289.409 193.046 294.879 179.746C295.929 174.406 310.799 166.686 313.319 169.496C310.699 175.196 318.009 183.916 316.469 187.746Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_16" d="M300.939 196.846C296.499 211.006 273.879 202.146 279.359 188.796C280.409 183.426 295.249 175.736 297.789 178.546C295.169 184.296 302.489 193.016 300.939 196.846Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_17" d="M287.009 204.256C282.559 218.426 259.949 209.566 265.419 196.256C266.469 190.906 281.339 183.186 283.859 186.006C281.249 191.706 288.549 200.426 287.009 204.256Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_18" d="M273.059 211.536C268.609 225.706 245.999 216.846 251.469 203.536C252.519 198.186 267.389 190.476 269.909 193.286C267.249 198.986 274.599 207.716 273.059 211.536Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_19" d="M39.5987 177.696C35.1487 191.866 12.5387 183.006 18.0087 169.696C19.0587 164.306 33.9287 156.586 36.4487 159.426C33.8287 165.146 41.1387 173.876 39.5987 177.696Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_20" d="M55.3989 187.176C50.9589 201.346 28.3389 192.476 33.8189 179.176C34.8689 173.786 49.7389 166.066 52.2489 168.876C49.6289 174.626 56.9489 183.346 55.3989 187.176Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_21" d="M71.4089 195.736C66.9689 209.896 44.3489 201.036 49.8289 187.686C50.8789 182.336 65.7489 174.626 68.2489 177.426C65.6389 183.186 72.9589 191.906 71.4089 195.736Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_22" d="M85.8088 204.426C81.3588 218.546 58.7488 209.676 64.2488 196.326C65.2488 190.986 80.1388 183.266 82.6588 186.086C80.0388 191.826 87.3488 200.556 85.8088 204.426Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_23" d="M112.929 204.866C108.479 219.036 85.8688 210.166 91.3388 196.866C92.3388 191.526 107.259 183.806 109.769 186.616C107.159 192.316 114.469 201.036 112.929 204.866Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_24" d="M98.8687 211.536C94.4187 225.706 71.8087 216.846 77.2787 203.536C78.3287 198.146 93.2487 190.426 95.7187 193.246C93.0987 198.986 100.409 207.716 98.8687 211.536Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<g id="Biscuit2">
<path id="Vector_25" d="M1 142L174.21 42L347.41 142L260.81 192L174.21 142.06L87.66 192.03L1 142Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_26" d="M260.81 207.12L347.41 157.12V142L260.81 192V207.12Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_27" d="M87.66 207.12L1 157.12V142.03L87.66 192.03V207.12Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_28" d="M260.81 207.12V192L174.21 142.06L174.15 157.15L260.81 207.12Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_29" d="M174.21 142.06L174.15 157.15L87.6599 207.12V192.03L174.21 142.06Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<g id="Filling1">
<path id="Vector_30" d="M45 125.6L174.21 51L303.42 125.6L238.82 162.9L174.21 125.65L109.65 162.92L45 125.6Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_31" d="M238.82 181.57L303.42 144.27V125.6L238.82 162.9V181.57Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_32" d="M109.65 181.57L45 144.27V125.62L109.65 162.92V181.57Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_33" d="M238.82 181.57V162.9L174.21 125.65L174.17 144.3L238.82 181.57Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_34" d="M174.21 125.65L174.17 144.3L109.65 181.57V162.92L174.21 125.65Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<g id="Cream2">
<path id="Vector_35" d="M27.7787 141.066C23.2987 155.066 -0.84132 146.746 4.86868 133.066C6.04868 127.646 21.7687 120.066 24.4387 122.816C21.6587 128.516 29.4187 137.246 27.7787 141.066Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_36" d="M343.189 143.736C338.749 157.906 316.129 149.046 321.609 135.736C322.659 130.346 337.529 122.626 340.039 125.426C337.419 131.186 344.739 139.916 343.189 143.736Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_37" d="M258.949 175.426C254.509 189.596 231.889 180.726 237.369 167.376C238.369 162.036 253.279 154.316 255.799 157.136C253.179 162.826 260.499 171.556 258.949 175.426Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_38" d="M330.029 151.186C325.589 165.356 302.969 156.486 308.449 143.186C309.499 137.846 324.369 130.126 326.879 132.936C324.249 138.636 331.579 147.356 330.029 151.186Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_39" d="M316.469 158.746C312.019 172.916 289.409 164.046 294.879 150.746C295.929 145.406 310.799 137.686 313.319 140.496C310.699 146.196 318.009 154.916 316.469 158.746Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_40" d="M300.939 167.846C296.499 182.006 273.879 173.146 279.359 159.796C280.409 154.426 295.249 146.736 297.789 149.546C295.169 155.296 302.489 164.016 300.939 167.846Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_41" d="M287.009 175.256C282.559 189.426 259.949 180.566 265.419 167.256C266.469 161.906 281.339 154.186 283.859 157.006C281.249 162.706 288.549 171.426 287.009 175.256Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_42" d="M273.059 182.536C268.609 196.706 245.999 187.846 251.469 174.536C252.519 169.186 267.389 161.476 269.909 164.286C267.249 169.986 274.599 178.716 273.059 182.536Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_43" d="M39.5987 148.696C35.1487 162.866 12.5387 154.006 18.0087 140.696C19.0587 135.306 33.9287 127.586 36.4487 130.426C33.8287 136.146 41.1387 144.876 39.5987 148.696Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_44" d="M55.3989 158.176C50.9589 172.346 28.3389 163.476 33.8189 150.176C34.8689 144.786 49.7389 137.066 52.2489 139.876C49.6289 145.626 56.9489 154.346 55.3989 158.176Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_45" d="M71.4089 166.736C66.9689 180.896 44.3489 172.036 49.8289 158.686C50.8789 153.336 65.7489 145.626 68.2489 148.426C65.6389 154.186 72.9589 162.906 71.4089 166.736Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_46" d="M85.8088 175.426C81.3588 189.546 58.7488 180.676 64.2488 167.326C65.2488 161.986 80.1388 154.266 82.6588 157.086C80.0388 162.826 87.3488 171.556 85.8088 175.426Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_47" d="M112.929 175.866C108.479 190.036 85.8688 181.166 91.3388 167.866C92.3388 162.526 107.259 154.806 109.769 157.616C107.159 163.316 114.469 172.036 112.929 175.866Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_48" d="M98.8687 182.536C94.4187 196.706 71.8087 187.846 77.2787 174.536C78.3287 169.146 93.2487 161.426 95.7187 164.246C93.0987 169.986 100.409 178.716 98.8687 182.536Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<g id="Biscuit1">
<path id="Vector_49" d="M1 111L174.21 11L347.41 111L260.81 161L174.21 111.06L87.66 161.03L1 111Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_50" d="M260.81 176.12L347.41 126.12V111L260.81 161V176.12Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_51" d="M87.66 176.12L1 126.12V111.03L87.66 161.03V176.12Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_52" d="M260.81 176.12V161L174.21 111.06L174.15 126.15L260.81 176.12Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_53" d="M174.21 111.06L174.15 126.15L87.6599 176.12V161.03L174.21 111.06Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<g id="Cream1">
<path id="Vector_54" d="M184.858 20.2788C180.418 34.4488 157.798 25.5888 163.268 12.2788C164.328 6.8888 179.188 -0.821203 181.708 1.9888C179.088 7.7388 186.408 16.4588 184.858 20.2788Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_55" d="M25.4381 107.609C20.9881 121.779 -1.62194 112.909 3.84806 99.6088C4.84806 94.2688 19.7681 86.5488 22.2781 89.3688C19.6681 95.0588 26.9981 103.789 25.4381 107.609Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_56" d="M167.148 29.9888C162.698 44.1488 140.088 35.2888 145.558 21.9888C146.608 16.5988 161.478 8.87881 163.998 11.6888C161.378 17.4388 168.688 26.1588 167.148 29.9888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_57" d="M149.428 39.6888C144.988 53.8588 122.368 44.9888 127.848 31.6888C128.898 26.3488 143.768 18.6288 146.278 21.4388C143.658 27.1388 150.998 35.8588 149.428 39.6888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_58" d="M131.718 49.3888C127.268 63.5588 104.658 54.6988 110.128 41.3888C111.178 36.0388 126.048 28.3188 128.568 31.1388C125.998 36.8388 133.258 45.5688 131.718 49.3888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_59" d="M113.998 59.0988C109.548 73.2588 86.928 64.3988 92.408 51.0488C93.408 45.7088 108.328 37.9888 110.838 40.7988C108.228 46.5488 115.548 55.2688 113.998 59.0988Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_60" d="M96.2881 68.7988C91.8481 82.9688 69.2281 74.0988 74.6981 60.7988C75.7581 55.3888 90.6181 47.6888 93.1381 50.4988C90.5181 56.2488 97.8381 64.9688 96.2881 68.7988Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_61" d="M78.5779 78.4988C74.1279 92.6688 51.5179 83.8088 56.9879 70.4988C57.9979 65.1088 72.9079 57.3888 75.4279 60.2088C72.8079 65.9488 80.1179 74.6788 78.5779 78.4988Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_62" d="M60.8581 88.2088C56.4181 102.369 33.7981 93.5088 39.2781 80.2088C40.2781 74.8588 55.1981 67.1488 57.7081 69.9588C55.0881 75.6588 62.4081 84.3888 60.8581 88.2088Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_63" d="M43.148 97.9088C38.698 112.079 16.088 103.209 21.558 89.9088C22.608 84.5188 37.478 76.7988 39.998 79.6088C37.378 85.3888 44.688 94.0788 43.148 97.9088Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_64" d="M196.998 28.1388C192.558 42.3088 169.938 33.4388 175.418 20.1388C176.418 14.7988 191.328 7.07879 193.848 9.88879C191.208 15.5888 198.528 24.3088 196.998 28.1388Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_65" d="M37.5579 115.469C33.1079 129.629 10.4979 120.769 15.9679 107.469C16.9979 102.079 31.8879 94.3888 34.4079 97.1688C31.7879 102.919 39.0979 111.639 37.5579 115.469Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_66" d="M179.268 37.8388C174.818 52.0088 152.208 43.1488 157.678 29.8388C158.678 24.4888 173.598 16.7688 176.118 19.5888C173.498 25.2888 180.808 34.0188 179.268 37.8388Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_67" d="M161.548 47.5488C157.108 61.7088 134.488 52.8488 139.968 39.5488C141.018 34.2088 155.888 26.4888 158.398 29.2988C155.778 34.9988 163.098 43.7188 161.548 47.5488Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_68" d="M143.838 57.2488C139.398 71.4188 116.778 62.5488 122.248 49.2488C123.308 43.9088 138.168 36.1888 140.688 38.9988C138.068 44.6988 145.378 53.3888 143.838 57.2488Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_69" d="M126.128 66.9488C121.678 81.1188 99.068 72.2588 104.538 58.9488C105.538 53.5988 120.458 45.8788 122.978 48.6988C120.358 54.3888 127.668 63.1288 126.128 66.9488Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_70" d="M108.408 76.6588C103.968 90.8188 81.3482 81.9588 86.8282 68.6588C87.8282 63.3088 102.748 55.5988 105.258 58.4088C102.638 64.1088 109.998 72.8288 108.408 76.6588Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_71" d="M90.6981 86.3888C86.2481 100.559 63.6381 91.6888 69.1081 78.3888C70.1081 73.0488 85.0281 65.3288 87.5481 68.1388C84.9281 73.8088 92.2381 82.5288 90.6981 86.3888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_72" d="M72.998 96.0588C68.558 110.229 45.938 101.359 51.418 88.0588C52.468 82.7188 67.338 74.9988 69.848 77.8088C67.208 83.5088 74.528 92.2388 72.998 96.0588Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_73" d="M55.2681 105.759C50.8281 119.929 28.2081 111.069 33.6781 97.7588C34.7381 92.3888 49.5981 84.6588 52.1181 87.4688C49.4981 93.2088 56.8181 101.939 55.2681 105.759Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_74" d="M209.098 34.4888C204.658 48.6488 182.038 39.7888 187.518 26.4888C188.518 21.1488 203.438 13.4288 205.948 16.2388C203.328 21.9388 210.648 30.6588 209.098 34.4888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_75" d="M49.678 121.809C45.228 135.979 22.618 127.119 28.088 113.809C29.138 108.389 43.998 100.699 46.528 103.519C43.908 109.259 51.218 117.989 49.678 121.809Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_76" d="M191.388 44.1888C186.938 58.3588 164.328 49.4888 169.798 36.1888C170.798 30.8488 185.718 23.1288 188.238 25.9388C185.618 31.6388 192.928 40.3888 191.388 44.1888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_77" d="M173.678 53.8888C169.228 68.0588 146.618 59.1988 152.088 45.8888C153.088 40.5388 168.008 32.8188 170.518 35.6388C167.908 41.3888 175.218 50.0688 173.678 53.8888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_78" d="M155.998 63.5988C151.558 77.7588 128.938 68.8988 134.408 55.5488C135.468 50.1988 150.328 42.4888 152.848 45.2988C150.188 51.0488 157.508 59.7688 155.998 63.5988Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_79" d="M138.248 73.2988C133.798 87.4688 111.188 78.5988 116.658 65.2988C117.658 59.9588 132.578 52.2388 135.098 55.0488C132.478 60.7488 139.788 69.4688 138.248 73.2988Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_80" d="M120.528 82.9988C116.088 97.1688 93.468 88.3088 98.948 74.9988C99.948 69.6588 114.868 61.9388 117.378 64.7588C114.758 70.4488 122.078 79.1788 120.528 82.9988Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_81" d="M102.818 92.6988C98.3781 106.869 75.7581 98.0088 81.2281 84.6988C82.2281 79.3488 97.1481 71.6388 99.6681 74.4488C97.0481 80.1488 104.358 88.8788 102.818 92.6988Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_82" d="M85.108 102.389C80.658 116.549 58.048 107.689 63.518 94.3888C64.518 89.0488 79.438 81.3288 81.948 84.1388C79.338 89.8588 86.648 98.5788 85.108 102.389Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_83" d="M67.3881 112.109C62.9481 126.279 40.3281 117.409 45.8081 104.109C46.8081 98.7688 61.7181 91.0488 64.2381 93.8588C61.6181 99.5588 68.9381 108.279 67.3881 112.109Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_84" d="M219.788 41.0788C215.348 55.2388 192.728 46.3788 198.198 33.0788C199.258 27.7388 214.118 20.0188 216.638 22.8288C213.998 28.5288 221.328 37.2488 219.788 41.0788Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_85" d="M60.3681 128.389C55.9181 142.559 33.2981 133.699 38.7781 120.389C39.7781 115.039 54.6981 107.319 57.2081 110.139C54.5881 115.849 61.9081 124.579 60.3681 128.389Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_86" d="M202.078 50.7788C197.628 64.9488 175.018 56.0788 180.488 42.7788C181.488 37.4388 196.408 29.7188 198.928 32.5288C196.308 38.2288 203.618 46.9488 202.078 50.7788Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_87" d="M184.358 60.4788C179.918 74.6488 157.298 65.7888 162.778 52.4788C163.828 47.0888 178.698 39.3888 181.208 42.1888C178.588 47.9288 185.908 56.6588 184.358 60.4788Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_88" d="M166.648 70.1888C162.198 84.3488 139.588 75.4888 145.058 62.1888C146.108 56.7888 160.998 49.0788 163.498 51.8888C160.878 57.6388 168.188 66.3888 166.648 70.1888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_89" d="M148.928 79.8888C144.488 94.0588 121.868 85.1888 127.348 71.8888C128.398 66.5488 143.268 58.8288 145.778 61.6388C143.158 67.3888 150.478 76.0588 148.928 79.8888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_90" d="M131.218 89.5888C126.778 103.759 104.158 94.8988 109.628 81.5888C110.688 76.2388 125.548 68.5188 128.068 71.3388C125.448 77.0388 132.768 85.7688 131.218 89.5888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_91" d="M113.508 99.2988C109.058 113.459 86.4481 104.599 91.9181 91.2988C92.9181 85.9488 107.838 78.2388 110.358 81.0488C107.738 86.7488 115.048 95.4688 113.508 99.2988Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_92" d="M95.788 108.999C91.348 123.159 68.728 114.299 74.208 100.999C75.258 95.6588 90.128 87.9388 92.638 90.7488C89.998 96.4488 97.338 105.169 95.788 108.999Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_93" d="M78.0779 118.699C73.6279 132.869 51.0179 123.999 56.4879 110.699C57.4879 105.359 72.4079 97.6388 74.9279 100.449C72.3079 106.149 79.6179 114.869 78.0779 118.699Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_94" d="M232.368 48.7188C227.918 62.8788 205.308 54.0188 210.778 40.7188C211.828 35.3688 226.698 27.6588 229.208 30.4688C226.598 36.1688 233.908 44.8888 232.368 48.7188Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_95" d="M72.938 136.039C68.498 150.209 45.878 141.349 51.348 128.039C52.408 122.689 67.268 114.969 69.788 117.789C67.168 123.489 74.478 132.219 72.938 136.039Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_96" d="M214.648 58.3888C210.208 72.5588 187.588 63.6888 193.068 50.3388C194.118 44.9988 208.978 37.2788 211.498 40.0888C208.878 45.8688 216.198 54.5888 214.648 58.3888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_97" d="M196.938 68.1188C192.488 82.2888 169.878 73.4288 175.348 60.0688C176.398 54.7288 191.268 47.0088 193.788 49.8288C191.168 55.5688 198.478 64.2988 196.938 68.1188Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_98" d="M179.218 77.8188C174.778 91.9888 152.158 83.1288 157.638 69.8188C158.688 64.4688 173.558 56.7588 176.068 59.5688C173.448 65.2688 180.768 73.9988 179.218 77.8188Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_99" d="M161.508 87.5288C157.068 101.689 134.448 92.8288 139.918 79.5288C140.998 74.1388 155.838 66.3888 158.358 69.2288C155.738 74.9788 163.048 83.6988 161.508 87.5288Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_100" d="M143.798 97.2288C139.348 111.399 116.738 102.529 122.208 89.2288C123.258 83.8888 138.128 76.1688 140.648 78.9788C137.998 84.6788 145.338 93.3888 143.798 97.2288Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_101" d="M126.078 106.929C121.638 121.099 99.0181 112.239 104.498 98.9288C105.498 93.5788 120.418 85.8588 122.928 88.6788C120.308 94.3888 127.628 103.109 126.078 106.929Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_102" d="M108.368 116.639C103.918 130.799 81.308 121.939 86.778 108.639C87.778 103.299 102.698 95.5788 105.218 98.3888C102.598 104.089 109.908 112.809 108.368 116.639Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_103" d="M90.6482 126.389C86.2082 140.559 63.5882 131.689 69.0682 118.389C70.1182 113.049 84.9882 105.329 87.4982 108.139C84.8782 113.789 92.1982 122.509 90.6482 126.389Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_104" d="M244.488 55.2788C240.038 69.4488 217.428 60.5788 222.898 47.2788C223.898 41.9388 238.818 34.2188 241.338 37.0288C238.718 42.7288 245.998 51.4488 244.488 55.2788Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_105" d="M85.0581 142.609C80.6181 156.769 57.9981 147.909 63.4781 134.559C64.5281 129.209 79.3881 121.499 81.9081 124.309C79.2881 130.059 86.6081 138.779 85.0581 142.609Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_106" d="M226.768 64.9788C222.328 79.1488 199.708 70.2888 205.188 56.9788C206.238 51.6288 221.108 43.9088 223.618 46.7288C220.998 52.3888 228.318 61.1588 226.768 64.9788Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_107" d="M209.058 74.6888C204.608 88.8488 181.998 79.9888 187.468 66.6888C188.518 61.3388 203.388 53.6288 205.908 56.4388C203.288 62.1388 210.598 70.8588 209.058 74.6888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_108" d="M191.348 84.3888C186.898 98.5588 164.278 89.6888 169.758 76.3888C170.808 71.0488 185.678 63.3288 188.188 66.1388C185.568 71.8388 192.888 80.5588 191.348 84.3888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_109" d="M173.628 94.0888C169.188 108.259 146.568 99.3888 152.038 86.0888C153.098 80.7488 167.958 73.0288 170.478 75.8488C167.858 81.5388 175.178 90.2688 173.628 94.0888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_110" d="M155.918 103.789C151.468 117.959 128.858 109.099 134.328 95.7888C135.328 90.4388 150.248 82.7288 152.768 85.5388C150.148 91.2388 157.458 99.9688 155.918 103.789Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_111" d="M138.198 113.499C133.758 127.659 111.138 118.799 116.618 105.499C117.618 100.159 132.538 92.4388 135.048 95.2488C132.428 100.949 139.748 109.669 138.198 113.499Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_112" d="M120.488 123.199C116.038 137.369 93.4281 128.499 98.8981 115.199C99.8981 109.859 114.818 102.139 117.338 104.949C114.718 110.649 121.998 119.389 120.488 123.199Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_113" d="M102.778 132.899C98.3281 147.069 75.7181 138.209 81.1881 124.899C82.1881 119.549 97.1081 111.829 99.6181 114.649C96.9981 120.389 104.318 129.079 102.778 132.899Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_114" d="M256.648 62.2388C252.208 76.3988 229.588 67.5388 235.068 54.1888C236.118 48.8388 250.988 41.1288 253.498 43.9388C250.878 49.6888 258.198 58.3888 256.648 62.2388Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_115" d="M97.2281 149.559C92.7781 163.729 70.1681 154.859 75.6381 141.559C76.6381 136.219 91.5581 128.499 94.0781 131.319C91.4581 137.009 98.7681 145.739 97.2281 149.559Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_116" d="M238.938 71.9388C234.488 86.1088 211.878 77.2388 217.348 63.9388C218.398 58.5988 233.268 50.8788 235.788 53.6888C233.168 59.3888 240.478 68.1088 238.938 71.9388Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_117" d="M221.218 81.6388C216.778 95.8088 194.158 86.9388 199.638 73.6388C200.688 68.2988 215.558 60.5788 218.068 63.3888C215.448 69.0888 222.768 77.8188 221.218 81.6388Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_118" d="M203.508 91.3888C199.068 105.559 176.448 96.6988 181.918 83.3888C182.978 78.0388 197.838 70.3288 200.358 73.1388C197.738 78.7888 205.058 87.5188 203.508 91.3888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_119" d="M185.798 101.049C181.348 115.209 158.738 106.349 164.208 93.0488C165.208 87.7088 180.128 79.9888 182.648 82.7988C179.998 88.4988 187.338 97.2188 185.798 101.049Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_120" d="M168.078 110.749C163.638 124.919 141.018 116.049 146.498 102.749C147.548 97.4088 162.418 89.6888 164.928 92.4988C162.308 98.1988 169.628 106.919 168.078 110.749Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_121" d="M150.368 120.449C145.918 134.619 123.308 125.759 128.778 112.449C129.778 107.099 144.698 99.3788 147.218 102.199C144.598 107.899 151.908 116.629 150.368 120.449Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_122" d="M132.658 130.159C128.208 144.319 105.588 135.459 111.068 122.109C112.118 116.759 126.988 109.049 129.498 111.859C126.878 117.609 134.198 126.329 132.658 130.159Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_123" d="M114.938 139.859C110.498 154.029 87.878 145.159 93.348 131.809C94.408 126.469 109.268 118.749 111.788 121.559C109.168 127.309 116.488 136.029 114.938 139.859Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_124" d="M268.268 63.9488C263.828 78.1088 241.208 69.2488 246.688 55.8988C247.738 50.5588 262.608 42.8388 265.118 45.6488C262.498 51.3888 269.818 60.1188 268.268 63.9488Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_125" d="M251.998 73.9188C247.558 88.0888 224.938 79.2188 230.408 65.9188C231.468 60.5788 246.328 52.8588 248.848 55.6688C246.218 61.3888 253.538 70.0888 251.998 73.9188Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_126" d="M234.178 84.9688C229.738 99.1388 207.118 90.2688 212.598 76.9688C213.648 71.6288 228.518 63.9088 231.028 66.7288C228.408 72.3888 235.728 81.1488 234.178 84.9688Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_127" d="M216.378 96.0188C211.928 110.189 189.318 101.329 194.788 88.0188C195.838 82.6788 210.708 74.9588 213.228 77.7788C210.608 83.4688 217.918 92.1988 216.378 96.0188Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_128" d="M198.568 107.069C194.128 121.239 171.508 112.379 176.988 99.0688C177.988 93.7188 192.908 85.9988 195.418 88.8188C192.798 94.5188 200.118 103.249 198.568 107.069Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_129" d="M279.408 72.1588C274.968 86.3288 252.348 77.4588 257.828 64.1588C258.828 58.8188 273.748 51.0988 276.258 53.9088C273.638 59.6088 280.998 68.3288 279.408 72.1588Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_130" d="M263.128 82.1288C258.678 96.2988 236.068 87.4388 241.538 74.1288C242.588 68.7788 257.458 61.0588 259.978 63.8788C257.358 69.5788 264.668 78.3088 263.128 82.1288Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_131" d="M245.318 93.1788C240.878 107.349 218.258 98.4888 223.738 85.1788C224.738 79.8288 239.658 72.1088 242.168 74.9288C239.548 80.6288 246.868 89.3888 245.318 93.1788Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_132" d="M227.518 104.229C223.068 118.399 200.458 109.539 205.928 96.2288C206.928 90.8788 221.848 83.1688 224.368 85.9788C221.748 91.6788 229.058 100.389 227.518 104.229Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_133" d="M209.708 115.279C205.268 129.449 182.648 120.589 188.118 107.279C189.178 101.929 204.038 94.2188 206.558 97.0288C203.938 102.729 211.258 111.459 209.708 115.279Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_134" d="M295.058 82.6688C290.618 96.8388 267.998 87.9788 273.478 74.6688C274.478 69.3188 289.398 61.5988 291.908 64.4188C289.288 70.1188 296.608 78.8488 295.058 82.6688Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_135" d="M278.778 92.6388C274.328 106.809 251.718 97.9488 257.188 84.6388C258.238 79.2888 273.108 71.5788 275.628 74.3888C272.998 80.0988 280.318 88.8188 278.778 92.6388Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_136" d="M260.998 103.699C256.558 117.859 233.938 108.999 239.418 95.6988C240.468 90.3488 255.338 82.6388 257.848 85.4488C255.198 91.1488 262.518 99.8688 260.998 103.699Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_137" d="M243.168 114.749C238.718 128.909 216.108 120.049 221.578 106.749C222.578 101.399 237.498 93.6888 240.018 96.4988C237.398 102.199 244.708 110.919 243.168 114.749Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_138" d="M225.358 125.799C220.918 139.959 198.298 131.099 203.768 117.799C204.828 112.449 219.688 104.739 222.208 107.549C219.588 113.249 226.908 121.969 225.358 125.799Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_139" d="M309.888 91.6988C305.448 105.869 282.828 96.9988 288.298 83.6988C289.358 78.3588 304.218 70.6388 306.738 73.4488C304.118 79.1488 311.438 87.8688 309.888 91.6988Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_140" d="M293.608 101.669C289.158 115.839 266.548 106.979 272.018 93.6688C273.068 88.3188 287.938 80.5988 290.458 83.4188C287.838 89.1188 295.148 97.8488 293.608 101.669Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_141" d="M275.798 112.719C271.358 126.889 248.738 118.029 254.208 104.719C255.268 99.3688 270.128 91.6488 272.648 94.4688C269.998 100.169 277.348 108.899 275.798 112.719Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_142" d="M257.998 123.769C253.558 137.939 230.938 129.079 236.418 115.769C237.468 110.419 252.338 102.699 254.848 105.519C252.218 111.219 259.538 119.949 257.998 123.769Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_143" d="M240.188 134.819C235.738 148.989 213.128 140.129 218.598 126.819C219.648 121.469 234.518 113.759 237.038 116.569C234.418 122.269 241.728 130.999 240.188 134.819Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_144" d="M325.688 99.8888C321.248 114.059 298.628 105.199 304.108 91.8888C305.158 86.5388 320.028 78.8188 322.538 81.6388C319.918 87.3888 327.238 96.0688 325.688 99.8888Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_145" d="M309.408 109.869C304.968 124.029 282.348 115.169 287.818 101.869C288.878 96.5188 303.738 88.8088 306.258 91.6188C303.638 97.3188 310.998 106.039 309.408 109.869Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_146" d="M291.598 120.919C287.158 135.079 264.538 126.219 270.018 112.919C271.068 107.569 285.938 99.8588 288.448 102.669C285.828 108.389 293.148 117.089 291.598 120.919Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_147" d="M273.798 131.969C269.348 146.129 246.738 137.269 252.208 123.919C253.208 118.579 268.128 110.859 270.648 113.669C267.998 119.389 275.338 128.139 273.798 131.969Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_148" d="M255.998 143.019C251.558 157.179 228.938 148.319 234.418 135.019C235.468 129.679 250.338 121.959 252.848 124.769C250.218 130.469 257.538 139.189 255.998 143.019Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_149" d="M342.138 106.889C337.688 121.059 315.068 112.189 320.548 98.8888C321.598 93.4988 336.468 85.7788 338.998 88.5888C336.358 94.3888 343.678 103.059 342.138 106.889Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_150" d="M325.848 116.859C321.408 131.029 298.788 122.169 304.258 108.859C305.318 103.509 320.178 95.7888 322.698 98.6088C320.078 104.309 327.398 113.039 325.848 116.859Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_151" d="M308.048 127.909C303.598 142.079 280.978 133.219 286.458 119.909C287.508 114.559 302.378 106.839 304.888 109.659C302.268 115.389 309.588 124.089 308.048 127.909Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_152" d="M290.238 138.959C285.788 153.129 263.178 144.269 268.648 130.959C269.698 125.609 284.568 117.889 287.088 120.709C284.468 126.389 291.778 135.139 290.238 138.959Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path id="Vector_153" d="M272.428 150.009C267.988 164.179 245.368 155.319 250.848 142.009C251.898 136.659 266.768 128.949 269.278 131.759C266.658 137.459 273.998 146.189 272.428 150.009Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</g>
</svg>

            </div>
        )
    }
}
