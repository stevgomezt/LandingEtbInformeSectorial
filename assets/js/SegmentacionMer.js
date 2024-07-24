var modalSegmentacionMer = document.getElementById('myModalSegmentacionMer');
var modalDialogSegmentacionMer = document.querySelector('.modal-dialog');
var galleryImgSegmentacionMer = document.getElementById('galleryImgSegmentacionMer');
var imageContainerSegmentacionMer = document.getElementById('imageContainerSegmentacionMer');
var imagesSegmentacionMer = [
  "/assets/img/slides/SegmentacionMer1.jpg",
  "/assets/img/slides/SegmentacionMer2.jpg",
  "/assets/img/slides/SegmentacionMer3.jpg",
  "/assets/img/slides/SegmentacionMer4.jpg",
  "/assets/img/slides/SegmentacionMer5.jpg"
];
var currentIndexSegmentacionMer = 0;

document.getElementById("openModalBtnSegmentacionMer").onclick = function () {
  $('#myModalSegmentacionMer').modal('show');
}

function adjustModalSizeSegmentacionMer() {
  var imgWidth = galleryImgSegmentacionMer.naturalWidth;
  var imgHeight = galleryImgSegmentacionMer.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerSegmentacionMer.style.maxWidth = maxWidth + 'px';
  imageContainerSegmentacionMer.style.maxHeight = maxHeight + 'px';
  SegmentacionMer.style.maxWidth = maxWidth + 'px';
  modalDialog.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnSegmentacionMer").onclick = function () {
  currentIndexSegmentacionMer = (currentIndexSegmentacionMer > 0) ? currentIndexSegmentacionMer - 1 : imagesSegmentacionMer.length - 1;
  galleryImgSegmentacionMer.src = imagesSegmentacionMer[currentIndexSegmentacionMer];
  adjustModalSizeSegmentacionMer();
}

document.getElementById("nextBtnSegmentacionMer").onclick = function () {
  currentIndexSegmentacionMer = (currentIndexSegmentacionMer < imagesSegmentacionMer.length - 1) ? currentIndexSegmentacionMer + 1 : 0;
  galleryImgSegmentacionMer.src = imagesSegmentacionMer[currentIndexSegmentacionMer];
  adjustModalSizeSegmentacionMer();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalSegmentacionMer').on('shown.bs.modal', function () {
  adjustModalSizeSegmentacionMer();
});