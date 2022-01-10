import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const AssessmentCard = ({item}) => {
  return item === null || item === undefined ? (
    <View />
  ) : (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.row}>
          <Image style={styles.image} resizeMode="cover" source={item.image} />
          <View style={styles.column}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={[styles.row, styles.flexEnd]}>
              <View style={styles.column}>
                <Text style={styles.general}>Earn up to</Text>
                <Text style={styles.general}>
                  <Text style={styles.point}>{item.points} </Text>
                  pts
                </Text>
              </View>
              <Icon
                name="arrow-right"
                size={15}
                color="#900"
                style={styles.arrowRight}
              />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    width: 260,
    marginStart: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    flexShrink: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: 64,
    height: 96,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  general: {
    fontSize: 14,
    marginTop: 5,
  },
  point: {
    fontSize: 14,
    color: '#87ceeb',
    marginTop: 5,
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  arrowRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
