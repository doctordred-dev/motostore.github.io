import { render } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner component', () => {
    test('matches snapshot', () => {
        const { asFragment } = render(<LoadingSpinner />);
        expect(asFragment()).toMatchSnapshot();
    });
});