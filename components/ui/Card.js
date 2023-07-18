import { StyleSheet,View } from "react-native";
import Colors from "../../util/colors";


const Card = (props) => {
    const {
        children
    } = props;
    return <View style={styles.card}>
        {children}
    </View>
};

export default Card;

const styles = StyleSheet.create({
    card : {
        justifyContent : 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal : 24,
        padding : 16,
        backgroundColor : Colors.primary800,
        borderRadius : 8,
        elevation: 4, // android에만 있는 박스쉐도우 프로퍼티
        // shadow는 iOS에 있는 박스 쉐도우 프로퍼티
        shadowColor : 'black',
        shadowOffset : { width: 0 , height : 2},
        shadowRadius : 6,
        shadowOpacity : 0.25,
    },
});