const products = [
     {name: 'iphone 14', price : 70000 },
     {name: 'apple i', price : 8500 },
     {name: 'keyboard mobile', price : 1700 },
     {name: 'mouse realme', price : 1500 },
     {name: 'realme x2', price : 24000 },
     {name: 'M-10 speaker realme', price : 630 },
     {name: 'blue light mobile', price : 450 }
];

for (const product of products){
     if(product.price < 10000){
          continue;
     }
     console.log(product);
}