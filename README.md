# Product Recommendation System

A content-based product recommendation system built with Python, Flask, and scikit-learn. This web application allows users to search for a product and receive a list of similar items based on product tags and descriptions.

<img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/9619d39e-be0e-4bbe-b73b-1e65cffb9cdf" />


## Features

-   **Content-Based Recommendations**: Uses a pre-computed similarity matrix to find and suggest similar products.
-   **Interactive UI**: A clean and modern user interface built with Bootstrap 5.
-   **Dynamic Product Cards**: Displays results in a grid of cards, each with its own image carousel.
-   **Product Detail Modal**: Click on a product's text area to open a modal with more detailed information.
-   **Conditional Display**: Shows a welcome message on initial load, a "not found" message for unsuccessful searches, and the results grid when products are found.

---

## Tech Stack

-   **Backend**: Python, Flask
-   **Machine Learning**: Pandas, Scikit-learn
-   **Frontend**: HTML, CSS, JavaScript, Bootstrap 5

---

## Setup and Installation

Follow these steps to get the project running on your local machine.

#### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name
```

#### 2. Create and Activate a Virtual Environment
It's highly recommended to use a virtual environment to manage project dependencies.
```bash
# Create a virtual environment
python -m venv venv

# Activate it (on Windows)
venv\Scripts\activate

# Activate it (on macOS/Linux)
source venv/bin/activate
```

#### 3. Install Dependencies
This project's required packages are listed in `requirements.txt`.
```bash
pip install -r requirements.txt
```

#### 4. Run the Flask Application
```bash
python app.py
```
The application will be running at `http://127.0.0.1:5000`.

---

## Usage

1.  Open your web browser and navigate to `http://127.0.0.1:5000`.
2.  Type a product name into the search bar (e.g., "american crew").
3.  Click the "Search" button to see a list of recommended products.
4.  Click on a product's name or description to open a detailed modal view.
