// gcal.js Modified to implement Google Calendar API V3


/*!
 * FullCalendar v2.1.1 Google Calendar Plugin
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 * Modified by Garrett Bach 2014-10-28 to process GCal API V3 JSON events list
 */

(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'jquery' ], factory);
	} else {
		factory(jQuery);
	}
})(function($) {


	var fc = $.fullCalendar;
	var applyAll = fc.applyAll;


	fc.sourceNormalizers.push(function(sourceOptions) {
		if (sourceOptions.dataType == 'gcal'
		|| (sourceOptions.dataType === undefined
			&& (sourceOptions.url || '').match(/^(http|https):\/\/www.google.com\/calendar\/feeds\//))) {
				sourceOptions.dataType = 'gcal';
				if (sourceOptions.editable === undefined) {
					sourceOptions.editable = false;
				}
		} else if (sourceOptions.dataType == 'gcalv3'
		|| (sourceOptions.dataType === undefined
			&& (sourceOptions.url || '').match(/^(http|https):\/\/www.googleapis.com\/calendar\/v3\/calendars\//))) {
				sourceOptions.dataType = 'gcalv3';
				if (sourceOptions.editable === undefined) {
					sourceOptions.editable = false;
			}
		}
	});


	fc.sourceFetchers.push(function(sourceOptions, start, end, timezone) {
		if (sourceOptions.dataType == 'gcal') {
			return transformOptions(sourceOptions, start, end, timezone);
		} else if (sourceOptions.dataType == 'gcalv3') {
			return transformOptionsV3(sourceOptions, start, end, timezone);
		}
	});


	function transformOptions(sourceOptions, start, end, timezone) {

		var success = sourceOptions.success;
		var data = $.extend({}, sourceOptions.data || {}, {
			singleevents: true,
			'max-results': 9999
		});

		return $.extend({}, sourceOptions, {
			url: sourceOptions.url.replace(/\/basic$/, '/full') + '?alt=json-in-script&callback=?',
			dataType: 'jsonp',
			data: data,
			timezoneParam: 'ctz',
			startParam: 'start-min',
			endParam: 'start-max',
			success: function(data) {
				var events = [];
				if (data.feed.entry) {
					$.each(data.feed.entry, function(i, entry) {

						var url;
						$.each(entry.link, function(i, link) {
							if (link.type == 'text/html') {
								url = link.href;
								if (timezone && timezone != 'local') {
									url += (url.indexOf('?') == -1 ? '?' : '&') + 'ctz=' + encodeURIComponent(timezone);
								}
							}
						});

						events.push({
							id: entry.gCal$uid.value,
							title: entry.title.$t,
							start: entry.gd$when[0].startTime,
							end: entry.gd$when[0].endTime,
							url: url,
							location: entry.gd$where[0].valueString,
							description: entry.content.$t
						});

					});
				}
				var args = [events].concat(Array.prototype.slice.call(arguments, 1));
				var res = applyAll(success, this, args);
				if ($.isArray(res)) {
					return res;
				}
				return events;
			}
		});

	function transformOptionsV3(sourceOptions, start, end, timezone) {

		var success = sourceOptions.success;
		var data = $.extend({}, sourceOptions.data || {}, {
			singleevents: true,
			'max-results': 9999
		});

		return $.extend({}, sourceOptions, {
			url: sourceOptions.url,
			dataType: 'json',
			data: data,
			startParam: 'start-min',
			endParam: 'start-max',
			success: function(data) {
				var events = [];
				if (data.feed.entry) {
					$.each(data.feed.entry, function(i, entry) {

						events.push({
							id: entry.iCalUID,
							title: entry.summary || '', // must allow default to blank, if it's not set it doesn't exist in the json and will error here
							start: entry.start.dateTime || entry.start.date,
							end: entry.end.dateTime || entry.start.date,  // because end.date may be the next day, cause a '2-all-day' event, we use start.date here.
							url: entry.htmlLink,
							location: entry.location || '', // must allow default to blank, if it's not set it doesn't exist in the json and will error here
							description: entry.description || '' // must allow default to blank, if it's not set it doesn't exist in the json and will error here
						});

					});
				}
				var args = [events].concat(Array.prototype.slice.call(arguments, 1));
				var res = applyAll(success, this, args);
				if ($.isArray(res)) {
					return res;
				}
				return events;
			}
		});

	}


	// legacy
	fc.gcalFeed = function(url, sourceOptions) {
		return $.extend({}, sourceOptions, { url: url, dataType: 'gcal' });
	};


});