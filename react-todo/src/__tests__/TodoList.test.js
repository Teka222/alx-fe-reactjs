import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList'; // Adjust the import path based on your file structure
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
  // Test initial render and that demo todos are displayed
  test('renders TodoList and displays initial todos', () => {
    render(<TodoList />);

    // Check if the todo items are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo List App')).toBeInTheDocument();
  });

  // Test adding a todo
  test('adds a new todo item', () => {
    render(<TodoList />);

    // Simulate user input for a new todo
    const input = screen.getByPlaceholderText('Enter new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    // Check if the new todo appears in the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test toggling a todo
  test('toggles completion status of a todo', () => {
    render(<TodoList />);

    // Find the first todo item and click it to toggle completion
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);

    // Check if the todo is marked as completed
    expect(todoItem).toHaveClass('completed'); // Assuming you have a "completed" class
  });

  // Test deleting a todo
  test('deletes a todo item', () => {
    render(<TodoList />);

    // Find and click the delete button
    const deleteButton = screen.getByTestId('delete-btn-Learn React'); // Assuming you have data-testid="delete-btn-{todoName}"
    fireEvent.click(deleteButton);

    // Check that the todo is no longer in the document
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
