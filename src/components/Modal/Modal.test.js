import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '.';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { closeModal } from '../../redux/slices/modalStatusSlice';

const mockStore = configureStore([]);
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch
}));

describe('Modal component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
        mockDispatch.mockClear();
    });

    test('should not render when isOpen is false', () => {
        render(
            <Provider store={store}>
                <Modal isOpen={false}>
                    <p>Hidden content</p>
                </Modal>
            </Provider>
        );
        expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
    });

    test('should render children when isOpen is true', () => {
        render(
            <Provider store={store}>
                <Modal isOpen={true}>
                    <p>Visible content</p>
                </Modal>
            </Provider>
        );
        expect(screen.getByText('Visible content')).toBeInTheDocument();
    });

    test('should call closeModal on background click', () => {
        render(
            <Provider store={store}>
                <Modal isOpen={true}>
                    <p>Modal content</p>
                </Modal>
            </Provider>
        );

        const backdrop = screen.getByText('Modal content').parentElement;
        fireEvent.click(backdrop);

        expect(mockDispatch).toHaveBeenCalledWith(closeModal());
    });

    test('should not call closeModal on inner content click', () => {
        render(
            <Provider store={store}>
                <Modal isOpen={true}>
                    <div data-testid="content">Modal content</div>
                </Modal>
            </Provider>
        );

        const content = screen.getByTestId('content');
        fireEvent.click(content);

        expect(mockDispatch).not.toHaveBeenCalled();
    });
});