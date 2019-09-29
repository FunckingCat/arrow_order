const tabs = document.querySelectorAll('.contactButton>div>div')
for (let tab of tabs){
    tab.addEventListener('click', () => swapActive(tabs))
}

function swapActive(tabs) {
    for (let tab of tabs){
        if (tab.classList.contains('active')){
            tab.classList.remove('active')
            tab.classList.add('passive')
        }
        else{
            tab.classList.remove('passive')
            tab.classList.add('active')
        }
    }
}
