import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { FlatList } from "react-native";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) 
    {
      return generateRandomBetween(min, max, exclude);
    } 
    else 
    {
      return rndNum;
    }
  }

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {
    const {
        userNumber,
        onGameOver
    } = props;

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const nextGuessHandler = (direction) => { // direction => 'lower', 'greater'
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber))
        {
            Alert.alert('거짓말 마', '이건 아니야', [{text: 'Sorry', style: 'cancel' }])
            return;
        }

        if(direction === 'lower')
        {
            maxBoundary = currentGuess -1;
        }
        else
        {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;

    useEffect(() => {
        if(currentGuess === userNumber)
        {
            onGameOver(guessRounds.length);
        }
    },[currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    },[])
    
    return <View style={styles.screen}>
        <Title>상대방의 추측</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
        <InstructionText style={styles.instructionText}>Higher or lower? </InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color={'white'}/>
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color={'white'}/>
                    </PrimaryButton>
                </View>
            </View>
        </Card>
        <View style={styles.listContainer}>
            {/* {
                guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)
            } */}
            <FlatList 
                data={guessRounds} 
                renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>} 
                keyExtractor={(item) => item}
            />
        </View>
    </View>
};

export default GameScreen;

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 24
    },
    instructionText: {
        marginBottom : 12
    },
    buttonsContainer : {
        flexDirection : 'row'
    },
    buttonContainer : {
        flex : 1,
    },
    listContainer : {
        flex : 1,
        padding: 16,
    }
});