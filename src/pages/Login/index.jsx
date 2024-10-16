import { BsPersonFill, BsLockFill, BsFillDoorOpenFill } from "react-icons/bs"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"
import image from '/img-exped.jpg'

export function Login() {
    const [ name, setName ] = useState('')
    const [ password, setPassword ] = useState('')

    const { Login } = useAuth()

    function handleLog() {
        if(!name || !password) {
            return alert('Usuário ou senha invalidos')
        }

        Login(name, password)
    }

    return (
        <main className="w-full  h-screen flex lg:grid lg:grid-cols-2">

            <section className="w-80 m-auto flex flex-col gap-4
                                lg:w-96 ">

                <header className="flex items-center place-content-center gap-2">
                    <h1 className="text-3xl">Login</h1>
                    <BsFillDoorOpenFill size={30}/>
                </header>

                <p>Autentique-se com uma conta do protheus</p>

                <form className="flex flex-col gap-2">
                    <Input 
                        icon={BsPersonFill}
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />

                    <Input 
                        icon={BsLockFill}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button title="Entrar" onClick={handleLog}/>
                </form>
            </section>

            <div className="h-full hidden lg:block">
                <img className="w-full h-full object-contain" src={image} alt="imagem de um caminhão de transportadora"/>
            </div>
        </main>
    )
}