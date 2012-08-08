---
---
// Constants
var map, interaction, legend;
window.app = {
    models: {},
    views: {},
    routers: {},
    templates: _($('script[name]')).reduce(function(memo, el) {
        memo[el.getAttribute('name')] = _(el.innerHTML).template();
        return memo;
    }, {})
};
window.args = _(window.app).toArray();

{% include routers/App.js %}

{% include models/Model.js %}
{% include models/Sites.js %}

{% include views/App.js %}
{% include views/Filter.js %}
{% include views/Sites.js %}

(function(models, views, routers, templates) {
    $(function() {
        var app = new routers.App();
        Backbone.history.start();
    });
}).apply(this, window.args);
