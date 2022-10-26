import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'

const Product = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-3 py-2" key={item.id} style={{width: "38rem",backgroundColor:'#FCF4FC'}}>
                <img src={item.img} class="card-img-top" alt={item.title} style={{height:'300px'}}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead" style={{color:'black',fontWeight:'bolder'}}>Rs {item.price} /-</p>
                        <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary" style={{color:'white',backgroundColor:'blue'}}>Buy Now</NavLink>
                    </div>
</div>
                );
    }

                return (
                <div >
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 style={{color:'#56bbdb',fontSize:'3rem'}}>Have a look on our products!</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {DATA.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default Product
