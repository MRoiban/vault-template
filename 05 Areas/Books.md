---
Created: 2024-08-28-19:39
tags:
  - reading
  - hobbies
cssclasses: 
sticker: emoji//1f4d6
category:
  - "[[Books]]"
---
# Now
```dataview
table without id
	file.link as "Reading Now Books",
	author as Author,
	rating+"/10" as Rating,
	genres as Genres
from
	#book
where
  !contains(file.name,"tmp") and contains(status,"read-now")
sort file.name asc
```

# Incoming
```dataview
table without id
	file.link as "Incoming Books",
	author as Author,
	rating+"/10" as Rating,
	genres as Genres
from
	#book
where
  !contains(file.name,"tmp") and contains(status,"read-incoming")
sort file.name asc
```

# Backlog
```dataview
table without id
	file.link as "Backlog Books",
	author as Author,
	rating+"/10" as Rating,
	genres as Genres
from
	#book
where
  !contains(file.name,"tmp") and !contains(status,"read-incoming") and !contains(status,"read-now")
sort file.name asc
```
