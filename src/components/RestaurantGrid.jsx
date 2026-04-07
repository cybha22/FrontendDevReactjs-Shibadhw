import { memo } from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantGrid({ restaurants }) {
    if (restaurants.length === 0) {
        return (
            <div className="empty-state">
                <p className="empty-state-text">No restaurants found matching your filters.</p>
            </div>
        );
    }

    return (
        <div className="restaurant-grid" id="restaurant-grid">
            {restaurants.map(function (restaurant) {
                return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
            })}
        </div>
    );
}

export default memo(RestaurantGrid);
