(function(models, views, routers, templates) {

    views.Sites = Backbone.View.extend({
        events: {
            'click .dropdown-menu a': 'selectFilter'
        },
        initialize: function(options) {
            this.initialCollection = this.collection;
        },
        render: function() {
            $(this.el).empty().append(templates.sites());
            this.renderList();
            return this;
        },
        renderList: function() {
            var view = this;

            var updateFacets = function(selector, facets, reject) {
                reject = reject || function() { return false; };
                $(selector, view.el).empty();
                _.chain(facets)
                    .reject(reject)
                    .each(function(f) {
                        if (!f.count) return;
                        $(selector, view.el).append(
                            "<li><a data-value='" + f.name + "' href='#'>" + f.name +
                            "<span class='count'>" + f.count + "</span></a></li>"
                        );
                    });
                $(selector, view.el).prepend(
                    "<li><a data-value='All' href='#'>All" +
                    "<span class='count'>" + view.initialCollection.size() + "</span></a></li>"
                );
            };
            updateFacets('#country-items', this.initialCollection.countries(), function(c) {
                return view.model && c.name == view.model.get('name');
            });
            
            $('#projects-list', this.el).empty();
            this.collection.each(function(site) {
                $('#projects-list', view.el).append(
                    templates.siteitem(site)
                );
                /*
                $('#projects-list li:last .project-details', view.el)
                    .append(view.model ?
                        templates.projectstats(project.stats(view.model.get('name'))) :
                        "<div class='country-count'>" + project.totalCountries()+ "</div>"
                    );
                    */
                    
            });
            
        },
        filterProjects: function(value, attribute) {
            $('li.open', this.el).removeClass('open');
            if (value === 'All') {
                this.collection = this.initialCollection;
            } else {
                var collection = this.initialCollection.filter(function(model) {
                    return model.get(attribute) === value;
                });
                this.collection = new models.Sites(collection);
            }
            $('#by', this.el).text(value);
            this.trigger('filterProjects', this.collection);
            console.log(this.collection);
            return false;
        },
        selectFilter: function(e) {
            console.log($(e.currentTarget).attr('data-value'));
            this.filterProjects(
                $(e.currentTarget).attr('data-value'),
                $(e.currentTarget).parent().parent().attr('data-attribute')
            );
            this.renderList();
            return false;
        }
    });

}).apply(this, window.args);
