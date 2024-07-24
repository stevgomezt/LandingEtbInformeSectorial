// IA Modal
var modalInnovacionTecn = document.getElementById('myModalInnovacionTecn');
var modalDialogInnovacionTecn = modalInnovacionTecn.querySelector('.modal-dialog');
var galleryImgInnovacionTecn = document.getElementById('galleryImgInnovacionTecn');
var imageContainerInnovacionTecn = document.getElementById('imageContainerInnovacionTecn');
var imagesInnovacionTecn = [
  "/assets/img/slides/innovacionTec1.jpg",
  "/assets/img/slides/innovacionTec2.jpg",
  "/assets/img/slides/innovacionTec3.jpg",
  "/assets/img/slides/innovacionTec4.jpg"
];
var currentIndexInnovacionTecn = 0;

document.getElementById("openModalBtnInnovacionTecn").onclick = function () {
  $('#myModalInnovacionTecn').modal('show');
}

function adjustModalSize() {
  var imgWidth = galleryImgInnovacionTecn.naturalWidth;
  var imgHeight = galleryImgInnovacionTecn.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerInnovacionTecn.style.maxWidth = maxWidth + 'px';
  imageContainerInnovacionTecn.style.maxHeight = maxHeight + 'px';
  modalDialogInnovacionTecn.style.maxWidth = maxWidth + 'px';
  modalDialogInnovacionTecn.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnInnovacionTecn").onclick = function () {
  currentIndexInnovacionTecn = (currentIndexInnovacionTecn > 0) ? currentIndexInnovacionTecn - 1 : imagesInnovacionTecn.length - 1;
  galleryImgInnovacionTecn.src = imagesInnovacionTecn[currentIndexInnovacionTecn];
  adjustModalSize();
}

document.getElementById("nextBtnInnovacionTecn").onclick = function () {
  currentIndexInnovacionTecn = (currentIndexInnovacionTecn < imagesInnovacionTecn.length - 1) ? currentIndexInnovacionTecn + 1 : 0;
  galleryImgInnovacionTecn.src = imagesInnovacionTecn[currentIndexInnovacionTecn];
  adjustModalSize();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalInnovacionTecn').on('shown.bs.modal', function () {
  adjustModalSize();
});
