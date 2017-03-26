$(document).ready(function(){
$(".contenido").hide();
$(".trabaje").hide();
$(".estudiando").hide();
$(".titulos").hide();
$(".tecnologias").hide();
//diplomas

//trabajos
$(".trabajo").on("click", function(){
$(this).children(".trabaje").toggle();
//end
});
//estudios
$(".estudio").on("click", function(){
$(this).children(".estudiando").toggle();
//end
});
//titulos
$(".titulo").on("click", function(){
$(this).children(".titulos").toggle();
//end
});

$(".Titulo").on("click", function(){
$(this).next(".contenido").toggle();
//end
});
$("#tecnologias").on("click", function(){
$(".tecnologias").toggle();
//end
});


});
