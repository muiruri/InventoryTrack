/**
 * Created by kenny on 06/09/2016.
 * This component is responsible for loading the categories.
 */

CategorySync = function(method, model, options) {

    if(method == "read") {
        var collection = options.collection;
        var syncId = "" + Date.now() + Math.floor(Math.random() * 100);

        $.notify("Loading categories...", "info " + syncId);
        $.ajax({
            url: app.path + 'listCategories',
            headers: {
                "Content-Type": "application/json"
            },
            type: 'GET',
            success: function (data) {
                collection.reset(data);
                app.closeNotify("Categories loaded.", syncId, "success");
            },
            error: function () {
                app.closeNotify("Error loading categories.", syncId, "error");
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

window.inventory.sync.CategorySync = CategorySync;