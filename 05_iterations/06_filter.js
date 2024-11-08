const arr=["js","java","python"]

const value=arr.forEach((val)=>{
  console.log(val);
  return val;
  
})
console.log(value);//undefined
/*output=>
js
java
python
undefined
*/

//it will not return anything

//++++++++++++++++++++++++ filter +++++++++++++++++++++++++++

//it return value

const books = [
    {
      title: "The Great Gatsby",
      genre: "Classic Fiction",
      publishYear: 1925,
      editionYear: 1925
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Historical Fiction",
      publishYear: 1960,
      editionYear: 1960
    },
    {
      title: "1984",
      genre: "Dystopian",
      publishYear: 1949,
      editionYear: 1949
    },
    {
      title: "Pride and Prejudice",
      genre: "Romance",
      publishYear: 1813,
      editionYear: 2003
    },
    {
      title: "The Catcher in the Rye",
      genre: "Literary Fiction",
      publishYear: 1951,
      editionYear: 1991
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      publishYear: 1937,
      editionYear: 2002
    },
    {
      title: "Moby-Dick",
      genre: "Adventure",
      publishYear: 1851,
      editionYear: 1992
    }
  ];

const filBook=books.filter((books)=>books.publishYear>1950)  
console.log(filBook);



  
