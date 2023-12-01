import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import UpdateMyBalance from '../global-functions/UpdateMyBalance';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const TopUpScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const DecreaseTopUpValue = topUpValue => {
    if (topUpValue < 1) return topUpValue;
    else return topUpValue - 1;
  };

  const IncreaseTopUpValue = topUpValue => {
    return topUpValue + 1;
  };

  const [selectedTopUpValue, setSelectedTopUpValue] = React.useState(50);
  const [topUpValue, setTopUpValue] = React.useState(100);

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={false}
      scrollable={true}
    >
      {/* My Balance View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.medium,
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              opacity: 0.8,
            },
            dimensions.width
          )}
        >
          {'My Balance Testing'}
        </Text>
        {/* balance */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 30,
              paddingBottom: 8,
              paddingTop: 8,
            },
            dimensions.width
          )}
        >
          {'$ '}
          {Constants['MyBalance']}
        </Text>
      </View>
      {/* Amount View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-start',
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.medium,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
              opacity: 0.9,
              paddingLeft: 16,
              textAlign: 'left',
            },
            dimensions.width
          )}
        >
          {'Amount'}
        </Text>
        {/* Input View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 16,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 16,
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* decrease btn */}
          <Button
            onPress={() => {
              try {
                const newTopUpValue = DecreaseTopUpValue(topUpValue);
                setTopUpValue(newTopUpValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.light,
                borderRadius: 10,
                color: theme.colors.medium,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 21,
                height: 60,
                marginLeft: 5,
                marginRight: 5,
                textAlign: 'center',
                width: 60,
              },
              dimensions.width
            )}
            title={'-'}
          />
          {/* top up amount */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 30,
              },
              dimensions.width
            )}
          >
            {'$ '}
            {topUpValue}
          </Text>
          {/* increase btn */}
          <Button
            onPress={() => {
              try {
                const newTopUpValue = IncreaseTopUpValue(topUpValue);
                setTopUpValue(newTopUpValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.appGreen,
                borderRadius: 10,
                color: theme.colors.custom_rgb255_255_255,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 21,
                height: 60,
                marginLeft: 5,
                marginRight: 5,
                textAlign: 'center',
                width: 60,
              },
              dimensions.width
            )}
            title={'+ '}
          />
        </View>
        {/* Predefined Amounts */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingBottom: 15,
              paddingTop: 15,
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* Row 1 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* 5 */}
            <>
              {!(selectedTopUpValue === 5) ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(5);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 10,
                      color: theme.colors.appGreen,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$5'}
                />
              )}
            </>
            {/* 5 Inactive */}
            <>
              {selectedTopUpValue === 5 ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(5);
                      setSelectedTopUpValue(10);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.light,
                      borderRadius: 10,
                      color: theme.colors.medium,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$5'}
                />
              )}
            </>
            {/* 10 */}
            <>
              {!(selectedTopUpValue === 10) ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(10);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 10,
                      color: theme.colors.appGreen,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      textTransform: 'none',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$10'}
                />
              )}
            </>
            {/* 10 Inactive */}
            <>
              {selectedTopUpValue === 10 ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(10);
                      setSelectedTopUpValue(10);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.light,
                      borderRadius: 10,
                      color: theme.colors.medium,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$10'}
                />
              )}
            </>
            {/* 15 */}
            <>
              {!(selectedTopUpValue === 15) ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(15);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 10,
                      color: theme.colors.appGreen,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$15'}
                />
              )}
            </>
            {/* 15 Inactive */}
            <>
              {selectedTopUpValue === 15 ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(15);
                      setSelectedTopUpValue(15);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.light,
                      borderRadius: 10,
                      color: theme.colors.medium,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$15'}
                />
              )}
            </>
            {/* 20 */}
            <>
              {!(selectedTopUpValue === 20) ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(20);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 10,
                      color: theme.colors.appGreen,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$20'}
                />
              )}
            </>
            {/* 20 Inactive */}
            <>
              {selectedTopUpValue === 20 ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(20);
                      setSelectedTopUpValue(20);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.light,
                      borderRadius: 10,
                      color: theme.colors.medium,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$20'}
                />
              )}
            </>
          </View>
          {/* Row 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* 50 */}
            <>
              {!(selectedTopUpValue === 50) ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(50);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 10,
                      color: theme.colors.appGreen,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$50'}
                />
              )}
            </>
            {/* 50 Inactive */}
            <>
              {selectedTopUpValue === 50 ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(50);
                      setSelectedTopUpValue(50);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.light,
                      borderRadius: 10,
                      color: theme.colors.medium,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$50'}
                />
              )}
            </>
            {/* 100 */}
            <>
              {!(selectedTopUpValue === 100) ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(100);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 10,
                      color: theme.colors.appGreen,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$100'}
                />
              )}
            </>
            {/* 100 Inactive */}
            <>
              {selectedTopUpValue === 100 ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(100);
                      setSelectedTopUpValue(100);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.light,
                      borderRadius: 10,
                      color: theme.colors.medium,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$100'}
                />
              )}
            </>
            {/* 200 */}
            <>
              {!(selectedTopUpValue === 200) ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(200);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 10,
                      color: theme.colors.appGreen,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$200'}
                />
              )}
            </>
            {/* 200 Inactive */}
            <>
              {selectedTopUpValue === 200 ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(200);
                      setSelectedTopUpValue(200);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.light,
                      borderRadius: 10,
                      color: theme.colors.medium,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$200'}
                />
              )}
            </>
            {/* 500 */}
            <>
              {!(selectedTopUpValue === 500) ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(500);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.greenBG,
                      borderRadius: 10,
                      color: theme.colors.appGreen,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$500'}
                />
              )}
            </>
            {/* 500 Inactive */}
            <>
              {selectedTopUpValue === 500 ? null : (
                <Button
                  onPress={() => {
                    try {
                      setTopUpValue(500);
                      setSelectedTopUpValue(500);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.light,
                      borderRadius: 10,
                      color: theme.colors.medium,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      height: 60,
                      marginLeft: 5,
                      marginRight: 5,
                      textAlign: 'center',
                      width: 60,
                    },
                    dimensions.width
                  )}
                  title={'$500'}
                />
              )}
            </>
          </View>
        </View>
      </View>
      {/* bottom btns */}
      <View
        style={StyleSheet.applyWidth(
          {
            paddingBottom: 15,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 15,
          },
          dimensions.width
        )}
      >
        {/* TopUp Btn */}
        <Button
          onPress={() => {
            try {
              const newBalance = UpdateMyBalance(
                Constants['MyBalance'],
                topUpValue
              );
              setGlobalVariableValue({
                key: 'MyBalance',
                value: newBalance,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.appGreen,
              borderRadius: 12,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 16,
              height: 51,
              marginBottom: 5,
              marginTop: 5,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'TopUp'}
        />
        {/* Cancel Btn */}
        <Button
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.divider,
              borderRadius: 12,
              color: theme.colors.medium,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 16,
              height: 51,
              marginBottom: 5,
              marginTop: 5,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Cancel'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TopUpScreen);
