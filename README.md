# Travel Destination Finder

## Table of Contents

- [Introduction](#introduction)
- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Future Enhancements](#future-enhancements)
- [Contributions](#contributions)
- [License](#license)
- [Acknowledgement](#acknowledgement)
- [Contact Information](#contact-information)

---

## Introduction

Global Travel Finder is an easy-to-use web application designed to help users discover the best travel destinations based on their preferences. Whether you’re looking for adventure, relaxation, or cultural experiences, this app provides personalized travel suggestions to make your next trip memorable.

---

## Problem Statement

Travel enthusiasts often struggle to find destinations that align with their specific interests, whether for a relaxing getaway, an adventurous trip, or a cultural exploration. With so many places to visit around the world, it can be overwhelming to narrow down the options and find a destination that fits personal preferences.

---

## Solution

The Travel Destination Finder solves this problem by allowing users to search for destinations based on their interests. The app uses data from the GeoDB API to provide suggestions for cities and countries.

---

## Technologies Used

The app was developed using the following technologies:

- **HTML**: For structuring the web pages.
- **CSS**: For styling and layout.
- **ReactJS**: For building the user interface.
- **React Router**: For navigation between pages.
- **JSON Server**: For simulating a backend API.
- **GeoDB API**: For fetching travel destination data.

---

## Features

1. **Personalized Destination Search**  
   Users can input their travel location preferences (e.g., Africa, North America, Asia) to receive tailored destination recommendations.

2. **Destination History**  
   Users receive a brief history of the travel destination and what is expected from the country (e.g., the best time to travel, the cost of travel).

3. **Travel Tips**  
   The app offers relevant travel tips based on factors such as weather conditions and travel time.

4. **Trip Booking**  
   Users can book travel trips based on the number of people and the number of days spent.

5. **Add a Travel Destination**  
   Users can contribute by adding new travel destinations to the database.

6. **Responsive Design**  
   The app is fully responsive and works seamlessly on desktops, tablets, and mobile devices.

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/BrianSila/Travel-destination-finder
   ```

2. Navigate to the project directory:

   ```bash
   cd Travel-destination-locator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the JSON server:

   ```bash
   json-server --watch db.json
   ```

5. Start the React development server:

   ```bash
   npm start
   ```

6. Access the application in your browser at:
   ```
   http://localhost:3000
   ```

---

## Usage

After setting up the application, users can:

- **Explore Destinations**: Browse destination recommendations based on their preferences.
- **Discover New Interests**: Explore new locations and discover underrated destinations.
- **Book Trips**: Plan and book trips directly through the app.
- **Add Destinations**: Contribute to the database by adding new travel destinations.

---

## API Integration

The app integrates with the **GeoDB API** to fetch travel destination data. The API provides information about cities, countries, and regions, enabling the app to offer personalized recommendations.

To use the API, ensure you have an API key. Update the `.env` file with your API key:

```
REACT_APP_GEODB_API_KEY=https://my-app-backend-kb5c.onrender.com
```

---

## Future Enhancements

The following features are planned for future releases:

1. **User Authentication**  
   Implement user login and signup functionality for a more personalized experience.

2. **Reviews and Ratings**  
   Allow users to leave reviews and ratings for destinations.

3. **Advanced Filters**  
   Add filters for budget, activities, and travel duration.

4. **Integration with Booking APIs**  
   Enable users to book flights and accommodations directly through the app.

5. **Offline Mode**  
   Allow users to save destinations and access them offline.

---

## Contributions

We welcome contributions to the Travel Finder app! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request.

Please ensure your changes are well-documented and tested.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgement

Special thanks to the team for their creativity and skills portrayed in the development of this project. We also acknowledge the GeoDB API for providing valuable data.

---

## Contact Information

For any inquiries or feedback, please contact:

- **Name**: Sharlly Rose
- **Email**: sharllyrose.wanjala@student.moringaschool.com
- **GitHub**: [Sharlly Rose](https://github.com/Sharllyrose)

Feel free to reach out with suggestions or issues!
