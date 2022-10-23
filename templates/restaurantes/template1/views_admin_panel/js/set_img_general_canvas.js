
function put_img(canv,element){

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



const selectFile = document.querySelector("#icon_img_path");
const selectFile2 = document.querySelector("#logo_img_path");


selectFile.addEventListener("change", () => {
  put_img("#canvas_icon_img",selectFile);
});

selectFile2.addEventListener("change", () => {
  put_img("#canvas_logo_img",selectFile2);
});