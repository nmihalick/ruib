/**
 * GLOBALS
 */
var app = {};

/**
 * READY
 */
$(document).ready(function() {
    var es_config = { start_element: "body" };
    var es = ruib.element_selector(es_config);
    var ei_config = {};
    ei_config.element_list = [{ id: "div", name: "div", markup: "<div> </div>"}];
    var ei = ruib.element_inserter(ei_config);

    var toolbar_config = {};
    toolbar_config.position = { x: "100px", y: "100px" };
    toolbar_config.widgets = [];
    var alert_widget = { name: "alert" };
    alert_widget.action = function(e) { alert("test"); };
    toolbar_config.widgets.push(alert_widget);
    var insert_widget = { name: "insert element" };
    insert_widget.action = function(e) {
	var callback = function(e) {
	    console.log(e.currentTarget);
	    ei.set_parent_element(e.currentTarget);
	    ei.draw();
	    es.off();
	    return false;
	};
	es.set_callback(callback);
	es.on();
	return false;
    };
    toolbar_config.widgets.push(insert_widget);
    ruib.toolbar(toolbar_config).draw();
});
