import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import AdminWrapper from '../components/AdminWrapper';
import {
  deleteBlockquoteRequest,
  getAdminBlockquoteDataRequest, setViewBlockquote,
} from '../store/actions/blockquote';

function AdminQuotes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState(1);
  const pagination = useSelector((state) => state.blockquote.pagination);
  const quote = useSelector((state) => state.blockquote.blockquotesDataAdmin);
  const query = qs.parse(location.search, { arrayFormat: 'comma' });

  useEffect(() => {
    (async () => {
      setPage(+query.page || 1);
      await dispatch(getAdminBlockquoteDataRequest(query.page || 1));
    })();
  }, []);
  const handleDelete = useCallback(async (id) => {
    await dispatch(deleteBlockquoteRequest(id));
  }, []);

  const handleChange = useCallback(async (ev, value) => {
    setPage(value);
    query.page = value;
    navigate(`?${qs.stringify(query, {
      arrayFormat: 'comma',
      skipEmptyString: true,
    })}`);
  }, [location.search]);

  const handleUpdate = useCallback(async (id, ev) => {
    await dispatch(setViewBlockquote(id, ev));
  }, []);

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
                      onClick={() => handleUpdate(q.id, q.view)}
                    >
                      {q.view === 'allowed' ? 'unview' : 'view'}
                    </button>
                  </div>
                </td>
              </tr>
            )) : null}
          </tbody>
        </table>
        <Pagination count={+pagination} page={+page} onChange={handleChange} />
      </div>
    </AdminWrapper>

  );
}

export default AdminQuotes;
