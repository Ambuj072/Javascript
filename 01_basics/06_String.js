const firstName="Ambuj"
const lastName="dubey"
console.log(firstName + " " +lastName);
console.log(`My name is ${firstName} ${lastName}`);

const name=new String('Ambuj dubey')
console.log(name);//[String: 'Ambuj dubey']
console.log(name.charAt(0));//A
console.log(name.valueOf());//Ambuj dubey


const fullName="    Ambuj dubey"
console.log(fullName.length);//15
console.log(fullName.indexOf('m'));//5
console.log(fullName.substring(0,5));//Ambuj
console.log(fullName.trim());//it will neglect the extra spaces at the stating and end
console.log(fullName.toUpperCase())//  AMBUJ DUBEY
console.log(fullName.replace('Ambuj','Anuj'))//Anuj dubey
console.log(fullName.split('Ambuj'));//[ '    ', ' dubey' ]













