# jquery.responsive-iframe
jQuery plugin to make iframe elements responsive by keeping the same ratio. Useful for youtube embeded videos.

## Example
```
$('iframe').responsiveIframe();
```
or by speciying a specific width to height ratio
```
$('iframe').responsiveIframe({ratio: 9/16 })
```

## Options
The following options can be supplied as arguments


### ratio
Numeric value.
Defined width by height ratio
Default value is **0.5625** (i.e. 9 / 16).
