let allPoke = [];




class Pokemon{
    constructor(name,hp,attack,defense){
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = []
        this.name = name

    }

    ability(ability){

        this.abilities.push(ability)
    }

}
class Scott {
    constructor(){
        this.pokemon = [];
    }
    all(){
        return this.pokemon

    }
    add(addToArray){
        this.pokemon.push(addToArray)
    }

}

let scooter = new Scott()
function scottPoke(callback) {

let url1 = "https://pokeapi.co/api/v2/pokemon/393/"
let url2 = "https://pokeapi.co/api/v2/pokemon/394/"
let url3 = "https://pokeapi.co/api/v2/pokemon/395/"


axios.all([
  axios.get(url1),
  axios.get(url2),
  axios.get(url3)
])
.then(responses => {

  responses.forEach(response => {

let data = response.data
let pokemon = new Pokemon(
data.name,
data.stats[5].base_stat,
data.stats[4].base_stat,
data.stats[3].base_stat,
)

data.abilities.forEach((item, ability) => {
        pokemon.ability(item.ability.name)
  })

  scooter.add(pokemon)
  })
callback(scooter)
})

}


// console.log(scooter.all)

// axios.get("https://pokeapi.co/api/v2/pokemon/393/")
// .then((response) => {
//     let data = response.data
//     // let hp = document.querySelector("#piplup-hp")
//     // let attack = document.querySelector("#piplup-attack")
//     // let defense = document.querySelector("#piplup-defense")
//     // let abilities = document.querySelector("#piplup-abilities")
//
//     let piplup = new Pokemon(
//         data.name,
//         data.stats[5].base_stat,
//         data.stats[4].base_stat,
//         data.stats[3].base_stat,
//     )
//
//     data.abilities.forEach((item, ability) => {
//         piplup.ability(item.ability.name)
//
// })
//
// scooter.add(pokemon)
// })
//
// // callback(scooter)
//
//
//
//
//
//
//
//
//
//
//
//
//
//     data.abilities.forEach((item, ability) => {
//         piplup.ability(item.ability.name)
//         // abilities.innerHTML += item.ability.name + "<br>"
//
//     })
//     scooter.add(piplup)
//     // hp.innerHTML = piplup.hp
//     // attack.innerHTML = piplup.attack
//     // defense.innerHTML = piplup.defense
//
//
//
//
//
// // PRINPLUP //
//
//
//   axios.get("https://pokeapi.co/api/v2/pokemon/394/")
// .then((response) => {
//     let data = response.data
//     let hp = document.querySelector("#prinplup-hp")
//     let attack = document.querySelector("#prinplup-attack")
//     let defense = document.querySelector("#prinplup-defense")
//     let abilities = document.querySelector("#prinplup-abilities")
//     let prinplup = new Pokemon(
//         data.name,
//         data.stats[5].base_stat,
//         data.stats[4].base_stat,
//         data.stats[3].base_stat,
//
//       )
//         allPoke.push(prinplup);
//
//     data.abilities.forEach((item, ability) => {
//         prinplup.ability(item.ability.name)
//         // abilities.innerHTML += item.ability.name +"<br>"
//     })
//     scooter.add(prinplup)
//     // hp.innerHTML = prinplup.hp
//     // attack.innerHTML = prinplup.attack
//     // defense.innerHTML = prinplup.defense
// })
//
//
// // EMPOLEON //
//
//
//   axios.get("https://pokeapi.co/api/v2/pokemon/395/")
//   .then((response) => {
//       let data = response.data
//       let hp = document.querySelector("#empoleon-hp")
//       let attack = document.querySelector("#empoleon-attack")
//       let defense = document.querySelector("#empoleon-defense")
//       let abilities = document.querySelector("#empoleon-abilities")
//       let empoleon = new Pokemon(
//           data.name,
//           data.stats[5].base_stat,
//           data.stats[4].base_stat,
//           data.stats[3].base_stat,
//         )
//
//           allPoke.push(empoleon);
//
//       data.abilities.forEach((item, ability) => {
//           empoleon.ability(item.ability.name)
//           // abilities.innerHTML += item.ability.name +"<br>"
//       })
//       scooter.add(empoleon)
//       // hp.innerHTML = empoleon.hp
//       // attack.innerHTML = empoleon.attack
//       // defense.innerHTML = empoleon.defense
//   })
