# text-collapse

## Contents
A directive that can easily be used on text areas/fields to automatically truncate/collapse/shrink text to a specific character limit, adding a "show more/less" toggle.

### Usage

get bower package:
```bash
bower install vsubbotskyy/angular-text-collapse
```

add reference
```html
<script src="bower_components/angular-text-collapse/text-collapse.js"></script>
```

add dependancy to the module
```
angular.module('app', ['textCollapse'])...
```

```html
<text-collapse  max-length="500" 
                text="{{text}}"
                collapse-label="collapse"
                expand-label="expand">
</text-collapse>
```



