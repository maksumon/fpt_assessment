import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  SectionList,
  StatusBar,
  Text,
  View,
  Button,
  FlatList,
} from 'react-native';
import {signOut, useAuthDispatch} from '../contexts';
import {
  ESSENTIAL_HEALTH_SCREENING,
  ADVANCE_HEALTH_SCREENING,
  NO_SUGAR,
  FIVE_K_RUN_WALK,
  EIGHT_GLASSES,
} from '../assets';
import {AssessmentCard} from '../components/AssessmentCard';
import {ChallengeCard} from '../components/ChallengeCard';

const arrayData = [
  {
    title: 'Assessments',
    data: [
      {
        title: 'Advanced Health Screening',
        points: 1000,
        image: ADVANCE_HEALTH_SCREENING,
      },
      {
        title: 'Basic Health Screeing',
        points: 550,
        image: ESSENTIAL_HEALTH_SCREENING,
      },
    ],
  },
  {
    title: 'Challenges',
    data: [
      {
        title: 'Say no to sugar',
        points: 50,
        image: NO_SUGAR,
      },
      {
        title: '5km challenge',
        points: 50,
        image: FIVE_K_RUN_WALK,
      },
      {
        title: '8 glasses of water',
        points: 50,
        image: EIGHT_GLASSES,
      },
    ],
  },
];

export const Home = ({navigation}) => {
  const dispatch = useAuthDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => signOut(dispatch, navigation)}
          title="Sign Out"
          color="#FFFFFF"
        />
      ),
    });
  }, [dispatch, navigation]);

  const RenderFlatList = ({section}) => (
    <FlatList
      horizontal={true}
      data={section.data}
      renderItem={({item}) => {
        return section.title === 'Assessments' ? (
          <AssessmentCard item={item} />
        ) : (
          <ChallengeCard item={item} />
        );
      }}
      showsHorizontalScrollIndicator={false}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={arrayData}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, section}) => {
          return null;
        }}
        renderSectionHeader={({section}) => (
          <View>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            <RenderFlatList section={section} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
    marginTop: 20,
    marginBottom: 5,
  },
});
