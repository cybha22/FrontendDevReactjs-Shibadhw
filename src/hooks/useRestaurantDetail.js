import { useState, useEffect, useCallback } from "react";
import { fetchRestaurantById } from "../services/api";

function useRestaurantDetail(id) {
    var _s = useState(null);
    var restaurant = _s[0];
    var setRestaurant = _s[1];

    var _l = useState(true);
    var loading = _l[0];
    var setLoading = _l[1];

    var _e = useState(null);
    var error = _e[0];
    var setError = _e[1];

    var loadDetail = useCallback(function () {
        setLoading(true);
        setError(null);

        fetchRestaurantById(id)
            .then(function (data) {
                setRestaurant(data);
                setLoading(false);
            })
            .catch(function (err) {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    useEffect(function () {
        loadDetail();
    }, [loadDetail]);

    return {
        restaurant: restaurant,
        loading: loading,
        error: error,
        retry: loadDetail
    };
}

export default useRestaurantDetail;
