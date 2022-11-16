import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import { useNavigate, useParams } from 'react-router';

function Recursive(props) {
  const navigate = useNavigate();
  const [displayChildren, setDisplayChildren] = useState({});
  const params = useParams();
  useEffect(() => {
    console.log(params);
    // setDisplayChildren({
    //   ...displayChildren,
    //   // [query]: !displayChildren[query],
    // });
  }, []);
  const handleShow = useCallback((label) => {
    // eslint-disable-next-line react/destructuring-assignment
    const item = props.items.filter((i) => i.label === label);
    setDisplayChildren({
      ...displayChildren,
      [item[0].label]: !displayChildren[item[0].label],
    });
    navigate(`/shop/${label}`);
  }, [displayChildren]);
  return (
    <>
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      {props.items.map((item) => (
        // eslint-disable-next-line react/destructuring-assignment,react/prop-types
        <div key={item.title} className={props.className}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <label
            htmlFor={item.label}
            className="container_label shopLabels"
          >
            <input
              id={item.label}
              type="checkbox"
              onClick={() => handleShow(item.label)}
              checked={params.category === item.label}
            />
            <span className="checkmark" />
            {' '}
            {item.title}
            {item.children.length ? (
              <button
                type="button"
              >
                {displayChildren[item.label] ? '-' : '+'}
              </button>
            ) : null}

          </label>
          {/* eslint-disable-next-line max-len */}
          {displayChildren[item.title] && item.children.length
            ? <Recursive items={item.children} className="subMenu" /> : null}

        </div>
      ))}
    </>
  );
}

export default Recursive;

Recursive.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
};
