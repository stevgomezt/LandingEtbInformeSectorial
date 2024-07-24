var modalModeloInteligenteVen = document.getElementById('myModalModeloInteligenteVen');
var modalDialogModeloInteligenteVen = document.querySelector('.modal-dialog');
var galleryImgModeloInteligenteVen = document.getElementById('galleryImgModeloInteligenteVen');
var imageContainerModeloInteligenteVen = document.getElementById('imageContainerModeloInteligenteVen');
var imagesModeloInteligenteVen = [
  "/assets/img/slides/ModeloInteligenteVen1.png",
  "/assets/img/slides/ModeloInteligenteVen2.png",
  "/assets/img/slides/ModeloInteligenteVen3.png"
];
var currentIndex = 0;

document.getElementById("openModalBtnModeloInteligenteVen").onclick = function () {
  $('#myModalModeloInteligenteVen').modal('show');
}

function adjustModalSizeModeloInteligenteVen() {
  var imgWidth = galleryImgModeloInteligenteVen.naturalWidth;
  var imgHeight = galleryImgModeloInteligenteVen.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerModeloInteligenteVen.style.maxWidth = maxWidth + 'px';
  imageContainerModeloInteligenteVen.style.maxHeight = maxHeight + 'px';
  ModeloInteligenteVen.style.maxWidth = maxWidth + 'px';
  modalDialog.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnModeloInteligenteVen").onclick = function () {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesModeloInteligenteVen.length - 1;
  galleryImgModeloInteligenteVen.src = imagesModeloInteligenteVen[currentIndex];
  adjustModalSizeModeloInteligenteVen();
}

document.getElementById("nextBtnModeloInteligenteVen").onclick = function () {
  currentIndex = (currentIndex < imagesModeloInteligenteVen.length - 1) ? currentIndex + 1 : 0;
  galleryImgModeloInteligenteVen.src = imagesModeloInteligenteVen[currentIndex];
  adjustModalSizeModeloInteligenteVen();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalModeloInteligenteVen').on('shown.bs.modal', function () {
  adjustModalSizeModeloInteligenteVen();
});