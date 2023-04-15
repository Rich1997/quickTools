import ContentLayout from './components/ContentLayout';
import ToolSpace from './components/ToolSpace';
import Navbar from './components/Navbar';
import PageLayout from './components/PageLayout';
import Sidebar from './components/Sidebar';
import RelatedSpace from './components/RelatedSpace';
import BottomNav from './components/BottomNav';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Recents from './pages/Recents';

function App() {
    return (
        <div className="w-full min-h-screen h-screen">
            <PageLayout>
                <Navbar />
                <ContentLayout>
                    <Sidebar />
                    <ToolSpace>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="recents" element={<Recents />} />
                        </Routes>
                    </ToolSpace>
                    <RelatedSpace>
                        <div>hello</div>
                    </RelatedSpace>
                </ContentLayout>
                <BottomNav />
            </PageLayout>
        </div>
    );
}

export default App;
