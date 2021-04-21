import LebronJames from "../assets/images/LeBron.jpg"
import StephCurry from "../assets/images/StephCurry.jpg"
import DamianLillard from "../assets/images/DamianLillard.jpg"
import KawhiLeonard from "../assets/images/KawhiLeonard.jpg"
import Giannis from "../assets/images/Giannis.jpg"
import JasonTatum from "../assets/images/JasonTatum.jpg"
import BradleyBeal from "../assets/images/BradleyBeal.jpg"
import JimmyButler from "../assets/images/JimmyButler.jpg"
import JoelEmbiid from "../assets/images/JoelEmbiid.jpg"
import KevinDurant from "../assets/images/KevinDurant.jpg"
import LukaDoncic from "../assets/images/LukaDoncic.jpg"
import ZachLaVine from "../assets/images/ZachLaVine.jpg"
import '../assets/css/photos.css'

export const Photos = () => {
    return <div className="photos__container">
        <div className="photos__feed">
            <div className="image__container">
                <img className="photo__post" src={LebronJames} alt="Lebron James"/>
            </div>
            <div className="image__container">
                <img className="photo__post" src={StephCurry} alt="Steph Curry"/>
            </div>
            <div className="image__container">
                <img className="photo__post" src={DamianLillard} alt="Damian Lillard"/>
            </div>
            <div className="image__container">
                <img className="photo__post" src={KawhiLeonard} alt="Kawhi Leonard"/>
            </div>
            <div className="image__container">
                <img className="photo__post" src={Giannis} alt="Giannis Antetokounmpo"/>
            </div>
            <div className="image__container">
                <img className="photo__post" src={JasonTatum} alt="Jason Tatum"/>
            </div>
            <div className="image__container">
                <img className="photo__post" src={BradleyBeal} alt="Bradley Beal"/>
            </div>
            <div className="image__container">
                <img className="photo__post" src={JimmyButler} alt="Jimmy Butler"/>
            </div>
            <div className="image__container">
                <img className="photo__post" src={JoelEmbiid} alt="Joel Embiid"/>
            </div>
            <div className="image__container">
                <img className="photo__post" src={KevinDurant} alt="Kevin Durant"/>
            </div>
            <div className="image__container">
                <img className="photo__post" src={LukaDoncic} alt="Luka Doncic"/>
            </div>
            <div className="image__container">
                <img className="photo__post" src={ZachLaVine} alt="Zach LaVine"/>
            </div>
        </div>
    </div>
}