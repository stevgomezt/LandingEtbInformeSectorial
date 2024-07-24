// VisionAnalit Modal
var modalVisionAnalit = document.getElementById('myModalVisionAnalit');
var modalDVisionAnalitlogVisionAnalit = modalVisionAnalit.querySelector('.modal-dVisionAnalitlog');
var galleryImgVisionAnalit = document.getElementById('galleryImgVisionAnalit');
var imageContainerVisionAnalit = document.getElementById('imageContainerVisionAnalit');
var imagesVisionAnalit = [
  "/assets/img/slides/VisionAnalit1.jpg",
  "/assets/img/slides/VisionAnalit2.jpg",
  "/assets/img/slides/VisionAnalit3.jpg"
];
var currentIndexVisionAnalit = 0;

document.getElementById("openModalBtnVisionAnalit").onclick = function () {
  $('#myModalVisionAnalit').modal('show');
}

function adjustModalSizeVisionAnalit() {
  var imgWidth = galleryImgVisionAnalit.naturalWidth;
  var imgHeight = galleryImgVisionAnalit.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerVisionAnalit.style.maxWidth = maxWidth + 'px';
  imageContainerVisionAnalit.style.maxHeight = maxHeight + 'px';
  modalDVisionAnalitlogVisionAnalit.style.maxWidth = maxWidth + 'px';
  modalDVisionAnalitlogVisionAnalit.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnVisionAnalit").onclick = function () {
  currentIndexVisionAnalit = (currentIndexVisionAnalit > 0) ? currentIndexVisionAnalit - 1 : imagesVisionAnalit.length - 1;
  galleryImgVisionAnalit.src = imagesVisionAnalit[currentIndexVisionAnalit];
  adjustModalSizeVisionAnalit();
}

document.getElementById("nextBtnVisionAnalit").onclick = function () {
  currentIndexVisionAnalit = (currentIndexVisionAnalit < imagesVisionAnalit.length - 1) ? currentIndexVisionAnalit + 1 : 0;
  galleryImgVisionAnalit.src = imagesVisionAnalit[currentIndexVisionAnalit];
  adjustModalSizeVisionAnalit();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalVisionAnalit').on('shown.bs.modal', function () {
  adjustModalSizeVisionAnalit();
});
