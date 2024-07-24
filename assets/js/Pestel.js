var modalPestel = document.getElementById('myModalPestel');
var modalDialogPestel = document.querySelector('.modal-dialog');
var galleryImgPestel = document.getElementById('galleryImgPestel');
var imageContainerPestel = document.getElementById('imageContainerPestel');
var imagesPestel = [
  "/assets/img/slides/pestel1.png",
  "/assets/img/slides/pestel2.png",
  "/assets/img/slides/pestel3.png"
];
var currentIndexPestel = 0;

document.getElementById("openModalBtnPestel").onclick = function () {
  $('#myModalPestel').modal('show');
}

function adjustModalSizePestel() {
  var imgWidth = galleryImgPestel.naturalWidth;
  var imgHeight = galleryImgPestel.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerPestel.style.maxWidth = maxWidth + 'px';
  imageContainerPestel.style.maxHeight = maxHeight + 'px';
  Pestel.style.maxWidth = maxWidth + 'px';
  modalDialog.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnPestel").onclick = function () {
  currentIndexPestel = (currentIndexPestel > 0) ? currentIndexPestel - 1 : imagesPestel.length - 1;
  galleryImgPestel.src = imagesPestel[currentIndexPestel];
  adjustModalSizePestel();
}

document.getElementById("nextBtnPestel").onclick = function () {
  currentIndexPestel = (currentIndexPestel < imagesPestel.length - 1) ? currentIndexPestel + 1 : 0;
  galleryImgPestel.src = imagesPestel[currentIndexPestel];
  adjustModalSizePestel();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalPestel').on('shown.bs.modal', function () {
  adjustModalSizePestel();
});