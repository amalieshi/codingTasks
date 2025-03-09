import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// Define the products data
const products = [
    {
        id: 1,
        title: 'Product 1',
        description: 'This is a short description of product 1.',
        price: 29.99,
        colors: ['Red', 'Blue', 'Green'],
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        title: 'Product 2',
        description: 'This is a short description of product 2.',
        price: 39.99,
        colors: ['Yellow', 'Black', 'White'],
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        title: 'Product 3',
        description: 'This is a short description of product 3.',
        price: 49.99,
        colors: ['Purple', 'Orange', 'Pink'],
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 4,
        title: 'Product 4',
        description: 'This is a short description of product 4.',
        price: 59.99,
        colors: ['Brown', 'Gray', 'Cyan'],
        image: 'https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 5,
        title: 'Product 5',
        description: 'This is a short description of product 5.',
        price: 69.99,
        colors: ['Magenta', 'Lime', 'Teal'],
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

const Products = () => {
    const [selectedColors, setSelectedColors] = useState({});
    const [openDropdown, setOpenDropdown] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleColorSelect = (productId, color) => {
        setSelectedColors({ ...selectedColors, [productId]: color });
        setOpenDropdown(null);
    };

    const toggleDropdown = (productId) => {
        setOpenDropdown(openDropdown === productId ? null : productId);
    };

    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home</Link>
                <span className="navbar-text ml-auto">
                    Total Price: ${totalPrice.toFixed(2)}
                </span>
            </nav>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4" key={product.id}>
                        <div className="card mb-4">
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">Price: ${product.price}</p>
                                <div className="dropdown mb-2">
                                    <button
                                        className="btn btn-secondary dropdown-toggle"
                                        type="button"
                                        id={`dropdownMenuButton${product.id}`}
                                        onClick={() => toggleDropdown(product.id)}
                                    >
                                        {selectedColors[product.id] || 'Select Color'}
                                    </button>
                                    {openDropdown === product.id && (
                                        <div className="dropdown-menu show" aria-labelledby={`dropdownMenuButton${product.id}`}>
                                            {product.colors.map(color => (
                                                <button
                                                    key={color}
                                                    className="dropdown-item"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleColorSelect(product.id, color);
                                                    }}
                                                >
                                                    {color}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <button className="btn btn-primary" onClick={() => {
                                    if (selectedColors[product.id]) {
                                        //alert(`Buying ${product.title} in ${selectedColors[product.id]}`);
                                        setTotalPrice(totalPrice + product.price);
                                    } else {
                                        alert(`Please select a color for ${product.title}`);
                                    }
                                }}>Buy</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
