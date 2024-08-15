import MyButtonTeste from "../../componentes/MyButtonTeste"
import { useNavigate } from "react-router-dom"

function Home() {
    const navigateTo = useNavigate();

    const goToLogin = () => {
        return navigateTo{"/login"}
    }

    return (
        <>
        <Link to={'/login'}></Link>
        <MyButtonTeste text='ir para login'/>
        <Button onClick={goToLogin}>Ir para login</Button>
        <p>Home page</p>
        </>
    )
}

export default Home