/**
 * jQuery Stickyfy Plug-in <https://github.com/jmleedy/stickyfy>
 *
 * Allows an element to be "stuck" in place meaning that it will adjust its top
 * position as the visitor scrolls.
 *
 * @author Joseph Leedy <joseph@paradoxlabs.com>
 * @package jQuery
 *
 * @created 2013-03-29
 * @updated 2013-04-01
 *
 * @license Copyright (c) 2013 ParadoxLabs, inc.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301,USA.
 */
/* @preserve jQuery Stickyfy Plug-in <https://github.com/jmleedy/stickyfy> Copyright (c) 2013 ParadoxLabs, inc. */
(function($) {
	$.fn.stickyfy = function(options) {
		options = options || {};

		return this.each(function() {
			var $self       = $(this),
				originalTop = parseInt($self.css("top"), 10);

			$(window).on("scroll", function() {
				var windowTop = $(window).scrollTop();

				$self
					.stop()
					.animate({
						top: windowTop > originalTop ? windowTop : originalTop
					},
					options);
			});
		});
	};
})(jQuery);