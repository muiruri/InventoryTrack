/**
 * Created by kenny on 06/09/2016.
 * This view represents the search input field.
 */

var SearchView;

SearchView = Backbone.View.extend({

    events: {
        "keydown .search-input": "search"
    },
    initialize: function (options) {

    },

    render: function() {
        
        return this;
    },

    search: function(event) {

        if(event.keyCode == 13) {
            event.preventDefault();
            var q = $(event.target).val();
            app.productCollection.fetch({collection: app.productCollection, q: q})
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