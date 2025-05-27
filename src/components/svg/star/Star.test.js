import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Star from '.';

describe('Star component', () => {
    const mockOnClick = jest.fn();

    test('renders correctly (snapshot)', () => {
        const { asFragment } = render(<Star onClick={mockOnClick} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('calls onClick when clicked', () => {
        render(<Star onClick={mockOnClick} />);
        const svgElement = screen.getByRole('img', { hidden: true });
        fireEvent.click(svgElement);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test('applies custom className', () => {
        render(<Star onClick={mockOnClick} className="custom-class" />);
        const svgElement = screen.getByRole('img', { hidden: true });
        expect(svgElement).toHaveClass('custom-class');
    });
});