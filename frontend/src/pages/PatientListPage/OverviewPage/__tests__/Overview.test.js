import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import Overview from '../Overview'
import { AppContext } from '../../../../utils/AppContextProvider';

it('renders overview with context correctly', () => {

const team = []

        const { getByText } = render(
        <AppContext.Provider value={team}>
            <Overview />
        </AppContext.Provider>
    )


})