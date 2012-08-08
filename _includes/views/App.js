(function(models, views, routers, templates) {

    views.App = Backbone.View.extend({
        defaults: {
            map: null,
            interaction: null,
            legend: null
        },
        initialize: function(options) {
            this.render();
        },
        render: function() {
            $(this.el).empty().append(templates.app(this));
            return this;
        }
    });

}).apply(this, window.args);
