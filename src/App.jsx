import './styles/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import {AuthWindow, MainWindow} from './components'
import {useSelector} from "react-redux";

export default function App() {
    const isLogin = useSelector((state) => state.auth.isLogin)

    return (
        <div>
            {!isLogin && <AuthWindow/>}
            {isLogin && <MainWindow/>}
        </div>
    )
}
