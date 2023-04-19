function verify() {
    var data = new Date()
    var age = data.getFullYear()
    var fage = document.getElementById ('txty')
    var res = document.querySelector('div#res')
 if(fage.value.length == 0 || fage.value > age ){
     window.alert('Verify again,something wrong')
 }else{
     var fsex = document.getElementsByName('sex1')
     var age1 = age - Number(fage.value)
     res.innerHTML = `Age Old Calculated ${age1}`
     var gen = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'photo')
        if(fsex[0].checked) {
            gen = 'Man'
            if (age1 >= 0 && age1 <= 10) {

                    img.setAttribute('src','foto-bebe-m.png')
                //kid
            }else if (age1 >10 && age1 <= 21 ){
                //yung
                img.setAttribute('src','foto-jovem-m.png')
            }else if(age1 > 21 && age1 < 50 ){
                //adult
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                img.setAttribute('src','foto-idoso-m.png')
                //old
            }
            }
        

      else if (fsex [1].checked) {
            gen = 'Women'
            if(age1 > 0 && age1 <10 ){
                //kid
                img.setAttribute('src','foto-bebe-f.png')
            }else if (age1 >10 &&  age1 <= 21){
                img.setAttribute('src','foto-jovem-f.png')
                //yung

            }else if (age1 >21 && age1 < 50 ){
                img.setAttribute('src','foto-adulto-f.png')
                //adult
            }else{
                img.setAttribute('src','foto-idoso-f.png')
                //old
            }
        
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We Detect ${gen} with ${age1} years old`
      res.appendChild(img)
}
}