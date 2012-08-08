(function(models, views, routers, templates) {

    views.Filter = Backbone.View.extend({
        initialize: function(options) {
            this.render();
        },
        render: function() {
            $('#main').append(templates.filter());
            
            $('#main').append((new views.Sites({
                collection: this.collection
            })).render().el);
            
            return this;
        }
    });
}).apply(this, window.args);
