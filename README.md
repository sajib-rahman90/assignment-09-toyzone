# Project name : ToyZone – A Local Kid's Toys Store.

# Project Purpose :

ToyZone is a web-based toy store application where users explore and view different children's toys online. The web-site provides a clean and simple interface where visitors can browse featured and popular toys, view product details, and place orders after logging in. The goal of this project is to demonstrate how a local toy store can present its products online through a user-friendly web application.

The website follows a simple layout structure that includes a **Navbar, Main Section, and Footer**. The Navbar helps users navigate between important pages such as Home, About Us, My Profile, and Orders. However, some pages are visible only when the user is logged in. If the user is not logged in, private pages like My Profile, toy details and Orders will not appear in the navigation menu.

The main section of the website contains the primary content. One part of this section shows **Featured Toys** using a _Swiper slider_ so users can quickly scroll through selected products. Another section displays **Popular Toys**, where toys are presented in card format with details such as image, name, price, rating available and view more buttons. When users click the **View More** button from the Popular Toys section, they are taken to the Toy Details page. This page displays full product information, including the toy image, name, description, and price. From this page. And also hava a users feedback form. Where users can feedback in toys.

ToyZone includes a complete **user authentication system**. New users can register by providing their,
Name
Email
photoURL
password  
A Link that will redirect to the login page
Google Login

After registration, they can log in using their email and password. The system also includes a password reset option in case a user forgets their password.

Once logged in, users can access the **My Profile page**, which is a protected page. This page shows the user’s photo, name, and email address. Users can also update their name and profile photo if they want. Several pages in the website are protected, including the My Profile page, Orders page, and Toy Details page. If a user tries to access these pages without logging in, they will be redirected to the login page.

The **Orders Page** allows users to view the products they have ordered. This page is also a **protected page**, meaning users must be logged in to access it.

Overall, ToyZone is a simple and practical web application that demonstrates modern web development concepts such as authentication, protected routes, product browsing, and profile management. It provides a smooth experience for users who want to explore toys and manage their orders online.

# Key Features :

    User registration and login system,

    Password reset functionality,

    Protected routes for sensitive pages,

    User profile management (update name and photo),

    Featured toys slider section,

    Popular toys product listing,

    Product details page,

    Order page for viewing ordered products,

    Authentication state after page reload,

    Responsive UI design.

# NPM Packages Used are :

    react,

    react-dom,

    react-router,

    firebase,

    react-helmet-async,

    react-toastify,

    react-icons,

    swiper,

    tailwindcss,

    daisyui.

# Live URL:

Live Website:
