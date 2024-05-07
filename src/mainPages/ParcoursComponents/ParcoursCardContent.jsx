
import htmlImg from "../../assets/ParcoursLogo/html.svg"
import javascript from "../../assets/ParcoursLogo/javascript.svg"
import mariadb from "../../assets/ParcoursLogo/mariadb.svg"
import php from "../../assets/ParcoursLogo/php.svg"
import react from "../../assets/ParcoursLogo/react.svg"
import css from "../../assets/ParcoursLogo/css.svg"
import MongoDb from "../../assets/ParcoursLogo/mongodb-icon-1.svg"
import { LinearGradient } from "react-text-gradients"
const HighLightedSpan = (label, right) => {
    return (

        <LinearGradient gradient={[(right ? "to left" : "to right"), "#E0AAFF,#9D4EDD"]} className="font-p  font-semibold">
            {label}
        </LinearGradient>

    )
}
const ParcoursCardContent = [
    {
        title: "HTML",
        img: htmlImg,
        caption: (
            <>
                Element indispensable du developpement web, le premier {HighLightedSpan("\"Hello world\"",true)}, le point de départ dans une aventure qui ne connaitra comme fin que l'imagination du voyageur. Le HTML est la clef qui permet d'acceder au developpement-web
            </>
        )
    },
    {
        title: "CSS",
        img: css,
        caption: (
            <>
                Le css, lui aussi un pilier fondamental du developpement web permettant d'exprimmer plus largement sa {HighLightedSpan("créativité")} en personnalisant la quasi-entierté des elements HTML, c'est en apprennant à me servir de cet outil et en appercevant les possibilitées qui s'ouvraient a moi que j'ai compris qu'elle était ma voie
            </>
        )
    },
    {
        title: "PHP",
        img: php,
        caption: (
            <>
                L'arrivé du {HighLightedSpan("Back-End",true)}, lors de mes premiers projets j'ai vite été contrain de développer un environement Back-End et quoi de mieux pour commencer le Back-End que PHP. Un languague stable et robuste contenant un tas de fonctionnalitée extremement interessante pour commencer le Back-End.
            </>
        )
    },
    {
        title: "SQL",
        img: mariadb,
        caption: (
            <>
                Qu'est ce qu'un environement Back-End sans {HighLightedSpan("base de données")} ? Permettant le stockage et la récuperation de données facilement et rapidement, j'ai commencé à utilisé 
            </>
        )
    },
    {
        title: "Javascript",
        img: javascript,

        caption: (
            <>

            </>
        )
    },
    {
        title: "React",
        img: react,
        caption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat mollitia, quas iste quod accusamus eaque eligendi excepturi ut voluptas eos modi veritatis alias molestias saepe sequi, ipsa consequatur atque quae."
    },
    {
        title: "MongoDB",
        img: MongoDb,
        caption: "Ayant entendu quelques echo sur MongoDB et les bases de données non relationnels (NOSQL) je me suis fixer pour objectif d'apprendre le fonctionnement de ce genre de base de données."
    }
]
export { ParcoursCardContent }

