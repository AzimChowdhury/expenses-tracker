# Expense Tracker

Expense Tracker is a Next.js application designed to help users manage their expenses. Users can log in with their GitHub account, create expense categories, and record individual expenses within those categories.

## User Manual

1. **GitHub Login:**

   - Users must log in using their GitHub account to access the Expense Tracker application.

2. **Category Creation:**

   - After logging in, users can create different categories to organize expenses based on types or purposes.

3. **Expense Logging:**
   - Users can add new expenses, associating each with a specific category, providing a detailed record of their spending.

## Run this Project Locally

Follow these steps to run the project on your local machine:

1.  **Clone the Project:**
 Clone this project from GitHub.

2.  **Install Dependencies:**
 Run the following command to install the required packages:

               ```
               npm install
               ```

4.  **Create .env File:**

    - Create a `.env` file in the root folder and add the following environment variables:

      ```env
      NEXT_PUBLIC_DB_URL=mongodb+srv://[username]:[password]@cluster0.fc6hnmz.mongodb.net/?retryWrites=true&w=majority
      NEXT_PUBLIC_MONGODB_DB=expense-tracker
      NEXT_PUBLIC_GITHUB_CLIENT_ID=[github client id]
      NEXT_PUBLIC_GITHUB_CLIENT_SECRET=[github client secret]
      NEXT_PUBLIC_IMGBB_API_KEY=[imgbb api key]
      NEXT_PUBLIC_IMGBB_API=https://api.imgbb.com/1/upload
      ```

      Replace `[username]`, `[password]`, `[github client id]`, `[github client secret]`, and `[imgbb api key]` with your actual credentials.

5.  **Start the Project:**

    - Run the development server with:

      ```bash
      npm run dev
      ```

    - Access the application at `http://localhost:3000` in your web browser.

Enjoy tracking your expenses! 📊💸
