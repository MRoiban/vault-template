---
tags:
  - categories
sticker: emoji//1f4e6
modified: 2025-02-07T11:23:43+01:00
created: 2024-04-18T12:49:13+02:00
---
  
  # **Products**
```dataview
table without id
	file.link as Product,
	round(number(price)/(round((date(today) - acquired).months, 1) * (number(monthly-uses))),3)+"€" as "Per Use",
	price+"€" as Price,
	rating + "/7"  as Rating,
	acquired as Acquired,
	round((date(today) - acquired).years, 1) as "Years",
	monthly-uses as "Uses/Month",
	maker as Maker
	
	
from #products 
where 
	number(monthly-uses) > 0 and
	!contains(file.name,"tmp") and !contains(type,"subscription")
sort
	round(number(price)/(round((date(today) - acquired).months, 1) * (number(monthly-uses))),3) desc
```

## Subscriptions
```dataview
table without id
	file.link as Product,
	round(number(price) / (number(monthly-uses)),3)+"€" as "Per Use",
	price+"€" as Price,
	rating + "/7"  as Rating,
	acquired as Acquired,
	round((date(today) - acquired).months, 1) as "Months",
	monthly-uses as "Uses/Month",
	maker as Maker
	
	
from #products 
where 
	number(monthly-uses) > 0 and
	!contains(file.name,"tmp") and contains(type, "subscription")
sort
	round(number(price)/(round((date(today) - acquired).months, 1) * (number(monthly-uses))),3) desc
```
