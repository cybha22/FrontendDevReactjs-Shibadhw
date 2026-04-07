import { memo } from "react";

function SkeletonCard() {
    return (
        <div className="skeleton-card">
            <div className="skeleton-image skeleton-pulse"></div>
            <div className="skeleton-content">
                <div className="skeleton-title skeleton-pulse"></div>
                <div className="skeleton-stars skeleton-pulse"></div>
                <div className="skeleton-meta">
                    <div className="skeleton-meta-left skeleton-pulse"></div>
                    <div className="skeleton-meta-right skeleton-pulse"></div>
                </div>
                <div className="skeleton-btn skeleton-pulse"></div>
            </div>
        </div>
    );
}

function SkeletonGrid() {
    var cards = [];
    for (var i = 0; i < 8; i++) {
        cards.push(<SkeletonCard key={i} />);
    }
    return (
        <div className="restaurant-grid">
            {cards}
        </div>
    );
}

export default memo(SkeletonGrid);
