# CS465REDO

Architecture
The frontend for this project included both Express-rendered HTML and an Angular-based single-page application (SPA). The Express HTML handled the customer-facing pages, focusing on static content and basic interactions, while the SPA managed the admin side with dynamic data handling and reusable UI components. The SPA was faster once loaded, reducing page reloads and improving user flow, though it required more complex routing and API communication. The backend used a NoSQL MongoDB database because of its flexibility in handling unstructured data, quick scalability, and its JSON-like structure that integrates well with JavaScript-based applications.

Functionality
JSON is a lightweight data format that’s separate from JavaScript but used by it to structure and exchange data. It acts as the bridge between the frontend and backend by passing data in a consistent, readable format through API endpoints. During development, I refactored repetitive route handlers and frontend components to improve readability and performance. Reusable UI components made it easier to maintain the admin dashboard since shared logic and visuals could be updated once and reflected everywhere.

Testing
Each route and endpoint in the API was tested to confirm proper handling of GET, POST, PUT, and DELETE requests. Authentication added a security layer that required session and token validation, making endpoint testing more detailed. Understanding the connection between methods, endpoints, and secure data flow was key to confirming that both customer and admin features interacted safely with the database.

Reflection
This course helped me connect all parts of full stack development from front to back. I learned how to structure APIs, manage secure data transactions, and build responsive frontends. The focus on reusable code, RESTful design, and testing improved how I approach development overall. These skills make me more confident and marketable as a software engineer ready for real-world web application work.
