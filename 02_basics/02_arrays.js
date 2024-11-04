const marval_hero=["ironman","hulk","captain America"]
const dc_hero=["superman","wondar woman"]
//marval_hero.push(dc_hero);
//console.log(marval_hero);//['ironman','hulk','captain America',[ 'superman', 'wondar woman' ]]


console.log(marval_hero.concat(dc_hero));//[ 'ironman', 'hulk', 'captain America', 'superman', 'wondar woman' ]

const all_heros=[...marval_hero,...dc_hero]
console.log(all_heros);//[ 'ironman', 'hulk', 'captain America', 'superman', 'wondar woman' ]

const another_array=[1,2,[3,7,8],5,9,[0,8]]
const final_array=another_array.flat(Infinity)
console.log(final_array);//[1, 2, 3, 7, 8,5, 9, 0, 8]


console.log(Array.isArray("Ambuj"))//false
console.log((Array.from("Ambuj")));//[ 'A', 'm', 'b', 'u', 'j' ]

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]



