import React from 'react';
import PropTypes from 'prop-types'
import Slick from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ({ children, options, ...rest }) => {
    return (
        <Slick {...options} {...rest}>
            {children}
        </Slick>
    );
};

Slider.propTypes = {
    children: PropTypes.node,
    options: PropTypes.object.isRequired
}
Slider.defaultProps = {
    children: null,
}

export default Slider;
