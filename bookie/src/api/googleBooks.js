import axios from 'axios';

const googleBooks = axios.create({
    baseURL: "https://www.googleapis.com/"
});
const getBookData  = (searchValue, setBooks, startIndex, setTotalResults)=>{
    googleBooks.get("/books/v1/volumes",{
        params:{
         q:searchValue,    
         maxResults : 20,
         startIndex : startIndex
        }
    }).then((response)=>{
        console.log( "initial",response)
        setBooks(removeExceptions(response));
        if(startIndex == 0)
        setTotalResults(response.data.totalItems);
    }
    )

}
const removeExceptions = (response) =>{
    const removedExceptions = response.data.items.map((book)=>{
        if(book.volumeInfo.hasOwnProperty('publishedDate')===false)
        {
            book.volumeInfo['publishedDate'] = 'Not Available';
        }
        else if(book.volumeInfo.hasOwnProperty('imageLinks') === false || undefined)
        {
            book.volumeInfo['imageLinks'] = {thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'};
        }
        return book;
    })

    return removedExceptions;
}
export default getBookData;