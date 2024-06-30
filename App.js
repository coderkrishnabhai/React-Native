import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './component/FlatCard'
import ElevatedCard from './component/ElevatedCard'
import FancyCard from './component/FancyCard'
import ActionCard from './component/ActionCard'
import ContectList from './component/ContectList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>         
         <FlatCard></FlatCard>
         <ElevatedCard></ElevatedCard>
         <FancyCard></FancyCard>
         <ContectList></ContectList>
         <ActionCard></ActionCard>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default App