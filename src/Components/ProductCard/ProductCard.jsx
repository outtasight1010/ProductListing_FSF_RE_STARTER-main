import React from "react";
import './ProductCard.css';
import products from'./products';
import StarRating from "../StarRating/StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



import 'bootstrap/dist/css/bootstrap.css';

const ProductCard = ({product}) => {
    
    
 
    return (
        
                <div className="col-sm-4">
                    
                    <div className="card card-cascade card-ecommerce wider shadow mb-5">
                        <div className="view view-cascade overlay text-center">
                        <img class="card-img-top" src={product.image}
            alt=""></img>
                         <a>
                            <div className="mask rgba-white-slight"></div>
                         </a>
                        </div>
                        <div className="card-body card-body-cascade text-center">
                            <h4 className="card-title"><strong><a href = "">{product.title}</a></strong></h4>
                            <p className="card-description">{product.description}</p>
                            <p className="card-price">${product.price}</p>
                            <p className="card-brand">{product.brand}</p>
                            <p className="card-stock">{product.stock} <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }}/> in stock</p>
                            
                            <p className="card-category">{product.category}</p>

                            <StarRating rating = {product.rating}/>
                            <div className="card-footer">
                                <button type = "submit" className="btn btn-primary">
                                    Add to Cart
                                </button>
                            </div>

                        </div>
                        </div>
                    </div>
               
        



















        //<div className="container">
            //<div className="card">
                //<div className="imgBx">
                //<img src ={product.image} alt =""/>
                //</div>
                //<div className="content">
                    //<div className="productName">
                       // <h3>{product.title}</h3>
                    //</div>
                   // <div className="price-rating">
                        //<h2>${product.price}</h2>
                    //</div>
                    //<div className="rating">
                        //<i className="fa fa-star" >{product.rating}</i>
                        //<i className="fa fa-star" ></i>
                        //<i className="fa fa-star" ></i>
                        //<i className="fa fa-star" ></i>
                        //<i className="fa fa-star grey" ></i>
                    //</div>
                    //<div className="product description">
                       // <p>{product.description}</p>
                    //</div>
                    //<div className="product-stock">
                        //<p>{product.stock}</p>
                    //</div>
                    //<div className="product-brand">
                        //<p>{product.brand}</p>
                    //</div>
                    //<div className="product-category">
                        //<p>{product.category}</p>
                    //</div>
                    //<button>Add to cart</button>
                //</div>

            //</div> 
            
               
        //</div>
        
        
     
    );
};

export default ProductCard;