---
tags:
  - categories
sticker: emoji//2757
modified: 2025-01-06T09:00:04+01:00
created: 2024-05-25T18:53:37+02:00
---

## Daily
```dataview
table without id
	file.link as Reviews,
	mood as Mood,
	intensity as Intensity,
	mood*intensity as "Mood $\times$ Intensity"
from #incident and #Daily 
where !contains(file.name, "tmp")
```

## Weekly
```dataview
table without id
	file.link as Reviews
from #incident and #weekly  
where !contains(file.name, "tmp")
```

## All
```dataview
table without id
	file.link as Rapport
from
	#incident 
where
  !contains(file.name,"tmp")
sort file.name asc
```


