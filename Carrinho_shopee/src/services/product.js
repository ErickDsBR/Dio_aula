import products from '../mocks/products.json' with {type: 'json'};


async function fetchProduct() {
    const fetchprod = products;
    console.log("meus produtos:",fetchprod);

}

async function fetchProductById(id) {
    const product = products.find(product => product.id === id);
    console.log("produto selecionado:", product);
}

export {
    fetchProduct,
    fetchProductById
};