define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["templates/template"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1 id=\"sjsId"
    + alias4(((helper = (helper = helpers.sjsId || (depth0 != null ? depth0.sjsId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sjsId","hash":{},"data":data}) : helper)))
    + "\">robert is cool "
    + alias4(((helper = (helper = helpers.sjsId || (depth0 != null ? depth0.sjsId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sjsId","hash":{},"data":data}) : helper)))
    + "</h1>\n";
},"useData":true});

return this["JST"];

});