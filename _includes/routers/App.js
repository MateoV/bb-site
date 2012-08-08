(function(models, views, routers) {

routers.App = Backbone.Router.extend({
    initialize: function() {
        this.app = new views.App({el: '#app'});
    },
    routes: {
        '': 'home',
        'filter': 'filter'
    },
    home: function() {
    },
    filter: function() {
        var sites = new models.Sites();
        sites.fetch({
            success: function() {
            	//console.log(filter.models);
            	
                var view = new views.Filter({
                    collection: sites
                });
                console.log(view.el);
                //$('#main').append(view.el);
            }
        });
    }/*,
    project: function(id, country) {
        var project = new models.Project({id: id});
        project.fetch({
            success: function() {
                country && project.set({country: country});
                var view = new views.Project({model: project});
                $('#app').append(view.el);
            }
        });
    },
    country: function(id, projectId) {
        var router = this;
         var country = new models.Country({id: id});
         country.fetch({
             success: function() {
                if (projectId) {
                    return router.project(projectId, country);
                }
                var view = new views.Country({
                    model: country
                });
                $('#app').append(view.el);
             }
         });
    }*/
});

}).apply(this, window.args);
