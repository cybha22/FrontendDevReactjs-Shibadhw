function StarRating({ rating, size = 16 }) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
    const roundUp = rating % 1 >= 0.75;

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars || (roundUp && i <= fullStars + 1)) {
            stars.push(
                <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#1a2b49" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            );
        } else if (hasHalf && i === fullStars + 1) {
            stars.push(
                <svg key={i} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id={`half-${i}-${rating}`}>
                            <stop offset="50%" stopColor="#1a2b49" />
                            <stop offset="50%" stopColor="#d1d5db" />
                        </linearGradient>
                    </defs>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={`url(#half-${i}-${rating})`} />
                </svg>
            );
        } else {
            stars.push(
                <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#d1d5db" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            );
        }
    }

    return <div className="star-rating">{stars}</div>;
}

export default StarRating;
