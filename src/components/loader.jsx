import React from 'react';
import PropTypes from 'proptypes';
import loader from '../assets/img/loader.gif';

const Loader = (loading) => (
    (loading ? (<img src={ loader } alt="Loader"/>): null )
);

Loader.propTypes = {
    loading: PropTypes.bool
};

export default Loader;