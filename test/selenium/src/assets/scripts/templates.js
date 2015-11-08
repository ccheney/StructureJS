define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["templates/template"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1>robert is cool "
    + container.escapeExpression(((helper = (helper = helpers.sjsId || (depth0 != null ? depth0.sjsId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"sjsId","hash":{},"data":data}) : helper)))
    + "</h1>\n";
},"useData":true});

return this["JST"];

});