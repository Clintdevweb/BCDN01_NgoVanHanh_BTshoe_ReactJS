import React, { Component } from 'react'
import ShoeItem from './ShoeItem'

export default class ShoeList extends Component {

    renderList = () => {
        let {dataShoe, viewDetail} =  this.props
        // console.log(viewDetail);
        return dataShoe.map((shoe, index) => {
            return (
                <div className="col-4 mt-4" key={index}>
                    <ShoeItem shoe={shoe} viewDetail={viewDetail}/>
                </div>
            )
        })
    }
    


    render() {
        
        return (
            <div className="row">
                {this.renderList()}
            </div>
        )
    }
}
