import React, { Component } from 'react'

export default class ModalShoe extends Component {
    render() {
        let {shoesDetail} = this.props

        return (                        
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{shoesDetail.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src={shoesDetail.image} alt="" />
                                <span>{shoesDetail.price}$</span>
                                <p>{shoesDetail.shortDescription}</p>
                            </div>                           
                        </div>
                    </div>
                </div>           

        )
    }
}
