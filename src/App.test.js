import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import App from "./App";
import Pagination from './components/Pagination';

afterEach(cleanup);
test('render the loading... of an application', () => {
  render(<App />);

  const titleEl = screen.getByText(/Loading.../);
  expect(titleEl).toBeInTheDocument();
});

test('user clicks button to paginate', () => {

  const paginate = jest.fn()
  render(
    <div className='btn'>
      <button onClick={() => paginate(2)} href='!#'>1</button>
    </div>
  );

  const button = screen.getByRole('button');
  fireEvent.click(button)
  expect(paginate).toHaveBeenCalledTimes(1);

});
