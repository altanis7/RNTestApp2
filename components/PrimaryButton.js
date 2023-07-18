import { View, Text, Pressable, StyleSheet } from 'react-native'
const PrimaryButton = (props) => {
    const {
        children,
        onPress,
    } = props;
    
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={onPress} android_ripple={{color : 'yellow'}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer : {
        borderRadius: 28,
        margin : 4,
        overflow: 'hidden',
    },
    buttonInnerContainer : {
        backgroundColor : '#72063c',
        paddingVertical: 8,
        paddingHorizontal : 16,
        elevation : 2
    },
    buttonText : {
        color : 'white',
        textAlign : 'center'
    },
    pressed : { // iOS에서 시각적 피드백
        opacity : 0.75
    }
});