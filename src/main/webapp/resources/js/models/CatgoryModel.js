/**
 * Created by kenny on 06/09/2016.
 *
 * This represents the Category model.
 */

var CategoryModel;

CategoryModel = Backbone.Model.extend( {
    sync: inventory.sync.CategorySync
})

if (window.inventory == null) {
    window.inventory = {};
}

if (window.inventory.models == null) {
    window.inventory.models = {};
}

window.inventory.models.CategoryModel = CategoryModel;