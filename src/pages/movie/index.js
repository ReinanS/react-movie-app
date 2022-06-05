import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./movie.css"

function Filme(){
    const {id}=useParams();
    const [filme, setFilme] = useState({});
	const [loading, setLoading] = useState(true);
    const history = useNavigate();

    useEffect(() => {
        async function loadFilme() {
            let url="https://sujeitoprogramador.com/r-api/?api=filmes/";
            const response = await axios.get(url + id);
            if(response.data.length===0){
                history('/'); // manda para Home
                return;
            }
            setFilme(response.data);
            setLoading(false);
        }
        loadFilme();
    }, [history,id]);

    function salvarFilme(){
        let filmesSalvos = JSON.parse(localStorage.getItem("filmes"))|| [];
        let hasFilme = filmesSalvos.some((item)=>item.id===filme.id);
        if(hasFilme){
            toast.error('Você ja Salvou esse filme');
            return;
        } 
        filmesSalvos.push(filme);
        localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso');
    }

    if (loading) {
        return (
            <div className="filme-info">
                <h1>carregando filme... </h1>
            </div>
        );
    }else{
        return (
             <div className="filme-info">
                 <h1> {filme.nome} </h1>
                 <img src={filme.foto} alt={filme.nome}/>
                 <h3>Sinopse</h3>
                 {filme.sinopse}
                 <div>
                     <button onClick={()=>salvarFilme()}>Salvar</button>
                     <button>
                         <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} treiler`}>Treiler</a>
                     </button>
                 </div>
             </div>
         );
     }
 



    }export default Filme;