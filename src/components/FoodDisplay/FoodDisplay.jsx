import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list, searchTerm, setSearchTerm } = useContext(StoreContext);

    const filteredList = food_list.filter((item) => {
        const matchesCategory = category === "All" || item.category === category;
        const matchesSearch = searchTerm.trim() === "" || 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className='food-display' id='food-display'>
            <div className="food-display-header">
                <h2>{category === "All" ? "Featured Men's Collection" : `${category} Collection`}</h2>
                <span className="food-display-count">
                    {filteredList.length} {filteredList.length === 1 ? 'item' : 'items'} available
                </span>
            </div>

            {searchTerm && (
                <div className="food-search-status">
                    Showing results for <strong>"{searchTerm}"</strong>
                    <button onClick={() => setSearchTerm("")}>Clear search</button>
                </div>
            )}

            {filteredList.length === 0 ? (
                <div className="food-display-empty">
                    <p>No products found matching your criteria.</p>
                    {searchTerm && (
                        <button onClick={() => setSearchTerm("")}>Clear Search Filter</button>
                    )}
                </div>
            ) : (
                <div className="food-display-list">
                    {filteredList.map((item) => (
                        <FoodItem 
                            key={item._id} 
                            id={item._id} 
                            name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            image={item.image}
                            category={item.category}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default FoodDisplay;