import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as numberStatuses from '../../constants/numberStatuses';

class NumberView extends Component {
    getErrorStyle = () => {
        return {
            backgroundColor: 'sandybrown'
        }
    }
    

    render() {
        const { number } = this.props;
        const style = (number.status === numberStatuses.ERROR ? this.getErrorStyle() : null);        

        return (
            <span className="number" style={style}>
                {number.trueValue}
            </span>
        );
    }
}

NumberView.propTypes = {
    number: PropTypes.shape({
        trueValue: PropTypes.number,
        value: PropTypes.number,
        status: PropTypes.string
    }),
}

export default NumberView;