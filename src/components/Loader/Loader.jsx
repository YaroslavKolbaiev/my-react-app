/* eslint-disable react/prop-types */
import "./Loader.scss";
import { useNavigate } from "react-router-dom";
import React from "react";

export const Loader = ({ path }) => {
  const navigate = useNavigate();

  const redirect = () => {
    setTimeout(() => {
      navigate(path);
    }, 2000);
  };

  redirect();

  return (
    <div className='section'>
      <div className='container'>
        <div className="Loader" data-cy="Loader">
          <div className="Loader__content" />
        </div>
        <div className='columns is-centered'>
          <div className='column is-one-third'>
            <div className='box has-background-info'>
              <h1 
                className='
                  has-text-light 
                  has-text-weight-semibold 
                  has-text-centered
                '
              >
                {"You will be redirected to login page"}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
