import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

const onClickMock = jest.fn();

describe('Button Component', () => {
    beforeEach(() => {
        onClickMock.mockClear(); // очищаем мок перед каждым тестом
    });

    test('renders button with provided text', () => {
        render(<Button onClick={onClickMock}>Hello</Button>);
        expect(screen.getByRole('button')).toHaveTextContent('Hello');
    });

    test('calls onClick handler when clicked', () => {
        render(<Button onClick={onClickMock}>Click Me</Button>);
        fireEvent.click(screen.getByText('Click Me'));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test('applies default class if no className provided', () => {
        render(<Button onClick={onClickMock}>Default</Button>);
        const button = screen.getByRole('button');
        expect(button.className).toMatch(/btn/); // предполагается, что базовый класс — btn
    });

    test('applies custom class if className is passed', () => {
        render(
            <Button className="custom-class" onClick={onClickMock}>
                Custom
            </Button>
        );
        const button = screen.getByText('Custom');
        expect(button).toHaveClass('custom-class');
    });

    test('sets button type correctly', () => {
        render(<Button type="submit" onClick={onClickMock}>Submit</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('type', 'submit');
    });

    test('renders children elements inside the button', () => {
        render(
            <Button onClick={onClickMock}>
                <span>Nested Text</span>
            </Button>
        );
        expect(screen.getByText('Nested Text')).toBeInTheDocument();
    });
});