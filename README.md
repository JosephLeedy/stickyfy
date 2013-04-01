stickyfy() jQuery plug-in
=========================

Contents
--------

1. [Overview](#overview)
2. [Requirements](#requirements)
3. [Usage](#usage)
4. [Download](#download)
5. [Problems/Questions](#issues)

<a name="overview"></a>Overview
-------------------------------

stickyfy() is a jQuery plug-in which allows you to take an HTML element and make it stick in place - that is, scroll with the browser as the user scrolls.

<a name="requirements"></a>Requirements
---------------------------------------

This script has been tested with jQuery 1.9.1, but should be compatible with jQuery 1.7 or greater.

<a name="usage"></a>Usage
-------------------------

The sample code for this plug-in is based upon a [tutorial written for ParadoxLabs](http://www.paradoxlabs.com/posts/scrolling-social-icons-with-jquery/). This plug-in accepts the same options as the [jQuery `animate()` method](http://api.jquery.com/animate/).

### Sample HTML
```html
<ul id="social-icons">
	<li><a href="https://www.facebook.com/{username}" title="Like us on Facebook" target="_blank"><img src="/images/social-icons/facebook.png" alt="Facebook" width="48" height="48" /></a></li>
	<li><a href="https://twitter.com/{username}" title="Follow us on Twitter" target="_blank"><img src="/images/social-icons/twitter.png" alt="Twitter" width="48" height="48" /></a></li>
	<li><a href="http://instagram.com/{username}" title="View our pictures on Instagram" target="_blank"><img src="/images/social-icons/instagram.png" alt="Instagram" width="48" height="48" /></a></li>
	<li><a href="http://pinterest.com/{username}" title="Pin us on Pinterest" target="_blank"><img src="/images/social-icons/pinterest.png" alt="Pinterest" width="48" height="48" /></a></li>
	<li><a href="https://www.youtube.com/user/{username}" title="Watch our videos on YouTube" target="_blank"><img src="/images/social-icons/youtube.png" alt="YouTube" width="48" height="48" /></a></li>
	<li><a href="https://plus.google.com/{userId}/posts" title="Follow us on Google+" target="_blank"><img src="/images/social-icons/google-plus.png" alt="Google+" width="48" height="48" /></a></li>
</ul>
```

### Sample CSS
```css
#wrapper {
	position: relative;
}

#social-icons {
	list-style: none;
	z-index: 70742;
	position: absolute;
	top: 70px;
	right: -70px;
	background: transparent;
}
```

### jQuery
```javascript
$("#social-icons").stickyfy({[options]});
```
<a name="download"></a>Download
-------------------------------

The latest **stable** release can be downloaded from the master branch. The **bleeding edge** version can be found in the develop branch. Older versions can be downloaded by their tag.


<a name="issues"></a>Problems/Questions
---------------------------------------

Please report any issues or suggestions using the [GitHub issue page](https://github.com/jmleedy/stickyfy/issues).