# Selenium Playground - UI Automation Assignment

## 📌 Overview

This repository contains my completed **UI Automation Assignment** for the Selenium Playground course.  
The objective of this assignment was to design, implement, and execute automated test cases on various UI components of the [Selenium Playground](https://www.lambdatest.com/selenium-playground) application.

All test scripts are written using **Playwright** with a structured **Page Object Model (POM)** design pattern to ensure clean, scalable, and maintainable code.

The repository demonstrates core automation testing skills such as handling alerts, form submissions, dropdowns, checkboxes, sliders, and drag-and-drop functionality.

---

## ✅ Completed Components

### 1. Ajax Submit Form
- Automated form submission with validation of success messages  
- Implemented wait strategies for handling asynchronous responses

### 2. Bootstrap List Box
- Automated selection and transfer of items between dual list boxes  
- Verified list updates and handled edge cases like empty selections

### 3. Checkbox Demo
- Automated interactions with single and multiple checkboxes  
- Implemented validation for checked/unchecked states and message updates

### 4. Drag and Drop Sliders
- Automated slider movement to specific values  
- Verified the output value dynamically updates after dragging

### 5. JavaScript Alerts
- Handled Simple Alerts, Confirmation Alerts, and Prompt Alerts  
- Implemented validation of alert messages and responses (Accept / Dismiss / Input text)

### 6. jQuery Dropdown
- Automated selection of single and multiple options  
- Validated dependent dropdowns with dynamic loading

---

## 🏗️ Project Structure

The project follows a **Page Object Model (POM)** structure for better readability and maintainability:

📂 Selenium-Playground-Automation
┣ 📂 tests/ # Test cases for each UI component
┣ 📂 pages/ # Page classes with locators & methods
┣ 📂 utils/ # Reusable helpers & config files
┣ 📂 reports/ # Test execution reports/screenshots
┣ 📄 package.json # Dependencies & scripts
┣ 📄 playwright.config.ts # Playwright configuration
┗ 📄 README.md # Documentation

---

## ⚙️ Tools & Technologies

- **Language:** TypeScript  
- **Automation Tool:** Playwright  
- **Design Pattern:** Page Object Model (POM)  
- **Version Control:** Git & GitHub  

---

## 📊 Key Learning Outcomes

- Applying POM structure for automation projects  
- Handling different UI components with Playwright  
- Implementing explicit waits for dynamic elements  
- Validating functional correctness through assertions  
- Generating HTML reports for test execution results  
