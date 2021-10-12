import React, { Component } from 'react'
import dataShoe from "../data/shoe.json"
import ModalShoe from './ModalShoe';
import ShoeList from './ShoeList';
export default class Shoe extends Component {

    state ={
        shoesDetail:{
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
          }
    }

    viewDetail = (shoe) => {
        this.setState({
            shoesDetail:shoe
        })
    }
    

    render() {      
        // console.log(dataShoe);
        return (
            <div className="container">
                <h1 className="text-center pt-5">Shoe Shop</h1>
                <div>
                    <ShoeList dataShoe={dataShoe} viewDetail={this.viewDetail} />                    
                </div>
                    <ModalShoe shoesDetail={this.state.shoesDetail}/>

            </div>
        )
    }
}
