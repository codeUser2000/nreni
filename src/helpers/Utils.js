import { toast } from 'react-toastify';

class Utils {
  static pagination() {

  }

  static translation(data) {
    const lang = localStorage.getItem('lang');
    if (lang && lang === 'en') {
      return data.translationEn;
    }
    if (lang && lang === 'ru') {
      return data.translationRu;
    }
    if (lang && lang === 'arm') {
      return data.translationArm;
    }
    return data.translationEn;
  }

  static changeCount(cart, product, opp) {
    cart.map((c) => {
      if (+c.product.id === +product.product.id) {
        if (opp === '+' && +c.quantity + 1 <= +product.product.countProduct) {
          c.quantity += 1;
          c.price += +c.product.price;
        } else if (opp === '-' && +product.quantity > 1) {
          c.quantity -= 1;
          c.price -= +c.product.price;
        } else {
          toast.error('you cant add product');
          return;
        }
      }
      // eslint-disable-next-line consistent-return
      return c;
    });
    localStorage.setItem('cartItem', JSON.stringify(cart));
  }

  static setCart(product) {
    let productData;
    const cart = JSON.parse(localStorage.getItem('cartItem'));
    if (cart && cart.length && cart !== 'undefined') {
      productData = cart.map((c) => {
        if (+c.product.id === +product.product.id) {
          if (+c.quantity + +product.quantity > +product.product.countProduct) {
            toast.error('You cant set new product');
            return c;
          }
          c.quantity += product.quantity;
          c.price = c.quantity * c.product.price;
        }
        // eslint-disable-next-line consistent-return
        return c;
      });
      if (cart.filter((c) => +c.product.id !== +product.product.id).length) {
        productData = [...cart, product];
      }
    } else {
      productData = [product];
    }
    toast.success('Product is set');
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
