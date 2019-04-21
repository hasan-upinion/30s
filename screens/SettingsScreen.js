import React, { useContext } from 'react'
import { View, Text, Picker } from 'react-native'
import { Divider } from 'react-native-paper'
import { Context } from '../state'

const SettingsScreen = () => {
  const [{ time, questionLimit, winningScoreLimit }, { setTime, setQuestionLimit, setWinningScoreLimit }] = useContext(
    Context
  )

  return (
    <View
      style={{
        padding: 10,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ flexGrow: 1 }}>وقت الإجابة</Text>
        <Picker
          selectedValue={time}
          style={{ height: 50, width: 200 }}
          onValueChange={itemValue => setTime(itemValue)}
        >
          <Picker.Item label="30 ثانية" value={30} />
          <Picker.Item label="40 ثانية" value={40} />
          <Picker.Item label="60 ثانية" value={60} />
        </Picker>
      </View>

      <Divider style={{ color: 'black', height: 2, width: '100%' }} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ flexGrow: 1 }}>عدد الخيارات(الأسئلة)</Text>
        <Picker
          selectedValue={questionLimit}
          style={{ height: 50, width: 200 }}
          onValueChange={itemValue => setQuestionLimit(itemValue)}
        >
          <Picker.Item label="4 خيارات" value={4} />
          <Picker.Item label="5 خيارات" value={5} />
          <Picker.Item label="6 خيارات" value={6} />
        </Picker>
      </View>

      <Divider style={{ color: 'black', height: 2, width: '100%' }} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ flexGrow: 1 }}>حد الفوز
        <Picker
          selectedValue={winningScoreLimit}
          style={{ height: 50, width: 200 }}
          onValueChange={itemValue => setWinningScoreLimit(itemValue)}
        >
          <Picker.Item label="5 نقاط" value={5} />
          <Picker.Item label="10 نقاط" value={10} />
          <Picker.Item label="20 نقطة" value={20} />
          <Picker.Item label="30 نقطة" value={30} />
        </Picker>
      </View>
    </View>
  )
}

export default SettingsScreen
