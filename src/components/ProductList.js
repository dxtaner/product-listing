import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products, loading }) => {
    if (loading) {
        return <p className="loading-text">Yükleniyor...</p>;
    }

    if (products.length === 0) {
        return <p className="empty-text">Ürün bulunamadı.</p>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.productID} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
