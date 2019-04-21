import React from 'react'

import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { Button, DataTable, Title } from 'react-native-paper'

import { Context } from '../state'
import Colors from '../constants/Colors'

function StatusScreen(props) {
  const [
    { teams, playingTeamIndex, canStart, winningScoreLimit },
    { generateQuestions, setPlayingTeamIndex },
  ] = React.useContext(Context)

  // Should go back to previous screen!
  if (!canStart) props.navigation.pop()
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Text style={{ color: 'gray' }}> :الفريق التالي</Text>
          <Title>
            {teams[playingTeamIndex + 1]
              ? teams[playingTeamIndex + 1].name
              : teams[0].name}
          </Title>
        </View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>فريق</DataTable.Title>
            <DataTable.Title numeric>نقاط</DataTable.Title>
          </DataTable.Header>

          {teams.map((team, i) => (
            <DataTable.Row
              key={i}
              style={{
                backgroundColor: i === playingTeamIndex ? 'lightblue' : 'white',
              }}
            >
              <DataTable.Cell>{team.name}</DataTable.Cell>
              <DataTable.Cell numeric>{team.points}</DataTable.Cell>
            </DataTable.Row>
          ))}
          <DataTable.Row
            style={{
              backgroundColor: '#333',
              color: 'white'
            }}
          >
            <DataTable.Cell><Text style={{color: 'white'}}>حد الفوز</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color: 'white'}}>{winningScoreLimit}</Text></DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
          }}
        />
      </ScrollView>
      <Button
        icon="arrow-back"
        mode="contained"
        theme={{ roundness: 0 }}
        onPress={() => {
          props.navigation.pop()
        }}
        style={{
          alignSelf: 'stretch',
        }}
      >
        رجوع
      </Button>
      <Button
        mode="contained"
        color={Colors.submit}
        theme={{
          roundness: 0,
        }}
        onPress={() => {
          setPlayingTeamIndex()
          generateQuestions()
          props.navigation.navigate('Game')
        }}
        style={{
          alignSelf: 'stretch',
          marginTop: 5,
          padding: 5,
        }}
      >
        إبدأ
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    height: '100%',
    backgroundColor: '#fff',
  },
})

StatusScreen.propTypes = {}

// export default connect(
//   state => state,
//   null
// )(GamesScreen)
export default StatusScreen
