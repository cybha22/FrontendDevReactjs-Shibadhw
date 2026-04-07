import { memo } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

function RestaurantCard({ restaurant }) {
    var navigate = useNavigate();

    var handleLearnMore = function () {
        navigate("/restaurant/" + restaurant.id);
    };

    return (
        <div className="restaurant-card" id={"restaurant-card-" + restaurant.id}>
            <div className="card-image-wrapper">
                <img
                    src={restaurant.photos[0]}
                    alt={restaurant.name}
                    className="card-image"
                    loading="lazy"
                    onError={function (e) {
                        e.target.style.display = "none";
                        e.target.parentNode.classList.add("card-image-fallback");
                    }}
                />
            </div>

            <div className="card-content">
                <h3 className="card-name">{restaurant.name}</h3>

                <StarRating rating={restaurant.rating} />

                <div className="card-meta">
                    <div className="card-meta-left">
                        <span className="card-category">{restaurant.categories[0]}</span>
                        <span className="card-dot-separator"></span>
                        <span className="card-price">{restaurant.priceRange}</span>
                    </div>
                    <div className="card-status">
                        <span className={"status-dot " + (restaurant.isOpenNow ? "status-open" : "status-closed")}></span>
                        <span className={"status-text " + (restaurant.isOpenNow ? "text-open" : "text-closed")}>
                            {restaurant.isOpenNow ? "OPEN NOW" : "CLOSED"}
                        </span>
                    </div>
                </div>
            </div>

            <button className="card-learn-more" onClick={handleLearnMore}>
                LEARN MORE
            </button>
        </div>
    );
}

export default memo(RestaurantCard);
