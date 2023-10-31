var url = "https://picsoung.typeform.com/to/AEUNRk83#utm_source=tf-embed-cookies" // NOTE: Replace with your typeform URL
var FORM_ID = "AEUNRk83" // NOTE: Replace with your typeform id

var wrapperElement = document.getElementById('wrapper')

var displayed = getCookie("displayed_typeform"); //
if (displayed){
  wrapperElement.innerHTML="<h2>Typeform already displayed once.</h2>"
} else if(!displayed && displayed === "") {
  // setCookie("displayed_typeform", true, 365);
  showEmbed();
}

function showEmbed(){ // call this function to display the embed typeform
  window.tf.createWidget(
    FORM_ID,
    {
      container: wrapperElement,
      hideHeaders: true,
      hideFooter: true,
      onSubmit: (event) => { //setup the cookie when form is submitted
        console.log(event.response_id)
        setCookie("displayed_typeform", true, 365);
      },
    },
  )
}

// Cookie manipulation
// From https://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) { 
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}