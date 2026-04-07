import { memo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import ReviewItem from "../components/ReviewItem";
import SkeletonDetail from "../components/SkeletonDetail";
import ErrorState from "../components/ErrorState";
import useRestaurantDetail from "../hooks/useRestaurantDetail";

function DetailPage() {
    var params = useParams();
    var navigate = useNavigate();
    var hook = useRestaurantDetail(params.id);

    if (hook.loading) {
        return <SkeletonDetail />;
    }

    if (hook.error) {
        return (
            <div className="detail-page">
                <button className="back-btn" onClick={function () { navigate("/"); }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                </button>
                <ErrorState message={hook.error} onRetry={hook.retry} />
            </div>
        );
    }

    var restaurant = hook.restaurant;

    return (
        <div className="detail-page">
            <div className="detail-header-section">
                <button className="back-btn" id="btn-back" onClick={function () { navigate("/"); }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                </button>

                <div className="detail-hero">
                    <img
                        src={restaurant.photos[0]}
                        alt={restaurant.name}
                        className="detail-hero-image"
                        onError={function (e) {
                            e.target.style.display = "none";
                        }}
                    />
                </div>

                <div className="detail-info">
                    <h1 className="detail-name">{restaurant.name}</h1>
                    <div className="detail-rating-row">
                        <StarRating rating={restaurant.rating} size={20} />
                        <span className="detail-rating-number">{restaurant.rating}</span>
                    </div>
                    <div className="detail-meta-row">
                        <span className="detail-category">{restaurant.categories[0]}</span>
                        <span className="detail-separator"></span>
                        <span className="detail-price">{restaurant.priceRange}</span>
                        <span className="detail-separator"></span>
                        <span className={"detail-status " + (restaurant.isOpenNow ? "detail-open" : "detail-closed")}>
                            <span className={"status-dot " + (restaurant.isOpenNow ? "status-open" : "status-closed")}></span>
                            {restaurant.isOpenNow ? "OPEN NOW" : "CLOSED"}
                        </span>
                    </div>
                    <p className="detail-description">{restaurant.description}</p>
                    <div className="detail-contact">
                        <p className="detail-address">{restaurant.address}</p>
                        <p className="detail-phone">{restaurant.phone}</p>
                    </div>
                </div>
            </div>

            <div className="detail-reviews-section">
                <h2 className="reviews-title">Reviews ({restaurant.reviews.length})</h2>
                <div className="reviews-list">
                    {restaurant.reviews.map(function (review) {
                        return <ReviewItem key={review.id} review={review} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default memo(DetailPage);
