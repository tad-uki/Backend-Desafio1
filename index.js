class ProductManager{
    constructor(){
        this.products = [];
    };

    addProduct = (newProduct) =>{
        if(!(("title" && "description" && "price" && "thumbnail" && "code" && "stock") in newProduct)){
            return "Please fill each property correctly";
        }
        else if(this.products.find(product=> product.code === newProduct.code)){
            return "The product is already on the record";
        } 
        else{
            newProduct.id = this.products.length + 1;
            this.products.push(newProduct);
        };
    };

    getProducts= () => this.products;

    getProductById = (id) =>{
        const objectFound = this.products.find(product => product.id === id);
        if(!objectFound){
            return `Not Found`;
        } else{
            return objectFound;
        }   
    }
};