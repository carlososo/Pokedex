(function() {
    'use strict'
    let planta = "#9bcc50";
    let veneno = "#b97fc9";
    let fuego = "#FD7D24";
    let volador = "#3dc7ef";
    let agua = "#4592C4";
    let bicho = "#729f3f";
    let normal = "#A4ACAF";
    let electrico = "#EED535";
    let tierra = "#ab9842";
    let hada = "#FdB0E9";
    let lucha = "#D56723";
    let psiquico = "#F366B9";
    let roca = "#A38C21";
    let acero = "#9Eb7B8";
    let fantasma = "#7b62A3";
    let hielo = "#51C4E7";
    let dragon = "#f16e57";
    let siniestro = "#707070";
    let buscar = document.getElementById('buscar');

    for (let i = 0; i <= pokemons.length - 1; i++) {
        insertarPokemons(pokemons[i]);
    }
    let tipoPokemon = document.getElementsByClassName('tipo1');
    let tipoPokemon2 = document.getElementsByClassName('tipo2');
    cambiarColor(tipoPokemon, 'ptipo1');
    cambiarColor(tipoPokemon2, 'ptipo2');
    //funcion para cambiar de color a los botones dependiendo de las clases de los Pokemones
    function cambiarColor(tipo, content) {
        for (let elementosP in tipo) {
            try {
                let contenidoo = document.getElementsByClassName(content)[elementosP].innerHTML;
                switch (contenidoo) {
                    case 'Grass':
                        tipo[elementosP].style.backgroundColor = planta;
                        break;
                    case 'Poison':
                        tipo[elementosP].style.backgroundColor = veneno;
                        break;
                    case 'Fire':
                        tipo[elementosP].style.backgroundColor = fuego;
                        break;
                    case 'Flying':
                        tipo[elementosP].style.backgroundColor = volador;
                        break;
                    case 'Water':
                        tipo[elementosP].style.backgroundColor = agua;
                        break;
                    case 'Bug':
                        tipo[elementosP].style.backgroundColor = bicho;
                        break;
                    case 'Normal':
                        tipo[elementosP].style.backgroundColor = normal;
                        break;
                    case 'Electric':
                        tipo[elementosP].style.backgroundColor = electrico;
                        break;
                    case 'Ground':
                        tipo[elementosP].style.backgroundColor = tierra;
                        break;
                    case 'Fairy':
                        tipo[elementosP].style.backgroundColor = hada;
                        break;
                    case 'Fighting':
                        tipo[elementosP].style.backgroundColor = lucha;
                        break;
                    case 'Psychic':
                        tipo[elementosP].style.backgroundColor = psiquico;
                        break;
                    case 'Rock':
                        tipo[elementosP].style.backgroundColor = roca;
                        break;
                    case 'Steel':
                        tipo[elementosP].style.backgroundColor = acero;
                        break;
                    case 'Ghost':
                        tipo[elementosP].style.backgroundColor = fantasma;
                        break;
                    case 'Ice':
                        tipo[elementosP].style.backgroundColor = hielo;
                        break;
                    case 'Dragon':
                        tipo[elementosP].style.backgroundColor = dragon;
                        break;
                    case 'Dark':
                        tipo[elementosP].style.backgroundColor = siniestro;
                        break;
                    default:
                        tipo[elementosP].style.display = "none";


                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    //funcion para sacar los 00 y 0 para las fotos chiditas de los pokemons 
    function idPokemon(data) {
        data = data + "";
        if (data.length > 0 && data.length < 2) {
            data = "00" + data
            return data;
        } else if (data.length > 1 && data.length < 3) {
            data = "0" + data;
            return data;
        } else
            return data;
    }
    // funcion para busqueda de pokemon
    buscar.addEventListener('click', function() {
        let busqueda = document.getElementById('busqueda').value;
        busqueda = busqueda.trim();
        let busquedaPokemons = [];
        let fila = document.getElementById('fila');
        fila.innerHTML = "";
        for (let p in pokemons) {
            if (pokemons[p].name.english.includes(busqueda) || pokemons[p].id == busqueda) {
                busquedaPokemons.push(pokemons[p])
                insertarPokemons(pokemons[p], 'center');
            }
        }
        cambiarColor(tipoPokemon, 'ptipo1');
        cambiarColor(tipoPokemon2, 'ptipo2');


    });
    //funcion para la insertada de Pokemos y evitar código repetido
    function insertarPokemons(elementos) {
        let fila = document.getElementById('fila');
        let carta = document.createElement('div');
        carta.classList.add('col-xl-3');
        carta.classList.add('col-lg-4');
        carta.classList.add('col-md-6');
        carta.classList.add(`justify-content-between`);
        carta.classList.add('cartas')
        carta.setAttribute('id', elementos.id);
        carta.innerHTML = `<div class="card borde my-4" >
                    <figure class="borde fondo-imagen ">
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idPokemon(elementos.id)}.png " class="card-img-top " alt="... ">
                    </figure>
                    <div class="card-body ">
                    <p class="text-muted " id=" ">N. ${idPokemon(elementos.id)}</p>
                    <p id="nombre${idPokemon(elementos.id)} ">${elementos.name.english}</p>
                    <div class="d-flex justify-content-center ">
                        <div class="tipo1 mr-5">
                            <p class="ptipo1">${elementos.type[0]}</p>
                        </div>
                        <div class="tipo2 ">
                            <p class="ptipo2">${elementos.type[1]}</p>
                        </div>
                    </div>
                    </div>
                    </div>`


        fila.appendChild(carta)
        carta.addEventListener('click', function(event) {
            $('#exampleModal').modal('show');
            document.getElementById('exampleModalLabel').innerHTML = elementos.name.english;
            document.getElementById('imagenModal').setAttribute('src', `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idPokemon(elementos.id)}.png`)
            document.getElementById('english').innerHTML = "   " + elementos.name.english;
            document.getElementById('japanese').innerHTML = "   " + elementos.name.japanese;
            document.getElementById('hp').innerHTML = "   " + elementos.base.HP;
            document.getElementById('att').innerHTML = "   " + elementos.base.Attack;
            document.getElementById('def').innerHTML = "   " + elementos.base.Defense;
            document.getElementById('satt').innerHTML = "   " + elementos.base["Sp. Attack"];
            document.getElementById('sdef').innerHTML = "   " + elementos.base["Sp. Defense"];
            document.getElementById('spd').innerHTML = "   " + elementos.base.Speed
        });
    }



})()