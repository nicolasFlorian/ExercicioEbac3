$(document).ready(function(){
    $('header button')
})

$('header button').click(() => {
    const checker = $('form').is(':visible')
    if(checker == false){
        $('form').slideDown()
    }else{
        $('form').slideUp()
    }
})

$('#cancelButton').click(() => {
    $('form').slideUp()
})

$('form').on('submit', (e) => {
    e.preventDefault()
    const addressImage = $('#addressImage').val()
    const ul = document.querySelector('ul')

    const li = document.createElement('li')
    li.style.display = 'none'

    const img = document.createElement('img')
    img.src = addressImage;

    const div = document.createElement('div')
    div.classList.add('overlayImage')

    const a = document.createElement('a')
    a.href = addressImage
    a.target = '_blank'
    a.title = 'Ver imagem em tamanho real'
    a.textContent = 'Ver imagem em tamanho real'

    div.appendChild(a)
    li.appendChild(img)
    li.appendChild(div)

    ul.appendChild(li)
    $(li).fadeIn(1000);

    $('#addressImage').val('')
})