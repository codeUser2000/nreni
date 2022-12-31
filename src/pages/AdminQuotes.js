import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminWrapper from '../components/AdminWrapper';
import { deleteBlockquoteRequest, getBlockquoteDataRequest } from '../store/actions/blockquote';

function AdminQuotes() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const pagination = useSelector((state) => state.product.pagination);
  const quote = useSelector((state) => state.blockquote.blockquotesData);

  useEffect(() => {
    dispatch(getBlockquoteDataRequest(1));
  }, []);
  const handleDelete = useCallback(async (id) => {
    await dispatch(deleteBlockquoteRequest(id));
  }, []);
  const handleChange = useCallback((ev, value) => {
    setPage(value);
    dispatch(getBlockquoteDataRequest(page));
  }, [pagination]);

  return (
    <AdminWrapper>
      <div className="adminQuotes">
        <div className="adminProductsBlock">
          <p className="adminTitle">Customer feedback</p>
        </div>
        <table className="adminTable">
          <thead className="adminTableThead">
            <tr className="adminTableTheadTitles">
              <td>customer name</td>
              <td>customer quote</td>
              <td>actions</td>
            </tr>
          </thead>
          <tbody className="adminTableTbody">
            {quote.length ? quote.map((q) => (
              <tr key={q.id}>
                <td>
                  {q.firstName}
                  {' '}
                  {q.lastName}
                </td>
                <td>
                  {q.message}
                </td>
                <td>
                  <div className="adminQuoteBtn">
                    <button
                      type="button"
                      className="adminQuoteDelete"
                      onClick={() => handleDelete(q.id)}
                    >
                      delete
                    </button>
                    <button
                      type="button"
                      className="adminQuoteView"
                    >
                      view
                    </button>
                  </div>
                </td>
              </tr>
            )) : 'loading...'}
          </tbody>
        </table>
        <Pagination count={+pagination} page={page} onChange={handleChange} />
      </div>
    </AdminWrapper>

  );
}

export default AdminQuotes;
