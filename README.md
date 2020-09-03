# Patrick Nepp's Savvy Coders Capstone Project

## Random Hike Generator

the Random Hike Generator is a fun, different way to find hikes in your area.

## Description

**Random Hike Generator** returns a single random hike based on the filters a user inputs into the main form. A user will input thier location (city and state) and a radius. These options are required to be filled out. There are two optional options right now. Minimum hiking length and hike difficutly. The function uses two API calls. One Mapquest geocoding API to convert the user's location into latitude and longitude. This data can then be used in the second API call from (hikingproject.com). The user's latitude and longitude, preferred radius, and the hike length are all used in this API call. If the user chooses a difficulty. The returned array of hikes from the API call will be filtered through for the correct difficulty. Then the pseudo-random function takes place to return a random hike.

## More to Come...
