---
tags:
  - categories
sticker: emoji//1f3ae
modified: 2024-12-07T01:12:50+01:00
created: 2024-04-17T17:12:23+02:00
---


```dataview
table without id
	file.link as Games,
	rating+"/10" as Rating,
	type as Type
from
	#Game or
	#Games
where
  !contains(file.name,"tmp")
sort file.name asc
```


