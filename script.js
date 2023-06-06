const qrText=document.getElementById("qr-text")
const sizes=document.getElementById("sizes")
const generateBtn=document.getElementById("generateBtn")
const downloadBtn=document.getElementById("downloadBtn")

const qrContainer=document.querySelector(".qr-body");

let size=sizes.value;
generateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    isEmpty();
    

})
function isEmpty(){
    if(qrText.value.length>0){

        generateQRCode();
    }
    else{
        alert("enter something")
    }
}
sizes.addEventListener("change",(e)=>{
    size=e.target.value;
    isEmpty()

})

function generateQRCode(){
    qrContainer.innerHTML=""
    // qrText.value=""
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
        correctLevel : QRCode.CorrectLevel.H


    })
    
}

downloadBtn.addEventListener("click",(e)=>{
    let img=document.querySelector('.qr-body img')
    if(img!==null){
        let imgAtrr= img.getAttribute('src');
        downloadBtn.setAttribute('href',imgAtrr);
    }
    else{
        downloadBtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`)
    }
})

