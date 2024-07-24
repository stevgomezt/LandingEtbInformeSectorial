// AnalisisMer Modal
var modalAnalisisMer = document.getElementById('myModalAnalisisMer');
var modalDialogAnalisisMer = modalAnalisisMer.querySelector('.modal-dialog');
var galleryImgAnalisisMer = document.getElementById('galleryImgAnalisisMer');
var imageContainerAnalisisMer = document.getElementById('imageContainerAnalisisMer');
var imagesAnalisisMer = [
  "/assets/img/slides/analisisMerc1.jpg",
  "/assets/img/slides/analisisMerc2.jpg",
  "/assets/img/slides/analisisMerc3.jpg",
  "/assets/img/slides/analisisMerc4.jpg",
  "/assets/img/slides/analisisMerc5.jpg"
];
var currentIndexAnalisisMer = 0;

document.getElementById("openModalBtnAnalisisMer").onclick = function () {
  $('#myModalAnalisisMer').modal('show');
}

function adjustModalSizeAnalisisMer() {
  var imgWidth = galleryImgAnalisisMer.naturalWidth;
  var imgHeight = galleryImgAnalisisMer.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerAnalisisMer.style.maxWidth = maxWidth + 'px';
  imageContainerAnalisisMer.style.maxHeight = maxHeight + 'px';
  modalDialogAnalisisMer.style.maxWidth = maxWidth + 'px';
  modalDialogAnalisisMer.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnAnalisisMer").onclick = function () {
  currentIndexAnalisisMer = (currentIndexAnalisisMer > 0) ? currentIndexAnalisisMer - 1 : imagesAnalisisMer.length - 1;
  galleryImgAnalisisMer.src = imagesAnalisisMer[currentIndexAnalisisMer];
  adjustModalSizeAnalisisMer();
}

document.getElementById("nextBtnAnalisisMer").onclick = function () {
  currentIndexAnalisisMer = (currentIndexAnalisisMer < imagesAnalisisMer.length - 1) ? currentIndexAnalisisMer + 1 : 0;
  galleryImgAnalisisMer.src = imagesAnalisisMer[currentIndexAnalisisMer];
  adjustModalSizeAnalisisMer();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalAnalisisMer').on('shown.bs.modal', function () {
  adjustModalSizeAnalisisMer();
});
