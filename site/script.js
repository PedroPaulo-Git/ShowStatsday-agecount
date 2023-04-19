
function charge () {
var msg = window.document.getElementById('msg')
var img = document.getElementById('photo')
var data = new Date ()
//var hour = 22
var hour = data.getHours ()
msg.innerHTML = `Now is ${hour} Hours` 
if (hour >= 0 && hour < 12){
    img.src = "manha.png" 
    document.body.style.background = 'green'
    //good day
} else if (hour >= 12 && hour <=18 ){

    img.src = 'tarde.png'
    document.body.style.background = 'yellow'
    //Good afternoon
}else {

    img.src = "noite.png"
    document.body.style.background = 'grey'
    //Good night

}




}