EMP
===

NEXT STEPS (project 1)
-----------------------------------

Make desicision on UI design choice e.g.  carphonewarehouse type comparsion UI? (right now HTML UI code has been manually build for demo purpose)
Currently setup code for HTM5 Javascript website.  (could be made for IOS and Android via phonegap or the like.
Data need to be kept up to date (need to build some management tool for that).


TEAM
--------
- Jan, 
- Sophie, 
- James, 
- Jen, 
- Gillian, 
- Jane, 
- @watty62, 
- @aboynejames

CHALLENGE ONE
---------------
Assist someone moving to Aberdeen to find the GP of their choice based on a set of parameters (eg distance from home, gender, specialisms)

CHALLENGE TWO
---------------
Explore how an empowered and informed citizen interacts with health services (esp GPs) and with wider well-being and sporting / activities community organisations? Compare and contrast the as-is 2014 position with the potential 2024 one.



RESULTS
----------
A website for comparison of GP

Comparsion of Aberdeen City GP practice and practitioners


DATA
--------
We have created a spreadsheet of GPs practicing in Aberdeen, and the practices from whcih they operate. That is now hosted at:

http://opendata.aberdeencity.gov.uk/dataset/7a548fae-9720-4498-bcc1-5e42db32129b/resource/80d8011c-79ce-439c-b5d0-e5556b500deb/download/GPsData.json

Data includes GP names, practice name and qualifications.

A separate geojson file of location of geo-locations of GPs surgeries is also used:
http://opendata.aberdeencity.gov.uk/dataset/location-of-gp-doctors-practices

TEST ENVIRONMENT
---------------------------------

UI - acceptance testing using casperJS

casperjs test test/ --baseUrl=          e.g. casperjs test test/ --baseUrl=http://localhost/codethecity/EMP/src/index.html


LIBRARIES
---------------

Jquery


LINKS
-------
Links to any demos, videos, blog posts etc... about your project for people to find out more. Especially interesting are progress reports, results of any research you have done, lists of similar apps, etc...
