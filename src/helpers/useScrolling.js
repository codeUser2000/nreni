import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDataRequest } from '../store/actions/product';

export default function useScrolling(pageNumber) {
  const [loading, setLoading] = useState(true);
  const productData = useSelector((state) => state.product.productsData);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(getProductDataRequest(pageNumber));
    setLoading(false);
    console.log(89987, pageNumber, productData);
  }, [pageNumber]);
  return { loading };
}
