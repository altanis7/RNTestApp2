import { useState } from 'react';
import { StyleSheet, TextInput, View, Alert,Text } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../util/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = (props) => {
    const {
        onPickNumber
    } = props;
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }

    const resetInputHandler = () =>{
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
        {  
            Alert.alert('Invalid number!', '1부터 99까지의 숫자만 입력하세요.',[{ text: '확인', style: 'destructive', onPress: resetInputHandler}]);
            return ;
        }

        onPickNumber(chosenNumber);
    }
    return (
        <View style={styles.rootContainer}>
            <Title>숫자 맞추기</Title>
            <Card>
                <InstructionText>숫자를 입력하세요.</InstructionText>
                <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType='number-pad' 
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>리셋</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>확인</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex : 1,
        marginTop : 100,
        alignItems: 'center'
    },
    numberInput : {
        height : 50,
        width: 50,
        fontSize : 32,
        borderBottomColor : Colors.accent500,
        borderBottomWidth : 2,
        color : Colors.accent500,
        marginVertical: 8,
        fontWeight : 'bold',
        textAlign : 'center'
    },
    buttonsContainer : {
        flexDirection : 'row'
    },
    buttonContainer :  {
        flex : 1,
    }
});