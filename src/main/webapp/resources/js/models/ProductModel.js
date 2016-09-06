/**
 * Created by kenny on 06/09/2016.
 */

var ProductModel;

ProductModel = Backbone.Model.extend( {
    sync: inventory.sync.ProductSync
})

if (window.inventory == null) {
    window.inventory = {};
}

if (window.inventory.models == null) {
    window.inventory.models = {};
}

window.inventory.models.ProductModel = ProductModel;