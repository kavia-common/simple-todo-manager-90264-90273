import React from "react";
import "./TodoPage.css";

function StatusBar() {
  // This is a visual stub for the iOS/Android style status bar
  return (
    <div className="status-bar">
      <div className="notch"></div>
      <div className="status-icons">
        {/* These blocks stand in for network, wifi, battery icons */}
        <span className="signal"></span>
        <span className="wifi"></span>
        <span className="battery"></span>
      </div>
      <div className="status-time">9:41</div>
    </div>
  );
}

function TodoNavTabs({ activeTab, onTabChange }) {
  return (
    <div className="todo-nav-tabs">
      <button
        className={`tab${activeTab === "all" ? " active" : ""}`}
        onClick={() => onTabChange("all")}
      >
        <span className="tab-icon playlist-icon" />
        <span>All</span>
      </button>
      <button
        className={`tab${activeTab === "completed" ? " active" : ""}`}
        onClick={() => onTabChange("completed")}
      >
        <span className="tab-icon tick-icon" />
        <span>Completed</span>
      </button>
    </div>
  );
}

function TodoAppBar() {
  return (
    <div className="appbar">
      <div className="calendar-icon" />
      <span className="todo-title">TODO APP</span>
    </div>
  );
}

function TodoCard({ title, subtitle }) {
  return (
    <div className="todo-card">
      <div className="todo-card-titles">
        <div className="todo-card-title">{title}</div>
        <div className="todo-card-subtitle">{subtitle}</div>
      </div>
      <div className="todo-card-actions">
        <button className="icon-btn check-circle" aria-label="Mark as complete" />
        <button className="icon-btn delete" aria-label="Delete" />
        <button className="icon-btn pencil" aria-label="Edit" />
      </div>
    </div>
  );
}

function AddTodoButton({ onClick }) {
  return (
    <button className="add-todo-btn" onClick={onClick} aria-label="Add new todo">
      <span className="plus-ellipse">
        <span className="plus-icon" />
      </span>
    </button>
  );
}

export default function TodoPage() {
  const [tab, setTab] = React.useState("all");
  // Static cards for demo purposes; would be dynamic in a connected app
  const todos = [
    { title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
  ];

  return (
    <div className="todo-page">
      <StatusBar />
      <TodoAppBar />
      <TodoNavTabs activeTab={tab} onTabChange={setTab} />
      <div className="todo-list">
        {todos.map((todo, i) => (
          <TodoCard key={i} {...todo} />
        ))}
      </div>
      <AddTodoButton onClick={() => {}} />
    </div>
  );
}
