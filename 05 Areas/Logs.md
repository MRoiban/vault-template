---
tags:
  - categories
sticker: emoji//1f4c6
modified: 2024-12-17T10:38:14+01:00
created: 2024-04-17T16:37:19+02:00
---

```dataview
table without id
	file.link as Logs,
	created as Created
from
	#Daily 	
where
  !contains(file.name,"tmp") and created != Null
sort file.mtime desc
```

