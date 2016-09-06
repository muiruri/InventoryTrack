/**
 * Created by kenny on 06/09/2016.
 */

ProductCollection = Backbone.Collection.extend ({
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