(function(models, views, routers) {

    // Site model
    models.Site = Backbone.Model.extend();

    var groupCount = function(items) {
        return _.chain(items)
            .reduce(function(memo, v) {
                memo[v] = memo[v] ? ++memo[v] : 1;
                return memo;
            }, {})
            .map(function(v, k) {
                return { name: k, count: v};
            })
            .sortBy(function(v) {
                return v.name;
            })
            .value();
    };

    // Collection for site models
    models.Sites = Backbone.Collection.extend({
        model: models.Site,
        url: 'data/sites.json',
        // Returns available countries with counts.
        countries: function() {
            var countries = [];
            this.each(function(sites) {
                countries.push(sites.get('country'));
            });
            return groupCount(countries);
        }
    });

}).apply(this, window.args);