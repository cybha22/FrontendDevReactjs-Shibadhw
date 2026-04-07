import { memo } from "react";

function ErrorState({ message, onRetry }) {
    return (
        <div className="error-state" id="error-state">
            <div className="error-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" />
                    <path d="M12 8v4M12 16h.01" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
            <p className="error-message">{message}</p>
            {onRetry && (
                <button className="error-retry-btn" onClick={onRetry}>
                    Try Again
                </button>
            )}
        </div>
    );
}

export default memo(ErrorState);
