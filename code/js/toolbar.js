/**
 * toolbar
 *
 * the toolbar draws a floating toolbar that can be dragged around the screen.
 * it can take some styling information, some interaction information, and then
 * the widgets to display. the widgets are an object in the form:
 *
 * { name: "action name", icon: "image.gif", action: function(e) { ... } }
 *
 * example:
 *  var widgets = [ {name: "action name", action: function(e) { *  alert("clicked"); }];
 *  var config = { widgets: widgets, position: {x: "10px", y: "10px"} };
 *  var t = ruib.toolbar(config);
 *  t.draw();
 *
 * todo:
 *  - add more configuration options
 */
var ruib = (ruib === undefined) ? {} : ruib;

ruib.toolbar = function(my) {
    var that = {};
    my.nav_id = 'ruib-toolbar';
    my.hidden_state_id = 'ruib-toolbar-hidden';

    that.set_defaults = function() {
	if (my.widgets === undefined) { my.widgets = []; }
	if (my.position === undefined) { 
	    my.position = { x: "10px", y: "10px" };
	}

	// add hide toolbar widget
	var hide_toolbar_widget = {
	    name: "hide toolbar",
	    action: function(e) {
		$('#'+my.nav_id).hide();
		$('#'+my.hidden_state_id).show();
		return false;
	    }
	};
	my.widgets.push(hide_toolbar_widget);
    };
    that.set_defaults();

    that.draw = function() {
	var nav = document.createElement("nav");
	$(nav).attr('id', 'ruib-toolbar');
	$(nav).css("top", my.position.y);
	$(nav).css("left", my.position.x);
	$("body").append(nav);

	var nav_header = document.createElement("h1");
	$(nav_header).html("toolbar");
	$(nav).append(nav_header);
	$(nav).draggable({ handle: "h1" });

	var nav_ul = document.createElement("ul");
	$(nav_ul).addClass('nav nav-tabs nav-stacked');
	$(nav).append(nav_ul);

	for (var i = 0; i < my.widgets.length; i++) { 
	    var nav_li = document.createElement("li");
	    $(nav_ul).append(nav_li);
	    var nav_li_a = document.createElement("a");
	    $(nav_li_a).attr('href', '#');
	    $(nav_li_a).html(my.widgets[i].name);
	    $(nav_li_a).on('click', my.widgets[i].action);
	    $(nav_li).append(nav_li_a);
	}

	// hidden state
	var hidden_state = document.createElement('a');
	$(hidden_state).attr('href', '#');
	$(hidden_state).attr('id', 'ruib-toolbar-hidden');
	$(hidden_state).addClass('btn btn-small');
	$(hidden_state).html('show toolbar');
	$(hidden_state).on('click', function(e) {
	    $('#'+my.nav_id).show();
	    $('#'+my.hidden_state_id).hide();
	    return false;
	});
	$("body").append(hidden_state);
	$(hidden_state).hide();
    };

    return that;
};


