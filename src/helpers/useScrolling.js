import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDataRequest } from '../store/actions/product';

export default function useScrolling(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const productData = useSelector((state) => state.product.productsData);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(89987);
    setLoading(true);
    dispatch(getProductDataRequest(pageNumber));
    setLoading(false);
    setHasMore(productData.length > 0);
  }, [pageNumber]);
  return { loading, hasMore };
}
