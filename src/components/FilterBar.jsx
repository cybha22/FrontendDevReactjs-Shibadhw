import { memo } from "react";

function FilterBar({ filters, onFilterChange, onClearAll, categories }) {
    return (
        <div className="filter-bar">
            <div className="filter-bar-left">
                <span className="filter-label">Filter By:</span>

                <label className="filter-checkbox" id="filter-open-now">
                    <input
                        type="checkbox"
                        checked={filters.openNow}
                        onChange={function (e) { onFilterChange("openNow", e.target.checked); }}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">Open Now</span>
                </label>

                <div className="filter-select-wrapper" id="filter-price">
                    <select
                        value={filters.price}
                        onChange={function (e) { onFilterChange("price", e.target.value); }}
                        className="filter-select"
                    >
                        <option value="">Price</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                        <option value="$$$$">$$$$</option>
                    </select>
                    <svg className="select-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="filter-select-wrapper" id="filter-categories">
                    <select
                        value={filters.category}
                        onChange={function (e) { onFilterChange("category", e.target.value); }}
                        className="filter-select"
                    >
                        <option value="">Categories</option>
                        {categories.map(function (cat) {
                            return <option key={cat} value={cat}>{cat.charAt(0) + cat.slice(1).toLowerCase()}</option>;
                        })}
                    </select>
                    <svg className="select-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <button className="filter-clear-btn" id="btn-clear-all" onClick={onClearAll}>
                CLEAR ALL
            </button>
        </div>
    );
}

export default memo(FilterBar);
