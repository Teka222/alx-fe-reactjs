// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(2);  // Initially two todos
});

test('adds a new todo', () => {
  render(<TodoList />);
  const addButton = screen.getByText('Add Todo');
  fireEvent.click(addButton);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(3);  // One new todo should be added
});

test('toggles a todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  fireEvent.click(todo);  // Click to toggle the completion status
  expect(todo).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todo);  // Click again to toggle back
  expect(todo).not.toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(1);  // One todo should be deleted
});
