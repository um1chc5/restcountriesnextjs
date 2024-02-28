"use client";

function ThemeToggle() {
  const toggleTheme = () => {
    document.querySelector("body")?.classList.toggle("dark");
  };
  return <button onClick={toggleTheme}>Dark mode</button>;
}

export default ThemeToggle;
