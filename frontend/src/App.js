import React from "react";
import PostList from "./components/PostList";
import ErrorBoundary from "./components/ErrorBoundary";


const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Reddit Summary</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Popular</li>
            <li>All</li>
          </ul>
        </nav>
      </header>
      <main>
        <PostList />
        <ErrorBoundary />

      </main>
    </div >
  );
};

export default App;
