import { toast } from 'react-toastify';
import _ from 'lodash';

class Utils {
  static changeCount(cart, product, opp) {
    cart.map((c) => {
      if (+c.product.id === +product.product.id) {
        if (opp === '+' && +c.quantity + 1 <= +product.product.countProduct) {
          c.quantity += 1;
          c.price += +c.product.newPrice;
        } else if (opp === '-' && +product.quantity > 1) {
          c.quantity -= 1;
          c.price -= +c.product.newPrice;
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
    let error = false;
    const cart = JSON.parse(localStorage.getItem('cartItem'));
    if (cart && cart.length && cart !== 'undefined') {
      productData = cart.map((c) => {
        if (+c.product.id === +product.product.id) {
          if (+c.quantity + +product.quantity > +product.product.countProduct) {
            toast.error('You cant set new product');
            error = true;
            return c;
          }
          c.quantity += product.quantity;
          c.price = Math.round(+c.quantity * +c.product.newPrice);
        }
        // eslint-disable-next-line consistent-return
        return c;
      });
      const productAddCount = cart.find((c) => +c.product.id === +product.product.id);

      productData = _.isEmpty(productAddCount)
        ? [...productData, product]
        : productData;
    } else {
      productData = [product];
    }
    if (!error) {
      toast.success('Product is set');
    }
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

  static setPaymentCartData(data) {
    const final = [];
    data.map((d) => {
      final.push({
        price: d.price,
        quantity: d.quantity,
        productId: d.product.id,
      });
      return true;
    });
    return final;
  }
}

export default Utils;
