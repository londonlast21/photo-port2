import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../PhotoList'
import { renderIntoDocument } from 'react-dom/test-utils'

afterEach(cleanup)

describe('Photolist is rendering', () => {
    it('renders', () => {
        renderIntoDocument(<PhotoList />);
    });

    it('renders', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    });
});