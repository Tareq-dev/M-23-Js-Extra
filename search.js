const products = [
     {name: 'iphone 14', price : 70000 },
     {name: 'apple i', price : 8500 },
     {name: 'keyboard mobile', price : 1700 },
     {name: 'mouse realme', price : 1500 },
     {name: 'realme x2', price : 24000 },
     {name: 'M-10 speaker realme', price : 630 },
     {name: 'blue light mobile', price : 450 }
];

function searchBox(products, searchText) {
     if (typeof searchText != 'string'){
          return 'please give a real product name which we have already'
        }
const result = [];
for (const product of products) {
     if(product.name.includes(searchText)) {
         result.push(product);
     }
}
return result;
}
const match = searchBox(products, 'mobile');

console.log(match);