import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as numberStatuses from '../../constants/numberStatuses';

class NumberEdit extends Component {
    getErrorStyle = () => {
        return {
            color: 'orangered'
        }
    }

    onChange = (e) => {
        debugger;

        const { onChangeNumber } = this.props;
        const value = parseInt(e.target.value.replace(/[^-0-9]/gim, ''), 10);
        onChangeNumber(value);
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
    onChangeNumber: PropTypes.func.isRequired
}

export default NumberEdit;