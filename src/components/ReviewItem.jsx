import { memo } from "react";
import StarRating from "./StarRating";

function ReviewItem({ review }) {
    return (
        <div className="review-item" id={"review-" + review.id}>
            <div className="review-header">
                <img
                    src={review.userImage}
                    alt={review.userName}
                    className="review-avatar"
                    onError={function (e) {
                        e.target.style.display = "none";
                    }}
                />
                <div className="review-user-info">
                    <h4 className="review-user-name">{review.userName}</h4>
                    <StarRating rating={review.rating} size={14} />
                </div>
            </div>
            <p className="review-text">{review.text}</p>
        </div>
    );
}

export default memo(ReviewItem);
