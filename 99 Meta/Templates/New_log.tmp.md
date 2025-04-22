---
tags:
  - Daily
created: 
modified: 
sticker: emoji//1f4c6
cssclasses: 
category:
  - "[[Logs]]"
---



```dataview
table without id
	file.link as "Daily Files"
where
  !contains(file.name,"tmp") and created != Null and file.cday = this.file.cday and !contains(file.name, "LOG")
sort file.mtime desc
```
