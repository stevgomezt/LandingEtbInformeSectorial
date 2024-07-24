var modal = document.getElementById('myModalBenchmarking');
var modalDialog = document.querySelector('.modal-dialog');
var galleryImgBenchmarking = document.getElementById('galleryImgBenchmarking');
var imageContainerBenchmarking = document.getElementById('imageContainerBenchmarking');
var imagesBenchmarking = [
  "/assets/img/slides/modelosAten.jpg"
];
var currentIndex = 0;

document.getElementById("openModalBtnBenchmarking").onclick = function () {
  $('#myModalBenchmarking').modal('show');
}

function adjustModalSize() {
  var imgWidth = galleryImgBenchmarking.naturalWidth;
  var imgHeight = galleryImgBenchmarking.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerBenchmarking.style.maxWidth = maxWidth + 'px';
  imageContainerBenchmarking.style.maxHeight = maxHeight + 'px';
  modalDialog.style.maxWidth = maxWidth + 'px';
  modalDialog.style.maxHeight = maxHeight + 'px';
}

// document.getElementById("prevBtnBenchmarking").onclick = function () {
//   currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesBenchmarking.length - 1;
//   galleryImgBenchmarking.src = imagesBenchmarking[currentIndex];
//   adjustModalSize();
// }

// document.getElementById("nextBtnBenchmarking").onclick = function () {
//   currentIndex = (currentIndex < imagesBenchmarking.length - 1) ? currentIndex + 1 : 0;
//   galleryImgBenchmarking.src = imagesBenchmarking[currentIndex];
//   adjustModalSize();
// }

// Ajustar el tamaño del modal cuando se muestra
$('#myModalBenchmarking').on('shown.bs.modal', function () {
  adjustModalSize();
});