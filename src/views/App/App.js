import Auth from '../../components/Auth/Auth';
import MainPage from '../MainPage/MainPage';
import './App.css';

function App() {
    return (
        <Auth render={api => (
            <MainPage api={api} />
        )} />
    );
}

export default App;
