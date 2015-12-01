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

use **text-collapse** element with required **data-text** and **data-max-length** attributes
```html
<text-collapse  data-max-length="500" 
                data-text="{{text}}"
                data-collapse-label="collapse"
                data-expand-label="expand">
</text-collapse>
```



