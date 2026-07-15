# 🍽️ Healthy Grams - Meal Planner Website

Healthy Grams is a simple meal planning web application that helps users discover meal plans based on their daily calorie requirements and food preferences. The application provides categorized meal suggestions along with recipes and allows users to contact the administrator through a Contact Us form.

## 🚀 Features

- Responsive landing page
- Animated slideshow homepage
- Meal planner based on calorie intake
- Vegetarian, Non-Vegetarian and Anything meal options
- Different meal plans for:
  - Less than 1000 calories
  - 1000–1500 calories
  - Above 1500 calories
- Recipe popup (modal) with preparation steps
- Contact Us form
- Contact details stored in MySQL database
- Easy navigation between pages

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Packages Used
- Express
- mysql2
- body-parser
- cors

---

## 📂 Project Structure

```
Healthy-Grams/
│
├── index.html
├── main.html
├── mealplan.html
├── abt.html
├── contact.html
├── lessthan1.html
├── lessthan1veg.html
├── ...
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
│
└── images/
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/nisargacgowda/Meal-Planner-Website.git
```

Move into the project

```bash
cd Meal-Planner-Website
```

Install dependencies

```bash
npm install
```

Start the server

```bash
node server.js
```

Server runs at

```
http://localhost:3000
```

---

## 🗄️ MySQL Database Setup

Create a database

```sql
CREATE DATABASE healthDB;
```

Use the database

```sql
USE healthDB;
```

Create the contacts table

```sql
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Update the MySQL credentials inside `server.js` before running the application.

---

## 💻 Working

1. User opens the homepage.
2. Selects Meal Planner.
3. Chooses food preference.
4. Enters required calorie intake.
5. Website redirects to an appropriate meal plan.
6. User can click on any meal image to view recipe details.
7. Users can contact the administrator through the Contact page.
8. Contact details are stored in the MySQL database.

---

## 📸 Screens

- Home Page
- Meal Planner
- Meal Recommendation
- Recipe Popup
- About Us
- Contact Us

---

## Future Improvements

- BMI Calculator
- Dynamic meal recommendations using APIs
- Nutrition tracking
- AI-powered personalized meal suggestions
- Email notifications

---

## 👨‍💻 Developed By

**Nisarga G C**
Computer Science Engineering Student

LinkedIn:
https://linkedin.com/in/nisargacgowda
