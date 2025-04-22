---
tags:
  - categories
sticker: emoji//1f3b5
---

```dataview
table without id
	file.link as Songs,
	rating+"/10" as Rating,
	genres as Genres,
	mood as Mood,
	links as Link
from
	#songs 
where
  !contains(file.name,"tmp")
sort file.name asc
```


