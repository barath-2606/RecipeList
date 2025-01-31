# RecipeList

## Description
Recipe List is a web application built using **React** and **Material UI**, allowing users to browse and search for various recipes. The application fetches recipe data from the **Third Party Dummy JSON API** and manages the state using **Redux**.

## Features
- Display a list of recipes fetched from an external API.
- Search functionality to filter recipes.
- Detailed recipe view with ingredients and preparation steps.
- Responsive design using Material UI.
- State management using Redux.

## Tech Stack
- **Frontend:** React, Material UI
- **State Management:** Redux
- **API:** Dummy JSON API

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x)
- npm or yarn

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/barath-2606/RecipeList.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recipelist
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. Open the application in your browser at `http://localhost:5173/`

## API Details
This project uses the **Dummy JSON API** to fetch recipe data. Learn more at [DummyJSON](https://dummyjson.com/).

## Project Structure
```
recipe-list/
│── src/
│   │── components/        # Reusable UI components
│   │── pages/             # Page components
│   │── redux/             # Redux store and slices
│   │── services/          # API calls and handlers
│   │── App.js             # Main app component
│   │── index.js           # Entry point
│── public/                # Static assets
│── package.json           # Dependencies and scripts
│── README.md              # Project documentation
```

## Contributing
Feel free to submit issues or contribute by creating pull requests. Any contributions are welcome!

## License
This project is licensed under the MIT License.

---
### Contact
For any inquiries, reach out to **[Your Name]** at [your-email@example.com].


