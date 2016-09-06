/**
 * Created by kenny on 06/09/2016.
 */

CategoryCollection = Backbone.Collection.extend ({
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