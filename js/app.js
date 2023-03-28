let modatBtns = document.querySelectorAll('[data-modal]');
let closeModalBlock = document.querySelector('.modalClose');
let modalCloseBtn = document.querySelectorAll('.close')
let modals = document.querySelectorAll('.modal')

modatBtns.forEach(el=>{
    el.onclick = ()=>{
        let modalId = el.getAttribute('data-modal')
        let modalBlock = document.querySelector(modalId)
        modalBlock.classList.add('active')
        closeModalBlock.classList.add('active')
    }
})

closeModalBlock.onclick = ()=>{
    modals.forEach(el=>{
        el.classList.remove('active')
    })
    closeModalBlock.classList.remove('active')
}

modalCloseBtn.forEach(el=>{
    el.onclick = ()=>{
        modals.forEach(el=>{
            el.classList.remove('active')
        })
        closeModalBlock.classList.remove('active')
    }
})
