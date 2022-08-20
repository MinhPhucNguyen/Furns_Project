import './App.scss';
import Footer from './components/Footer';
import RoutesPage from './Routes/RoutesPage';
import ComponentsHeader from './components/ComponentsHeader';
// import ToastMessage from './components/ToastMessage';

function App() {
    return (
        <div className="app">
            <ComponentsHeader />
            <RoutesPage />
            <Footer />
        </div>
    );
}

export default App;
