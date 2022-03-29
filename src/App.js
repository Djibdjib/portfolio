import './App.css';

//ICONS
import { UilMehClosedEye, UilMapPinAlt, UilReact, UilJavaScript, UilDocker, UilLinux, UilGithub } from "@iconscout/react-unicons";

function App() {
    return (
        <div className="fixed bg-black overflow-auto w-screen h-screen flex flex-col md:flex-row">
            <div className="w-1/12">
                <div className="p-4">
                    <header className="relative top-0 left-0 text-yellow"><UilMehClosedEye size="60" /></header>
                </div>
            </div>
            <div className="w-11/12">
                <div className="p-4">
                    <article className="prose">
                        <h1 className="text-yellow font-title text-7xl mt-4">Hi! I'm Djib, Web Developer</h1>
                        <h2 className="text-teal text-sm flex font-subTitle"><UilMapPinAlt size="16" className="mt-0.5 mr-1" />Strasbourg, France</h2>
                        <p className="text-white font-text">
                            Je suis développeur FullStack Sénior depuis 2007. Après avoir fait beaucoup de PHP (Symfony) dans des développements Web traditionnels, je me
                            tourne aujourd'hui vers le JavaScript et notamment avec la Stack MERN (MongoDb, ExpressJs, React, NodeJs).
                        </p>
                        <p className="text-white font-text">
                            Contactez-moi pour collaborer ensemble sur votre projet !
                        </p>
                    </article>

                    <div className="fixed bottom-10 right-5 md:right-20 h-80">
                        <div className="relative bottom-0 right-0 border-r border-white h-full">

                            <ul className="relative bg-black block h-60" style={{ left: 20 }}>
                                <li className="my-1"><UilReact size="36" className="text-white" /></li>
                                <li className="my-1"><UilJavaScript size="36" className="text-white" /></li>
                                <li className="my-1"><UilDocker size="36" className="text-white" /></li>
                                <li className="my-1"><UilLinux size="36" className="text-white" /></li>
                                <li className="my-1"><UilGithub size="36" className="text-white" /></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
