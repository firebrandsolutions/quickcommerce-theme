import React, { Component } from 'react'

import { Alert, Table, Grid, Col, Row, Thumbnail, Modal, Accordion, Panel, HelpBlock } from 'react-bootstrap'
import { Button, Checkbox, Radio } from 'react-bootstrap'

class DragDropCartRow extends Component {
    constructor(props) {
        super(props)
        
        this.handleChange = this.handleChange.bind(this)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.renderOptions = this.renderOptions.bind(this)
    }
    
    handleChange(event) {
        const value = event.target.value
        if (!isNaN(value) && value > 0) {
            this.props.setItemQty(value)
        }
    }
    
    increment() {
        const value = this.props.item.quantity + 1
        this.props.setItemQty(value)
    }
    
    decrement() {
        const value = this.props.item.quantity - 1
        if (value) {
            this.props.setItemQty(value)
        }
    }
    
    renderOptions() {
        let options = []
        let selected = this.props.item.options
        
        for (let idx in selected) {
            options.push(<li>{selected[idx].data.option.name}: <b>{selected[idx].data.name}</b></li>)
        }
        
        return (
            <ul style={{
                paddingLeft: '1.5rem',
                marginLeft: '0'
            }}>
                {options}
            </ul>
        )
    }
    
    render() {
        let data = this.props.item.data
        
        let price = 0.00
        let optionTotal = 0.00
        
        price = (typeof data.price !== 'undefined' && !isNaN(data.price)) ? Number(data.price) : 0.00
        
        let selectedOptions = this.props.item.options
        for (let key in Object.keys(selectedOptions)) {
            let selectedOption = selectedOptions[key]
            optionTotal += (!isNaN(selectedOption.data['price'])) ? Number(selectedOption.data['price']) : 0.00
        }
        
        price = (price + optionTotal).toFixed(2)
        
        if (this.props.displayLegacy) {
            return (
                <tr>
                    <td key='name' className='cart-product-col'>
                        <div className='cart-product-delete'>
                            <Button 
                              bsSize   = 'small'
                              bsStyle  = 'danger'
                              onClick  = {this.props.removeItem}>
                                <i className='fa fa-remove' />
                            </Button>
                        </div>
                        <strong className='cart-product-name'>{data['name']}</strong><br />
                        <div className='cart-product-detail'>
                            <Thumbnail src={data.image} />
                            {this.renderOptions()}
                        </div>
                    </td>
                    <td style={{width: '100px'}}>
                        <div className='form-group form-group-sm' style={{width: '80px'}}>
                            ${price}
                        </div>
                    </td>
                    <td style={{width: '40px'}}>
                        <div className='form-group form-group-sm' style={{width: '40px'}}>
                            {this.props.item.quantity}
                        </div>
                    </td>    
                </tr>
            )
        } else {
            return (
                <div className='cart-product-detail item'>
                    <a href='#/' className='item-thumb'>{/* TODo: Link back to item */}
                        <img src={data.image} alt='Item' />
                    </a>
                    
                    <div className='item-details'>
                        <h3 className='item-title'><a href='#/'>{data['name']}</a></h3>
                        <h4 className='item-price'>${price}</h4>
                        <div className='count-input'>
                            <a className='incr-btn' data-action='decrease' href='#'>–</a>
                            <input className='quantity' type='text' defaultValue={this.props.item.quantity} />
                            <a className='incr-btn' data-action='increase' href='#'>+</a>
                        </div>
                    </div>
                    
                    <a href='#' 
                        onClick = {this.props.removeItem}
                        className='item-remove' 
                        data-toggle='tooltip' 
                        data-placement='top' 
                        title='Remove'>
                        <i className='material-icons remove_shopping_cart' />
                    </a>
                </div>
            )   
        }
    }
}

export default DragDropCartRow