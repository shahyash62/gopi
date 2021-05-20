import { connect } from 'react-redux';
import './App.css';
import Login from './components/Login';
import MainPage from './components/MainPage';

function App({ accessCode }) {
    return !accessCode ? <MainPage /> : <Login />;
}

const mapStateToProps = (state) => {
    return {
        accessCode: state.all.accessCode,
    };
};

export default connect(mapStateToProps)(App);
