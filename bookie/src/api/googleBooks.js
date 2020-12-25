import axios from 'axios';

const googleBooks = axios.create({
    baseURL: "https://www.googleapis.com/"
});
const getBookData  = (searchValue, setBooks)=>{
    googleBooks.get("/books/v1/volumes",{
        params:{
         q:searchValue    
        }
    }).then((response)=>{
        setBooks(response.data.items);
    }
    )

}
export default getBookData;