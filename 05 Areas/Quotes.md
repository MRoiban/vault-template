---
tags:
  - categories
sticker: emoji//1f5e8-fe0f
modified: 2025-02-09T21:35:43+01:00
created: 2024-04-19T22:51:24+02:00
---

```dataview
table without id
	file.link as Note,
	quote as Quote,
	writer as Writer
from #quote 
where
	!contains(file.name, "tmp")
sort file.mtime desc
```
