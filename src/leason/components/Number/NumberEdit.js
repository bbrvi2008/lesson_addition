import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as numberStatuses from '../../constants/numberStatuses';

class NumberEdit extends Component {
    getErrorStyle = () => {
        return {
            color: 'orangered'
        }
    }

    handleValue = (value) => {
        const { digits } = this.props;
        const val = parseInt(value.replace(/[^-0-9]/gim, ''), 10);

        return val < 10 ? val : val % digits;
    }

    onChange = (e) => {
        const { onChangeNumber } = this.props;
        const value = e.target.value;
        onChangeNumber(this.handleValue(value));
    }
    
    render() {
        const { number } = this.props;
        const style = (number.status === numberStatuses.ERROR ? this.getErrorStyle() : null);

        return (
            <span className="number">
                <input 
                    type="text"
                    className="number_input"
                    style={style} 
                    onChange={this.onChange} 
                    value={number.value || ''} 
                    ref={input => input && input.focus()}
                />
            </span>
        );
    }
}

NumberEdit.propTypes = {
    number: PropTypes.shape({
        trueValue: PropTypes.number,
        value: PropTypes.number,
        status: PropTypes.string
    }),
    digits: PropTypes.number,
    onChangeNumber: PropTypes.func.isRequired
}

export default NumberEdit;