import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
    test('renders title and description', () => {
        const title = 'Test Title';
        const description = 'Test Description';

        render(<Card title={title} description={description} />);

        // Отображение загаловка
        expect(screen.getByText(title)).toBeInTheDocument();
        // Отображение описания
        expect(screen.getByText(description)).toBeInTheDocument();
        // Какой класс заголовка
        expect(screen.getByRole('heading', { level: 2 })).toHaveClass('card__title');
    });
});