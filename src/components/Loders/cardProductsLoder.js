import { getShoppingCart } from "../../utilities/fakedb";

const cardProductsLoader = async ()=>{
const loadedProducts = await fetch ('products.json');
const products =await loadedProducts.json();
// if data is in database, you have to use async await
const storedCart = getShoppingCart();
const savedCard = [];
for(const id in storedCart){
    const addedProduct = products.find (pd => pd.id === id);
    if(addedProduct){
       const quantity = storedCart[id];
       addedProduct.quantity = quantity;
       savedCard.push(addedProduct); 
    }
}
return savedCard;
}

export default cardProductsLoader;