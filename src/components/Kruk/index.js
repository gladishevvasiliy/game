import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
// из случайного массива заданий случайным образом получается крюк. Передается в компонент Крюк.
// Нажатие на вариант ответа вызывает функцию, которая подсвечивает правильный вариант ответа,
// и вызывает функцию из Game, которая учитывает результат в рейтинге, и открывает следующий крюк.
// или если крюк последний, то выводит экран с результатом
export default class Kruk extends Component {

  buttonHandler = (e, title) => {
      const { exercise: { trueAnswer }, onChecked } = this.props;
      if (trueAnswer === title) {
          this.setState ({
            trueAnswerButtonColor: "green",
          })
          onChecked(true);
      } else {
        onChecked(false);
      }
  }

  render() {
      console.log("render");
    const { exercise } = this.props;
    return (
      <View>
        <View style={{ flex: 1 }}>
          <Text>{exercise.view}</Text>
          
        </View>
        <View>
            {exercise.answers.map((answer, index) => (
                <Button
                key={index}
                title={answer}
                onPress={(event) => this.buttonHandler(event, answer)}
                color={"#841584"}
                />)    
            )}

        </View>
      </View>
    );
  }
}
