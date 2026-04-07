import { memo } from "react";

function SkeletonDetail() {
    return (
        <div className="detail-page">
            <div className="skeleton-back skeleton-pulse"></div>
            <div className="skeleton-hero skeleton-pulse"></div>
            <div className="skeleton-detail-info">
                <div className="skeleton-detail-title skeleton-pulse"></div>
                <div className="skeleton-detail-rating skeleton-pulse"></div>
                <div className="skeleton-detail-meta skeleton-pulse"></div>
                <div className="skeleton-detail-desc skeleton-pulse"></div>
                <div className="skeleton-detail-desc-short skeleton-pulse"></div>
            </div>
            <div className="skeleton-reviews-section">
                <div className="skeleton-reviews-title skeleton-pulse"></div>
                <div className="skeleton-review-item">
                    <div className="skeleton-review-header">
                        <div className="skeleton-review-avatar skeleton-pulse"></div>
                        <div className="skeleton-review-user">
                            <div className="skeleton-review-name skeleton-pulse"></div>
                            <div className="skeleton-review-stars skeleton-pulse"></div>
                        </div>
                    </div>
                    <div className="skeleton-review-text skeleton-pulse"></div>
                </div>
                <div className="skeleton-review-item">
                    <div className="skeleton-review-header">
                        <div className="skeleton-review-avatar skeleton-pulse"></div>
                        <div className="skeleton-review-user">
                            <div className="skeleton-review-name skeleton-pulse"></div>
                            <div className="skeleton-review-stars skeleton-pulse"></div>
                        </div>
                    </div>
                    <div className="skeleton-review-text skeleton-pulse"></div>
                </div>
            </div>
        </div>
    );
}

export default memo(SkeletonDetail);
