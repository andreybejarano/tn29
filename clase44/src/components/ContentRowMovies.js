import React from "react";
import PropTypes from 'prop-types';

function ContentRowMovies(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>{props.text}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.quantity}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas fa-${props.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ContentRowMovies.propTypes = {
    color: PropTypes.oneOf([
        'success',
        'warning',
        'primary'
    ]),
    quantity: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.oneOf([
        'user',
        'award',
        'film'
    ])
};

ContentRowMovies.defaultProps = {
    color: 'primary',
    icon: 'user'
};

export default ContentRowMovies;
