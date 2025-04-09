# NEET Programs SPA with React Router

This project demonstrates single-page application routing using React Router DOM for a NEET coaching platform.

## Key Features

- **Client-side Routing**: Navigation without page reloads
- **Three Views**:
  - Landing page
  - Class 11 NEET programs
  - Class 12 NEET programs
- **Programmatic Navigation**: `useNavigate()` hook example

## Routing Implementation

1. **Route Configuration**: Set up in `App.jsx`
2. **Navigation Methods**:
   - Link components (declarative)
   - `useNavigate()` hook (imperative)
3. **Dynamic Routing**: Example with parameterized routes

## How to Run

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173)

## Project Structure

- `Landing`: Home/welcome page
- `Class11Programs`: NEET curriculum for 11th grade
- `Class12Programs`: NEET curriculum for 12th grade with back navigation
