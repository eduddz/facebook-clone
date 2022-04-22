import "./styles.scss";

export function Main() {
    return (
        <main>
            <div className="left">
                <h1>facebook</h1>
                <p>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</p>
            </div>
            <div className="right">
                <form>
                    <input 
                        type="text"
                        placeholder="Email ou telefone" />
                    <input 
                        type="password"
                        placeholder="Senha" />
                    <button className="blue">Entrar</button>

                    <a>Esqueceu a senha?</a>

                    <hr />

                    <button className="green">Criar nova conta</button>
                </form>
                <p>
                    <a>Criar uma Página</a> para uma celebridade, uma marca ou uma empresa.
                </p>
            </div>
        </main>
    )
}