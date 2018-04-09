let allPake = [];

class Pakemon{
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

class Yorvi {
    constructor(){
        this.pakemon = [];
    }

    all(){
        return this.pakemon
    }

    add(addToArray){
        this.pakemon.push(addToArray)
    }

}

let yorvin = new Yorvi()

function yorviPake(callback) {

let url1 = "https://pokeapi.co/api/v2/pokemon/59/"
let url2 = "https://pokeapi.co/api/v2/pokemon/3/"
let url3 = "https://pokeapi.co/api/v2/pokemon/121/"


axios.all([
  axios.get(url1),
  axios.get(url2),
  axios.get(url3)
]).then(responses => {

  responses.forEach(response => {
    let data = response.data

    let pakemon = new Pakemon(
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
    )

    data.abilities.forEach((item, ability) => {
      pakemon.ability(item.ability.name)
    })

  yorvin.add(pakemon)
  })

callback(yorvin)
})
}