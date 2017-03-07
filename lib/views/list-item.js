// Generated by CoffeeScript 1.12.4
var CrowdControl, List,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

CrowdControl = require('crowdcontrol');

module.exports = List = (function(superClass) {
  extend(List, superClass);

  function List() {
    return List.__super__.constructor.apply(this, arguments);
  }

  List.prototype.tag = 'list-item';

  List.prototype.html = require('../templates/list-item');

  List.prototype.init = function() {
    return List.__super__.init.apply(this, arguments);
  };

  return List;

})(CrowdControl.Views.Form);

//# sourceMappingURL=list-item.js.map