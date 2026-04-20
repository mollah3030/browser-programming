# Lecture 07 — Weather Dashboard

**Student:** Md Mohiuddin Mollah
**Course:** Browser Programming - Savonia UAS

## 🌦️ Project Overview
This project is a dynamic weather dashboard that fetches real-time weather information from the Open-Meteo API. It shows how multiple API requests can be managed through one reusable asynchronous function.

## 🚀 Implemented Features

### Multi-City Support
The dashboard includes buttons for **Kuopio**, **Helsinki**, and **Oulu**.  
Each button loads weather data using the GPS coordinates of the selected city.

### Reusable Logic
A single function called `loadWeatherByCity(name, lat, lon)` is used to handle all weather requests.  
This follows the **DRY (Don't Repeat Yourself)** principle by avoiding repeated code.

### Live Timestamp
The application displays the exact time when the weather data was recorded by the API.

### Dynamic UI Styling
The page background changes automatically depending on the temperature value:

- **Cold (< 0°C):** Light blue background
- **Mild (≥ 0°C):** Light yellow background

### Error Handling
The application uses `try/catch` together with `response.ok` checks to handle API or network errors in a safe way.

## 🧠 Short Reflection

### 1. Why is this page called dynamic?
This page is called dynamic because the displayed information is not fixed inside the HTML file.  
Instead, the content updates immediately by requesting fresh data from the API whenever the user clicks a city button.

### 2. What does the API give us?
The API returns structured weather data in JSON format.  
This includes values such as temperature, wind speed, and time, based on the latitude and longitude that were requested.

### 3. Why is JSON useful here?
JSON is useful because it is a lightweight text format that JavaScript can easily convert into objects.  
It makes it simple to work with structured and nested data using dot notation, such as `data.current.temperature_2m`.

### 4. Why is it better to create one reusable function for all cities?
Using one reusable function makes the code easier to maintain and expand.  
Instead of rewriting the same logic for every city, the same function can be reused by only changing the arguments.

## 📸 Dashboard Preview
**Weather Dashboard Screenshot**

## 🛠️ How to Use
1. Open `index.html` in your browser.
2. Click any city button at the top of the page.
3. Watch the weather information update and the background color change automatically.
