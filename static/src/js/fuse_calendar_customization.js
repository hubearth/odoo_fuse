//odoo.define('fuse_calendar_customization.everybodys_calendar', function (require){
odoo.define('fuse_calendar_customization.everybodys_calendar', function (require, instance, local){
	"use strict";

//odoo.odoo_fuse = function(instance, local) {
	// require original module JS
	//var widgets = require('base_calendar.widgets');
	var calendar = require('base_calendar.base_calendar');
	var widgets = require('web_calendar.widgets');
	//var widgets = calendar.get('widgets');
	//var widgets = calendar.widgets;
	
	//var cal2 = require('instance.base_calendar');
	//var cal3 = base_calendar.base_calendar;
	
	//var cal2 = instance.base_calendar;
	//var cal3 = instance.base_calendar.base_calendar;
	
	console.log("fuse_calendar instance: " + instance);
	
	//var widgets = instance.base_calendar
	
	//widgets.SidebarFilter._add_filter(-1, _lt("Everybody's calendars"), false, false);
	//calendar.widgets.SidebarFilter._add_filter(654, _lt("crotte de boeuf"), true, false);
	
	console.log("fuse_calendar loaded");
	
	console.log("--- fuse_calendar Widgets ---");
	
	console.log("fuse_calendar: " + widgets);
	
	for(var propName in widgets.SidebarFilter) {
	    
	    console.log('fuse widgets: ' + propName);
	}
	console.log("fuse_calendar extend: " + widgets.SidebarFilter.extend);
	console.log("fuse_calendar include: " + widgets.SidebarFilter.include);
	console.log("fuse_calendar constructor: " + widgets.SidebarFilter.constructor);
	
	console.log("--- fuse_calendar Calendar ---");
	
	console.log("fuse_calendar calendar: " + calendar);
	
	for(var propName in calendar) {
	    
	    console.log('fuse calendar: ' + propName);
	}
	
	//console.log("fuse_calendar cal2: " + cal2);
	//console.log("fuse_calendar cal3: " + cal3);
	
	// Extend widget
	//var test = widgets.SidebarFilter;
	/*
	widgets.SidebarFilter.include({
		//console.log("fuse_calendar widgets.SidebarFilter loaded");
		//template: 'CalendarView.sidebar.filters',
		
		load_favorite_list: function () {
		//render: function() {
			this._super();
			console.log("fuse_calendar widgets.SidebarFilter loaded");
			
			/*return session.is_bound.then(function() {
				this._add_filter(-1, _lt("Everybody's calendars"), false, false);
			});*/
/*			
			
		},
		

	});*/
	
	/*var everybodys_calendar = widgets.SidebarFilter.extend({
		load_favorite_list: function () {
			this._super();
			return session.is_bound.then(function() {
				this._add_filter(-1, _lt("Everybody's calendars"), false, false);
			});
			
		},
		

	});*/

		/*
		load_favorite_list: function () {
	        var self = this;
	        // Untick sidebar's filters if there is an active partner in the context
	        var active_partner = (this.view.dataset.context.active_model === 'res.partner');
	        return session.is_bound.then(function() {
	            self.view.all_filters = {};
	            self.view.now_filter_ids = [];
	            self._add_filter(session.partner_id, session.name + _lt(" [Me]"), !active_partner);
	            self._add_filter(-1, _lt("Everybody's calendars"), true, false);
	            //Get my coworkers/contacts
	            return new Model("calendar.contacts")
	                .query(["partner_id"])
	                .filter([["user_id", "=", session.uid]])
	                .all()
	                .then(function(result) {
	                    _.each(result, function(item) {
	                        self._add_filter(item.partner_id[0], item.partner_id[1], !active_partner, true);
	                    });
	
	                    self.view.now_filter_ids = _.pluck(self.view.all_filters, 'value');
	
	                    self.render();
	                });
	        });
		},*/
	
		
	

});
//};
