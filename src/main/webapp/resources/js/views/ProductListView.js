/**
 * Created by kenny on 06/09/2016.
 * This view renders the results of the search
 */

var ProductListView;

ProductListView = Backbone.View.extend({

    events: {
        "click .btn.add-journal": "newJournal",
        "click .btn.subscribe": "subscribe",
        "click .btn.edit": "edit"
    },
    initialize: function (options) {
        this.listenTo(this.collection, "reset", this.loadProducts);
    },

    render: function() {
        this.$("#product-table").bootstrapTable({
            data : [], striped: true, idField: "id", pagination: true, search: false,  height: app.getHeight(), toolbar : "#toolbar"
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