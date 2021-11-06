let field   = document.querySelector('#field');
let message = document.querySelector('#message');

let cities = [];
let i = 0
let allCities = [];

field.addEventListener('keyup',function(event){

    if (event.keyCode == 13) {

        if(cities.length !=0){

        let a = field.value.split('') //сплитим, чтоб взять первую букву слова
        let b = cities[i].split('').reverse() //спилит и переворачиваем, чтоб взять последнюю букву
        let z = field.value.toLowerCase() // перемнная в нижний регистр

            if(a[0].toLowerCase() == b[0] && cities.indexOf(z) == -1 ){
            i++
            cities.push(z)
            message.innerHTML = field.value+'<br>'+ 'Тебе на - ' + field.value[field.value.length-1]
            }else if(cities.indexOf(z) != -1){
                message.innerHTML ='Повтор слова'+'<br>'+field.value
            }else if(a[0].toLowerCase() != b[0]){
                message.innerHTML =field.value+'<br>'+'Первая буква введенного слова не совпадает с последним предыдущего'
            }

        }else{
            cities.push(field.value.toLowerCase())
            message.innerHTML = field.value +'<br>'+ 'Тебе на - ' + field.value[field.value.length-1]
        }
        
        console.log(cities)
    }
})