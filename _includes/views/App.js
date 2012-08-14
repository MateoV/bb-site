(function(models, views, routers, templates) {

    views.App = Backbone.View.extend({
        initialize: function(options) {
            this.render();
        },
        render: function() {
            $(this.el).empty().append(templates.app(this));
            return this;
        }
    });

}).apply(this, window.args);
