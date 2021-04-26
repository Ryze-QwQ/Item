import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ArrowUpOutlined, PauseOutlined, ArrowDownOutlined } from '@ant-design/icons/lib';

export default class Grade extends Component {
    className = 'grade';


    static defaultProps = {
        level: 3
    }

    render() {
        const { level, style, className } = this.props;
        return (
            <div className={this.className}>
                {
                    level === 1 ?
                        <ArrowUpOutlined style={{ color: '#ff0a54', fontSize: '16px', ...style }} className={className} />
                        :
                        level === 2 ?
                            <PauseOutlined style={{ color: '#f5cb5c', transform: 'rotate(90deg)', fontSize: '16px', ...style }} className={className} />
                            :
                            <ArrowDownOutlined style={{ color: '#21AA3A', fontSize: '16px', ...style }} className={className} />
                }
            </div>
        )
    }
}

Grade.propTypes = {
    level: PropTypes.number
}