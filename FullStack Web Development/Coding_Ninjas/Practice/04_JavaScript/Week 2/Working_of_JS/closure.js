// let a = 'Global';

// function outerPrint(){
//     let b = 'OuterPrint';

//     return function innerPrint(){
//         let c = 'innerPrint';
//         return `${a} -> ${b} -> ${c}`;
//     }
// }
// const show = outerPrint();
// console.log(show);
// const printInner = show();
// console.log(printInner);

function cart() {
  let items = 0;
  return {
    addItem: function () {
      items++;
    },
    getItem: function () {
      return items;
    },
  };
}
const closure = cart();
closure.addItem();
closure.addItem();
closure.addItem();
console.log(closure.getItem());
