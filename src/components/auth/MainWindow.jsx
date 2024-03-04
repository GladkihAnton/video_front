import { useSelector } from 'react-redux'

export const MainWindow = ({ }) => {
    const Id = useSelector((state) => state.auth.userId)

    return (
        <div>
            <h1>Вы авторизованы</h1>
            <h2>Ваш айди: {Id}</h2>
        </div>
    )
}
