
function put_galery_img(canv,element){

  const imgPrev = document.querySelector(canv);
  var ctxIP = imgPrev.getContext("2d");
  var imgQR = new Image();

  //limpiamos el canvas antes de poner una nueva img
  ctxIP.clearRect(0, 0, imgPrev.width, imgPrev.height);

  const archivos = element.files;

  if (!archivos || !archivos.length) {
    imgPrev.src = "";
    return;
  }

  const primerArchivo = archivos[0];
  const objectURL = URL.createObjectURL(primerArchivo);

  imgQR.src = objectURL;
  imgQR.onload = function(){
    ctxIP.drawImage(imgQR,0,0,imgPrev.width,imgPrev.height);
  }
}



const inputGaleryImg = document.querySelector("#galery_img_input");


inputGaleryImg.addEventListener("change", () => {
  put_galery_img("#canvas_galery_img",inputGaleryImg);
});

