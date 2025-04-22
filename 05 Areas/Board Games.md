---
tags:
  - categories
sticker: emoji//1f3b2
---

```dataview
table without id
	file.link as Games,
	filter(file.tags, (t) => t !="#board-games") as Tags 
from
	#board-games 
where
  !contains(file.name,"tmp")
sort file.name asc
```


