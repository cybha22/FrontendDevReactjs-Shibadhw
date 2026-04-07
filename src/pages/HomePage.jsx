import { useState, useMemo, useCallback, memo } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import RestaurantGrid from "../components/RestaurantGrid";
import SkeletonGrid from "../components/SkeletonGrid";
import ErrorState from "../components/ErrorState";
import { useRestaurants, useCategories } from "../hooks/useRestaurants";

var ITEMS_PER_PAGE = 8;

function HomePage() {
    var _v = useState(ITEMS_PER_PAGE);
    var visibleCount = _v[0];
    var setVisibleCount = _v[1];

    var _f = useState({
        openNow: false,
        price: ""
    });
    var clientFilters = _f[0];
    var setClientFilters = _f[1];

    var hook = useRestaurants();
    var categories = useCategories();

    var filteredRestaurants = useMemo(function () {
        return hook.restaurants.filter(function (restaurant) {
            if (clientFilters.openNow && !restaurant.isOpenNow) {
                return false;
            }
            if (clientFilters.price && restaurant.priceRange !== clientFilters.price) {
                return false;
            }
            return true;
        });
    }, [hook.restaurants, clientFilters]);

    var displayedRestaurants = filteredRestaurants.slice(0, visibleCount);
    var hasMore = visibleCount < filteredRestaurants.length;

    var handleFilterChange = useCallback(function (key, value) {
        if (key === "category") {
            hook.updateCategory(value);
            setVisibleCount(ITEMS_PER_PAGE);
            return;
        }
        setClientFilters(function (prev) {
            var next = {};
            next.openNow = prev.openNow;
            next.price = prev.price;
            next[key] = value;
            return next;
        });
        setVisibleCount(ITEMS_PER_PAGE);
    }, [hook.updateCategory]);

    var handleClearAll = useCallback(function () {
        setClientFilters({ openNow: false, price: "" });
        hook.updateCategory("");
        setVisibleCount(ITEMS_PER_PAGE);
    }, [hook.updateCategory]);

    var handleLoadMore = useCallback(function () {
        setVisibleCount(function (prev) {
            return prev + ITEMS_PER_PAGE;
        });
    }, []);

    var combinedFilters = useMemo(function () {
        return {
            openNow: clientFilters.openNow,
            price: clientFilters.price,
            category: hook.serverCategory
        };
    }, [clientFilters, hook.serverCategory]);

    return (
        <div className="home-page">
            <Header />
            <FilterBar
                filters={combinedFilters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearAll}
                categories={categories}
            />
            <main className="main-content">
                <h2 className="section-title">All Restaurants</h2>
                {hook.loading && <SkeletonGrid />}
                {hook.error && <ErrorState message={hook.error} onRetry={hook.retry} />}
                {!hook.loading && !hook.error && (
                    <>
                        <RestaurantGrid restaurants={displayedRestaurants} />
                        {hasMore && (
                            <div className="load-more-wrapper">
                                <button className="load-more-btn" id="btn-load-more" onClick={handleLoadMore}>
                                    LOAD MORE
                                </button>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}

export default memo(HomePage);
