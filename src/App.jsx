// src/App.jsx
import React from 'react';
import Menubar from '@/components/ui/menubar';
import Container from '@/components/Container';
import OtherComponent from '@/components/ui/OtherComponent'; // Example component

function App() {
    return (
        <Container>
            <Menubar />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/3">
                    <OtherComponent />
                </div>
                <div className="w-full md:w-2/3">
                    {/* Another component */}
                </div>
            </div>
        </Container>
    );
}

export default App;
