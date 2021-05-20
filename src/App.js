import { connect } from 'react-redux';
import './App.css';
import Login from './components/Login';
import MainPage from './components/MainPage';

function App({ accessToken }) {
    return accessToken ? <MainPage /> : <Login />;
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.all.accessToken,
    };
};

export default connect(mapStateToProps)(App);
