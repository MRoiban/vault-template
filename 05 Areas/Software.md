---
tags:
  - categories
sticker: emoji//1f9f0
---

```dataview
table without id
	file.link as Software,
	RAM as "RAM (MB)",
	CPU as CPU,
	GPU as GPU,
	Network as "Network (Mbps)",
	rating as Rating
from #software  
where
	!contains(file.name, "tmp")
sort file.mtime desc
```
