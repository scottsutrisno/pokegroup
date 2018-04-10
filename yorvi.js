class Yorvi {
  constructor() {
      this.all = [];
  }

  add(pakemon) {
      this.all.push(pakemon);
  }
  get(name) {
      for (let i = 0; i < this.all.length; i++) {
          if (name === this.all[i].name) {
              return this.all[i];
          }
      }
  }
}

class Pakemon {
  constructor(name, hp, attack, defense, abilities) {
      this.name = name;
      this.hp = hp;
      this.attack = attack;
      this.defense = defense;
      this.abilities = abilities;
  }
}

let yorvin = new Yorvi();

function yorviAxiosCalls(callback) {
  let url1 = 'https://pokeapi.co/api/v2/pokemon/59/';
  let url2 = 'https://pokeapi.co/api/v2/pokemon/3/';
  let url3 = 'https://pokeapi.co/api/v2/pokemon/121/';

  axios
      .all([axios.get(url1), axios.get(url2), axios.get(url3)])
      .then(responses => {
          responses.forEach(response => {
              let data = response.data;
              console.log("yorvin")

              let pakemon = new Pakemon(
                  data.name,
                  data.stats[5].base_stat,
                  data.stats[4].base_stat,
                  data.stats[3].base_stat,
                  data.abilities[0].ability.name,
                  data.abilities[1].ability.name,
              );

              // data.abilities.forEach((item, ability) => {
              // pakemon.ability(item.ability.name);
              // });

              yorvin.add(pakemon);
          });
          callback(yorvin);
      });
}
