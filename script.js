
// This feature changes the bottom border 
//of the navigation links based on the click
function activeSection(p) {
    const linkHome = document.getElementsByClassName('nav-item')[0]
    const linkContact = document.getElementsByClassName('nav-item')[1]

    if(p == 0){
        linkHome.className = 'nav-item active';
        linkContact.className = 'nav-item';
    }else if(p == 1){
        linkHome.className = 'nav-item';
        linkContact.className = 'nav-item active';
    }

    document.addEventListener('wheel', (e)=>{
        linkHome.className = 'nav-item active';
        linkContact.className = 'nav-item active';
    })
}

activeSection(0)

document.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= 35){
        document.getElementsByClassName("nav-tabs")[0].className = 'inPage'
    }else{
        document.getElementsByClassName("inPage")[0].className = 'nav-tabs'
    }
})



