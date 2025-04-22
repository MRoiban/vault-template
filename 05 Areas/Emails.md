---
tags:
  - categories
sticker: emoji//2709-fe0f
---

```dataview
table without id
	file.link as Emails,
	people.email as Address,
	people as People,
	subject as Topic,
	created as "Sent on"
from 
	#emails 
where
	!contains(file.name,"tmp")
sort
	file.mtime desc
```

