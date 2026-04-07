import { useState, useEffect, useCallback } from "react";
import { fetchRestaurants, fetchCategories } from "../services/api";

function useRestaurants() {
    var _s = useState([]);
    var restaurants = _s[0];
    var setRestaurants = _s[1];

    var _l = useState(true);
    var loading = _l[0];
    var setLoading = _l[1];

    var _e = useState(null);
    var error = _e[0];
    var setError = _e[1];

    var _c = useState("");
    var serverCategory = _c[0];
    var setServerCategory = _c[1];

    var loadRestaurants = useCallback(function (category) {
        setLoading(true);
        setError(null);

        fetchRestaurants(category)
            .then(function (data) {
                setRestaurants(data);
                setLoading(false);
            })
            .catch(function (err) {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(function () {
        loadRestaurants(serverCategory);
    }, [serverCategory, loadRestaurants]);

    var retry = useCallback(function () {
        loadRestaurants(serverCategory);
    }, [serverCategory, loadRestaurants]);

    var updateCategory = useCallback(function (cat) {
        setServerCategory(cat);
    }, []);

    return {
        restaurants: restaurants,
        loading: loading,
        error: error,
        retry: retry,
        serverCategory: serverCategory,
        updateCategory: updateCategory
    };
}

function useCategories() {
    var _s = useState([]);
    var categories = _s[0];
    var setCategories = _s[1];

    useEffect(function () {
        fetchCategories().then(function (data) {
            setCategories(data);
        });
    }, []);

    return categories;
}

export { useRestaurants, useCategories };
