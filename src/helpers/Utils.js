import { toast } from 'react-toastify';

class Utils {
  static pagination() {

  }

  static setCart(product) {
    console.log(product);
    let productData;
    if (JSON.parse(localStorage.getItem('cartItem')) && JSON.parse(localStorage.getItem('cartItem')) !== 'undefined') {
      const existProduct = JSON.parse(localStorage.getItem('cartItem')).filter((c) => +c.product.id === +product.product.id);
      if (existProduct.length) {
        const filterData = JSON.parse(localStorage.getItem('cartItem')).filter((c) => +c.product.id !== +product.product.id);
        if (existProduct[0].quantity + product.quantity > product.product.countProduct) {
          toast.error('no');
          return;
        }
        product.quantity = existProduct[0].quantity + product.quantity;
        filterData.push(product);
        productData = filterData;
      } else {
        productData = [...JSON.parse(localStorage.getItem('cartItem')), product];
      }
    } else {
      productData = [product];
    }
    toast.success('yes');
    localStorage.setItem('cartItem', JSON.stringify(productData));
  }

  static deleteFromCart(id) {
    const allProduct = JSON.parse(localStorage.getItem('cartItem'));
    const filteredProduct = allProduct.filter((c) => c.id !== id);
    localStorage.setItem('cartItem', JSON.stringify(filteredProduct));
  }

  static totalPrice(data) {
    let count = 0;
    data.map((c) => {
      count += +c.price;
      return true;
    });
    return count;
  }
}

export default Utils;
