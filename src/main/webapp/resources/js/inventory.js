CategorySync = function(method, model, options) {
    if (method == "read") {
        var collection = options.collection;
        var syncId = "" + Date.now() + Math.floor(Math.random() * 100);
        $.notify("Loading categories...", "info " + syncId);
        $.ajax({
            url: app.path + "listCategories",
            headers: {
                "Content-Type": "application/json"
            },
            type: "GET",
            success: function(data) {
                collection.reset(data);
                app.closeNotify("Categories loaded.", syncId, "success");
            },
            error: function() {
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

ProductSync = function(method, model, options) {
    if (method == "read") {
        var collection = options.collection;
        var q = options.q;
        var orderBy = options.orderBy;
        $.ajax({
            url: app.path + "search?q=" + q + "&orderBy=" + orderBy,
            headers: {
                "Content-Type": "application/json"
            },
            type: "GET",
            success: function(data) {
                collection.reset(data);
            },
            error: function() {}
        });
    } else if (method == "create" || method == "update") {
        var syncId = "" + Date.now() + Math.floor(Math.random() * 100);
        var json = model.toJSON();
        $.notify("Saving Journal Issue...", "info " + syncId);
        var token = $("meta[name='_csrf']").attr("content");
        var json = {};
        var formData = new FormData();
        formData.append("file", document.getElementById("issue-file").files[0]);
        json = model.toJSON();
        for (var key in json) {
            if (json.hasOwnProperty(key) && key != "file") {
                formData.append(key, json[key]);
            }
        }
        $.ajax({
            url: app.path + "journals/issue/new",
            data: formData,
            headers: {
                "X-CSRF-TOKEN": token
            },
            cache: false,
            processData: false,
            contentType: false,
            type: "POST",
            success: function(data) {
                if (data.id != null) {
                    app.closeNotify("Journal Issue saved.", syncId, "success");
                    $("#new-journal-issue-modal").modal("hide");
                } else {
                    app.closeNotify("Error saving Issue saved.", syncId, "error");
                }
            },
            error: function(data) {
                app.closeNotify(data.message, syncId, "error");
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

var ProductListView;

ProductListView = Backbone.View.extend({
    events: {
        "click .btn.add-journal": "newJournal",
        "click .btn.subscribe": "subscribe",
        "click .btn.edit": "edit"
    },
    initialize: function(options) {
        this.listenTo(this.collection, "reset", this.loadProducts);
    },
    render: function() {
        this.$("#product-table").bootstrapTable({
            data: [],
            striped: true,
            idField: "id",
            pagination: true,
            search: false,
            height: app.getHeight(),
            toolbar: "#toolbar"
        });
        return this;
    },
    loadProducts: function(collection, options) {
        var i = 1;
        var newList = this.collection.map(function(model) {
            var newModel = {};
            newModel.count = i;
            newModel.name = model.get("name");
            var category = app.categoryCollection.get(model.get("categoryId"));
            newModel.category = category.get("name");
            newModel.price = model.get("price");
            newModel.id = model.get("id");
            i++;
            return newModel;
        });
        this.$("#product-table").bootstrapTable("load", newList);
    }
});

if (window.inventory == null) {
    window.inventory = {};
}

if (window.inventory.views == null) {
    window.inventory.views = {};
}

window.inventory.views.ProductListView = ProductListView;

var SearchView;

SearchView = Backbone.View.extend({
    events: {
        "keydown .search-input": "search"
    },
    initialize: function(options) {},
    render: function() {
        return this;
    },
    search: function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            var q = $(event.target).val();
            app.productCollection.fetch({
                collection: app.productCollection,
                q: q
            });
        }
    }
});

if (window.inventory == null) {
    window.inventory = {};
}

if (window.inventory.views == null) {
    window.inventory.views = {};
}

window.inventory.views.SearchView = SearchView;

var CategoryModel;

CategoryModel = Backbone.Model.extend({
    sync: inventory.sync.CategorySync
});

if (window.inventory == null) {
    window.inventory = {};
}

if (window.inventory.models == null) {
    window.inventory.models = {};
}

window.inventory.models.CategoryModel = CategoryModel;

var ProductModel;

ProductModel = Backbone.Model.extend({
    sync: inventory.sync.ProductSync
});

if (window.inventory == null) {
    window.inventory = {};
}

if (window.inventory.models == null) {
    window.inventory.models = {};
}

window.inventory.models.ProductModel = ProductModel;

CategoryCollection = Backbone.Collection.extend({
    sync: inventory.sync.CategorySync,
    model: inventory.models.CategoryModel
});

if (window.inventory == null) {
    window.inventory = {};
}

if (window.inventory.collections == null) {
    window.inventory.collections = {};
}

window.inventory.collections.CategoryCollection = CategoryCollection;

ProductCollection = Backbone.Collection.extend({
    sync: inventory.sync.ProductSync,
    model: inventory.models.ProductModel
});

if (window.inventory == null) {
    window.inventory = {};
}

if (window.inventory.collections == null) {
    window.inventory.collections = {};
}

window.inventory.collections.ProductCollection = ProductCollection;