import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserPlus, User, LockKeyhole} from "lucide-react";
import {cadastrar} from "../services/api";

export default function Cadastro(){
    const [usuario, setUsuario] = useState ("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro ] = useState ("");
    const navigate = useNavigate();

    async function handleCadastro(e){
        e.preventDefault();
        setMensagem("");
        setErro("");

        if(!usuario || !senha){
            setErro("Preencha todos os campos :P");
            return;
        } try {
            const response = await cadastrar(usuario, senha);
            setMensagem(response.mensagem);
            setTimeout(()=>navigate("/login"),800);

        }catch (erro){
            setErro(erro.message);
        }
    }
    return(
        <main className="page-shell">
            <section className="auth-card">
                <div className="brand-icon"> <UserPlus size={28}></UserPlus></div>
                    <p className="eyebrow">Novo acesso</p>
                    <h1>Cadastro</h1>
                    <p className="subtitle">crie um usuario para testar a autentificaçao.</p>
            </section> AAAAAAAAAAAAAAAAAAAA PAROU AQUI LINA 38
        </main>
    )

}
