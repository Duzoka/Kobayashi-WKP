

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
  