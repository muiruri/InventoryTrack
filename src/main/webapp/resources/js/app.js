/**
 * Created by kenny on 26/07/2016.
 */
var app = app || {};
$(function () {
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/gim,
        evaluate: /\{\{(.+?)\}\}/gim,
        escape: /\{\{\-(.+?)\}\}/gim
    };
    $.notify.defaults({ autoHide: false});

    app.path = "";
    
    var init = function() {
        app.productCollection = new inventory.collections.ProductCollection();
        app.categoryCollection = new inventory.collections.CategoryCollection();
        app.categoryCollection.fetch({collection : app.categoryCollection});
        app.searchView = new inventory.views.SearchView( { el : document.getElementById("search-div") });
        app.searchView.render();

        app.productLisView = new inventory.views.ProductListView({ collection: app.productCollection, el : document.getElementById("table-div")});
        app.productLisView.render();
        //app.productCollection.fetch({collection : app.productCollection, q : "Jack"});
    }

    app.closeNotify = function(successMessage, syncId, type) {
        $(".notifyjs-bootstrap-base." + syncId).
        removeClass("notifyjs-bootstrap-info").
        addClass("notifyjs-bootstrap-" + type).
        find("[data-notify-text]").
        text(successMessage);

        close = function() {
            $(".notifyjs-bootstrap-base." + syncId).trigger("notify-hide")
        }
        setTimeout(close, 3000);
    }
    app.getHeight = function() {
        return $(window).height() - 100;
    }
    
    init();
});