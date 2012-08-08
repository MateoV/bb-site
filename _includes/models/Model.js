// Global extensions to Backbone.Model
// 
Backbone.Model.prototype.render = function(key, def) {
    def = def || '-';
    var val = this.get(key);
    if (val === null || val === undefined) return def;
    return _.isArray(val) ? val.join(', ') : this.get(key);
};