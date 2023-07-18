import { Text, StyleSheet } from "react-native";
import Colors from "../../util/colors";


const InstructionText = (props) => {
    const {
        style,
        children
    } = props;
    return <Text style={[styles.instructionText,style]}>{children}</Text>
};

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color : Colors.accent500,
        fontSize: 24
    },
});