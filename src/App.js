import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const API_URL = process.env.REACT_APP_API_PAGE;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

const fetchProducts = async (setProducts, setLoading) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Ürünler alınamadı: ${response.statusText}`);
        }

        const data = await response.json();
        setProducts(data.data);
    } catch (error) {
        console.error("Ürünleri alırken hata oluştu:", error.message);
    } finally {
        setLoading(false);
    }
};

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts(setProducts, setLoading);
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <ProductList products={products} loading={loading} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
