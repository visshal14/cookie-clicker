
# Cookie Clicker

This is a simple React application that simulates a basic version of the popular game Cookie Clicker.

## Features:

- **Clicking the button:** Increments the counter by 1.
- **Bonus Points:** 50% chance of getting a 10-point bonus.
- **Prizes:** 25% chance of winning a generic prize.
- **User Data Persistence:** User data (counter, prizes won) is stored and retrieved from a backend database.
- **User Feedback:** Displays messages to notify the user about bonuses and prizes.

## Technologies Used:

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose)
- **Fetch API:** For making HTTP requests to the backend.


## How to Run:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Run the client:**
   ```bash
   npm start 
   ```

## To interact with the application:

- Open your web browser and navigate to `http://localhost:3000` (or the port specified in your `package.json`).
- Click the "Click Me" button to increment the counter.
- Observe the counter, prizes won, and any bonus/prize messages.

## Note:

- This is a basic implementation and can be further enhanced with features like:
    - Upgrades to increase click rate.
    - More complex prize mechanics.
    - Improved UI/UX.
    - User authentication.
- This README provides a basic overview. For more detailed information, refer to the code comments and individual files within the project.