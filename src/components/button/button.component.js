import './button.styles.scss';


const MyButton = ({label, icon , color, bg}) => {
    return(
        <button style={{color:color, backgroundColor:bg}}> {label} <span><img src={icon}/></span></button>
    );
}

export default MyButton;