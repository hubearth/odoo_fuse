odoo.define('fuse_calendar_customization.fuse_calendar_customization', function (require){
"use strict";
// require original module JS
var widgets = require('web_calendar.widgets');

// Extend widget
widgets.SidebarFilter.include({
	init: function () {
		this.set_ViewEveryBody_true();
	}

	set_ViewEveryBody_true: function () {
		self._add_filter(-1, _lt("Everybody's calendars"), true, false);
	}
});


