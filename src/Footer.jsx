import './Footer.css';


const annee = new Date().getFullYear();
export default function Footer(){
    return (
        <footer>
            &copy;{annee} - TIM Maisonneuve - Tous droits réservés
        </footer>	
    );
}