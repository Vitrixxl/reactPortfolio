
import htmlImg from "../../assets/ParcoursLogo/html.svg"
import javascript from "../../assets/ParcoursLogo/javascript.svg"
import mariadb from "../../assets/ParcoursLogo/mariadb.svg"
import php from "../../assets/ParcoursLogo/php.svg"
import react from "../../assets/ParcoursLogo/react.svg"
import css from "../../assets/ParcoursLogo/css.svg"
import MongoDb from "../../assets/ParcoursLogo/mongodb-icon-1.svg"
import nodeJs from "../../assets/ParcoursLogo/nodeJs-svg.svg"
import tailwind from "../../assets/ParcoursLogo/Tailwind_CSS_Logo.svg"
import express from "../../assets/ParcoursLogo/Express.svg"
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
                Element indispensable du developpement web, le premier {HighLightedSpan("\"Hello world\"", true)}, le point de départ dans une aventure qui ne connaitra comme fin que l'imagination du voyageur. Le HTML est la clef qui permet d'acceder au developpement-web
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
                L'arrivé du {HighLightedSpan("Back-End", true)}, lors de mes premiers projets j'ai vite été contrain de développer un environement Back-End et quoi de mieux pour commencer le Back-End que PHP. Un languague stable et robuste contenant un tas de fonctionnalitée extremement interessante pour commencer le Back-End.
            </>
        )
    },
    {
        title: "SQL",
        img: mariadb,
        caption: (
            <>
                Qu'est ce qu'un environement Back-End sans une {HighLightedSpan("base de données")} ? Permettant le stockage et la récuperation de données facilement et rapidement, j'ai commencé à utiliser les bases de données sql avec des gestions d'utilisateurs, de produits et de commandes.
            </>
        )
    },
    {
        title: "Javascript",
        img: javascript,

        caption: (
            <>
                En un mot : {HighLightedSpan("Dynamisme", true)}. Que ce soit pour l'affichage, le traitement d'information coté client ou l'envoie et la réception de données, Javascript s'est vite révélé indispensable pour le développement et l'amelioration de mes projets
            </>
        )
    },
    {
        title: "React",
        img: react,
        caption: (
            <>
                Après avoir joué avec PHP et javascript, il était temps de s'attaquer aux {HighLightedSpan("\"One Page Website\"")}, des sites web qui ne demande d'être chargés qu'une fois, améliorant donc le dysnamisme et l'experience utilisateur. C'est grace au FrameWork React que j'ai crée mon premiere "One Page Website" et la practicité du developpement web par composant n'a fait que renforcé mon envie de creer.
            </>
        )
    },
    {
        title:"Tailwind CSS",
        img: tailwind,
        caption:(
            <>
                Fini de perdre du temps avec les classes et les id, Tailwind permet un {HighLightedSpan("gain de temps ")} considérable pour styliser et facilite le {HighLightedSpan("responsive ")} en ayant la possibilitées d'implementer le CSS directement dans les classes de notre elément.
            </>
        )
    },
    {
        title:"Node JS",
        img : nodeJs,
        caption:(
            <>
                Pour creer mes {HighLightedSpan("APIs ")}, notamment celle qui gère ce portfolio j'ai opté pour Node JS. Couplé à {HighLightedSpan("MongoDB ")} et {HighLightedSpan("ExpressJS ")} cela me permet de creer mon {HighLightedSpan("MVC ")} donc d'avoir une organisation de code propre et durable. 
            </>
        )
    },
    {
        title:"Express JS",
        img: express,
        caption:(
            <>
                L'api de ce portfolio tourne sous le framework  {HighLightedSpan("Express JS ")}. Un outil particulierement puissant pour la gestion des {HighLightedSpan("routes ")} et des {HighLightedSpan("middlewears ")}, mais aussi des {HighLightedSpan("cookies ")}. En bref un outil indispensable pour creer un site solide et rapide et sécurisé.
            </>
        )
    },
    {
        title: "MongoDB",
        img: MongoDb,
        caption: (
            <>
                Ayant entendu quelques echo sur MongoDB et {HighLightedSpan("les bases de données non relationnels ")}(NOSQL) je me suis fixer pour objectif de comprendre et maitriser MongoDB en développant des projets basés sur du NOSQL. Notamment ce portfolio qui est powered by MongoDB
            </>
        )
    },

]
export { ParcoursCardContent }

