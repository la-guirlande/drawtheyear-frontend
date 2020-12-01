import React from 'react';
import { Footer } from './footer';
import { Header } from './header';

/**
 * Home page component.
 */
export const HomePage: React.FC = () => (
    <div className="container mx-auto">
        <Header />
        <div className="h-48 flex flex-wrap content-center">
            <div className="w-1/2 text-center">
                <h2 className="text-2xl">News</h2>
            </div>
            <div className="w-1/2 text-center">
                <h2 className="text-2xl">Activity</h2>
            </div>
        </div>
        <hr className="my-3 bg-light"></hr>
        <Footer />
    </div>
)
