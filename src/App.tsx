import ContentLayout from './components/ContentLayout';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PageLayout from './components/PageLayout';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="w-full min-h-screen h-screen">
            <PageLayout>
                <Navbar />
                <ContentLayout>
                    <Sidebar />
                    <Hero />
                </ContentLayout>
            </PageLayout>
        </div>
    );
}

export default App;
