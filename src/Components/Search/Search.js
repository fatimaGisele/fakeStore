import { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const Search = ({mySearch}) => {

    const [prod, setProd ] = useState('');

    const findProd = (e) => {
        e.preventDefault();
        mySearch(prod);
        console.log(prod);
        e.target.reset();
    }

    return ( 
        <form onSubmit={findProd}>
             <TextField 
             id="outlined-basic" 
             label="Producto" 
             variant="outlined" 
             value={prod} 
             name='prod' 
             onChange={(e)=>setProd(e.target.value)}/>
             <Button/>
        </form>
     );
}
 
export default Search;