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
  const inputField = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText('Add Todo');

  fireEvent.change(inputField, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(3);  // One new todo should be added
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});
