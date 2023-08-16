import { render, fireEvent } from '@testing-library/react';
import App from './App';
import React from 'react';
import List from './componnets/List';




// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('YourComponent', () => {
  it('calls searchMovieWithName when the button is clicked', () => {
    const mockSearchMovie = jest.fn();
    const { container } = render(<List searchMovieWithName={mockSearchMovie} />);

    const buttonElement = container.querySelector('button:contains("Search")');
    fireEvent.click(buttonElement);

    expect(mockSearchMovie).toHaveBeenCalledWith('Avengers');
  });
});
