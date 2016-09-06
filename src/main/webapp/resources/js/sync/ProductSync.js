/**
 * Created by kenny on 06/09/2016.
 *
 * This module is responsible for loading the products
 */

ProductSync = function(method, model, options) {

    if(method == "read") {
        var collection = options.collection;
        var q = options.q;
        var orderBy = options.orderBy
        $.ajax({
            url: app.path + 'search?q=' + q + "&orderBy=" + orderBy,
            headers: {
                "Content-Type": "application/json"
            },
            type: 'GET',
            success: function (data) {
                collection.reset(data);
            },
            error: function () {
            }
        });
    }
};

if (window.inventory == null) {
    window.inventory = {};
}

if (window.inventory.sync == null) {
    window.inventory.sync = {};
}

window.inventory.sync.ProductSync = ProductSync;