import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {

    // console.log(product);
    const { productName, productSlug, salePrice, productData } = product;
    const { productMainImage, productInfo } = productData;

    return (
        <div className="product-card">
            <img src={productMainImage} alt={productName} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{productName}</h3>
                <p className="product-info-text">{productInfo}</p>
                
                <div className="product-pricing">
                    <span className="sale-price">
                        {salePrice ? `${salePrice} TL` : 'Fiyat Yok'}
                    </span>
                </div>

                <a href={productSlug} className="product-link" target="_blank" rel="noopener noreferrer">
                    Ürünün Detayına Git
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
