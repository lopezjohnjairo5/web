
function put_ours_img(canv,element){

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



const inputOursImg = document.querySelector("#ours_img_input");
const inputOursImgPeople = document.querySelector("#ours_img_people_input");


inputOursImg.addEventListener("change", () => {
  put_ours_img("#canvas_ours_img",inputOursImg);
});

inputOursImgPeople.addEventListener("change", () => {
  put_ours_img("#canvas_ours_img_people",inputOursImgPeople);
});

