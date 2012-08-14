(function(models, views, routers) {

routers.App = Backbone.Router.extend({
    initialize: function() {
        this.app = new views.App({el: '#app'});
    },
    routes: {
        'filter': 'filter'
    },
    filter: function() {
        var sites = new models.Sites();
        sites.fetch({
            success: function() {
            	
                var view = new views.Filter({
                    collection: sites
                });
            }
        });
    }
});

}).apply(this, window.args);
