import React, { Component } from 'react'

export default class ShoeItem extends Component {

    render() {
        let {shoe, viewDetail} = this.props
       
        return (
            <div className="card">
                <img src={shoe.image} className="card-img-top" alt=" " />
                <div className="card-body">
                    <h5 className="card-title">{shoe.name}</h5>
                    <p className="card-text">{shoe.price}$</p>
                    <button className="btn btn-primary"  data-toggle="modal" data-target="#exampleModal"
                    onClick={() =>{
                        viewDetail(shoe)
                    }}
                    >Xem chi tiết</button>
                </div>
            </div>

        )
    }
}
