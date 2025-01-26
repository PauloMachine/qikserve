# QIKSERVE

## Project Description

QIKSERVE is an application developed with React and TypeScript, utilizing modern technologies to create a responsive and efficient user interface. This project is designed to facilitate scalability and maintainability, with integration of services, localization, and state management.

Link: https://qikserve-santiago.vercel.app/

## Project Structure

The project structure follows best practices for separation of concerns:

- **src/app**: General configurations and application initialization.
- **src/components**: Reusable components.
- **src/features**: Main modules with specific functionalities:
  - **basket**: Features related to the shopping basket.
  - **menu**: Includes menu item management, modifications, and sections.
  - **venue**: Venue management.
- **src/locales**: Localization files to support different languages.
- **src/pages**: Centering pages and referencing components.
- **src/services**: Shared services like API calls.
- **src/tests**: Unit and integration tests.

## Technologies Used

- **React** and **React DOM**: Building user interfaces.
- **TypeScript**: Static typing for improved reliability and scalability.
- **Axios**: HTTP requests.
- **React Router**: Routing management.
- **Redux Toolkit**: State management.
- **Styled Components**: Component styling.
- **React Query**: Handling asynchronous data.
- **i18next**: Localization.

## Installation and Running

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/qikserve.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the API base URL in the `.env` file:

   ```env
   REACT_APP_QIKSERVE_URL=https://cdn-dev.preoday.com
   ```

4. Run the application in development mode:

   ```bash
   npm start
   ```

5. Access it in your browser:
   ```
   http://localhost:3000
   ```

## Available Scripts

- **`npm start`**: Starts the application in development mode.
- **`npm build`**: Builds the app for production.
- **`npm test`**: Runs tests with Jest.
- **`npm eject`**: Exposes build configurations (irreversible).

## Testing

The project uses **Jest** for unit tests and **Testing Library** for React component tests. To run tests:

```bash
npm test
```

## Code Conventions

- **Typing**: Always use TypeScript to ensure consistency.
- **Styling**: Prefer **Styled Components** for managing styles.
- **Commits**: Follow the **Conventional Commits** convention for clear messages.

## Key Dependencies

- **`axios`**: ^1.7.9
- **`react`**: ^19.0.0
- **`styled-components`**: ^6.1.14
- **`react-query`**: ^5.64.2
- **`redux-toolkit`**: ^2.5.0

## Development Dependencies

- **`jest`**: ^29.7.0
- **`ts-jest`**: ^29.2.5
- **`@testing-library/react`**: ^16.0.0

---

**Developed by [Paulo Santiago](https://github.com/PauloMachine)**
