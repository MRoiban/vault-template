---
tags:
  - categories
sticker: emoji//1f37d-fe0f
---

```dataview
table without id
	file.link as Logs,
	meal as Meal,
	rating+"/10" as Rating,
	emotions as Emotions,
	feeling as Physical,
	choice(fullness < 3, "empty", choice(fullness < 6, "half-full", choice(fullness < 8, "full", choice(fullness < 9, "really-full", "extremely-full")))) as Fullness,
	created as Date 
from
	#food-log 
where
  !contains(file.name,"tmp")
sort 
	created desc,
	meal desc
```

```dataview 
TABLE WITHOUT ID 
	choice(round(sum(map(rows, (r) => default(r.fullness, 0)))/7, 1) < 3, "empty", choice(round(sum(map(rows, (r) => default(r.fullness, 0)))/7, 1) < 6, "half-full", choice(round(sum(map(rows, (r) => default(r.fullness, 0)))/7, 1) < 8, "full", choice(round(sum(map(rows, (r) => default(r.fullness, 0)))/(length(rows.rating)-1), 1) < 9, "really-full", "extremely-full")))) AS "Average Fullness"
FROM 
	#food-log  
GROUP BY 
	true 
```

