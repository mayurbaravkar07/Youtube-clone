Debouncing:

typing slow =200ms
typing fast=30ms

Performance:
  without debouncing -iphone pro max =14 letter (14 API CALLS) *1000 =140000
  with debouncing -  iphone pro max  = 14 letter (3 API CALLS )*1000 =3000



Debouncing with 200ms 

if diff b/t two key stroke is is < 200ms :- DENY API CALL
if it is greater than >200ms :- We should make the API CALL
 