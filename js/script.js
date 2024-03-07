function updatemenu() {
  if (document.getElementById("responsive-menu").checked == true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
  }else{
    document.getElementById("menu").style.borderRadius = "10px";
  }
}
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-B53HZRQP67');