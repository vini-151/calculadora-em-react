
import { ButtomContainer } from './styles';



const Buttom = ({label, onClick}) => {
    return (
        <ButtomContainer onClick={onClick}>
            {label}
        </ButtomContainer>
    );
}

export default Buttom;