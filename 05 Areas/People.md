---
tags:
  - categories
created: 2024-04-17T16:36:09+02:00
sticker: emoji//1f64d
modified: 2025-03-08T00:01:08+01:00
---

```dataview
table without id
	"[["+file.name+"|"+last-name+" "+first-name+"]]" as Person,
	round((date(today) - last-saw).days, 1) as "Last Saw (days ago)",
	round((date(today) - last-spoken).days, 1) as "Last Spoken (days ago)",
	birthday as "Birthday"
where
  contains(category,this.file.link) and
  !contains(file.name,"tmp")
sort file.name asc
```
