import { View, Text, StyleSheet } from "react-native";
import Colors from "../../util/colors";

const GuessLogItem = (props) => {
    const {
        roundNumber,
        guess
    } = props;
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>상대의 추측 : {guess}</Text>
        </View>
    )
};

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem : {
        borderColor: Colors.primary800,
        borderWidth : 1,
        borderRadius : 40,
        padding : 12,
        marginVertical: 8,
        backgroundColor : Colors.accent500,
        flexDirection : 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation : 4,
    },
    itemText: {
        
    }
});