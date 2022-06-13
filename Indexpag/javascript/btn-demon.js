const botao = document.querySelector('.check-more-below')

// seleciona elemento
let el = document.getElementById('quetza-session');
let ol = document.getElementById('about-the-user');
// utiliza método
let elCoordenadas = el.getBoundingClientRect();
let olCoordenadas = ol.getBoundingClientRect();
// verificar as propriedades com as coord
console.log(olCoordenadas);

botao.addEventListener('click', () => {
    window.scroll({elCoordenadas: window.location.href='#about-the-user'})

})

/* Barra sumindo */

$(window).scroll(function(){
        
    if($(document).scrollTop() > 500){// se a rolagem passar de 200px esconde o elemento
    
        $('.navbar-indexpag').fadeOut(); // Esconde usando fadeOut   
    } else { // senão ele volta a ser visivel
    
        $('.navbar-indexpag').fadeIn(); // Mostra usando fadeIn     
    }
  });

  /* animação de qualquer botão */

$('.all-divs-pag a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset
	}, 500);
});
  