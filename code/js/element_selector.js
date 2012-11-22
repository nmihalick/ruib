/**
 * element selector
 *
 * the element selector is used to select elements on the page. it needs a
 * selectable area, an exclusion area, and a callback for once the element is
 * selected.
 *
 * todo:
 *  - make the selector something that can be modified in the config.
 *  - set default values is no config values are set.
 *
 * example:
 *  var callback = function(e) { alert("test"); return false; };
 *  var config = { start_element: "body", callback: callback };
 *  var es = ruib.element_selector(config);
 *  es.on();
 */
var ruib = (ruib === undefined) ? {} : ruib;


ruib.element_selector = function(my) {
    var that = {};

    that.on = function() {
	$(my.start_element).on("click", "*", my.callback);
    };
    that.off = function() {
	$(my.start_element).off("click");
    };

    return that;
};


