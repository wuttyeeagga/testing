import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, TextInput, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const TrackOrderScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [SelectedTab, setSelectedTab] = React.useState('idName');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={false}
      scrollable={true}
    >
      {/* Tabs View */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            opacity: 1,
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* ID Name */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* Active */}
          <>
            {!(SelectedTab === 'idName') ? null : (
              <Button
                disabled={true}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.appGreen,
                    borderRadius: 12,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 14,
                    height: 50,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
                title={'ID Name'}
              />
            )}
          </>
          {/* Inactive */}
          <>
            {SelectedTab === 'idName' ? null : (
              <Button
                onPress={() => {
                  try {
                    setSelectedTab('idName');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.bGGray,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 0,
                    borderRadius: 0,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 0,
                    color: theme.colors.medium,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 14,
                    height: 50,
                    opacity: 1,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
                title={'ID Name'}
              />
            )}
          </>
        </View>
        {/* Item Code */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* Active */}
          <>
            {!(SelectedTab === 'itemCode') ? null : (
              <Button
                disabled={true}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.appGreen,
                    borderRadius: 12,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 14,
                    height: 50,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
                title={'Item Code'}
              />
            )}
          </>
          {/* Inactive */}
          <>
            {SelectedTab === 'itemCode' ? null : (
              <Button
                onPress={() => {
                  try {
                    setSelectedTab('itemCode');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.bGGray,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 12,
                    borderRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 12,
                    color: theme.colors.medium,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 14,
                    height: 50,
                    opacity: 1,
                    overflow: 'hidden',
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
                title={'Item Code'}
              />
            )}
          </>
        </View>
      </View>
      {/* Tracking Details View */}
      <View
        style={StyleSheet.applyWidth(
          {
            paddingBottom: 16,
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.custom_rgb0_0_0,
              fontFamily: 'Inter_400Regular',
              lineHeight: 21,
              marginBottom: 30,
              opacity: 0.3,
              textAlign: 'left',
            },
            dimensions.width
          )}
        >
          {'This is test dummy text used as shipit app placeholder.'}
        </Text>
        <>
          {!(SelectedTab === 'idName') ? null : (
            <TextInput
              autoFocus={true}
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'ID Name'}
              placeholderTextColor={theme.colors.textPlaceholder}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.bGGray,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.custom_rgb0_0_0,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 14,
                  height: 50,
                  opacity: 1,
                  overflow: 'hidden',
                  paddingBottom: 16,
                  paddingLeft: 25,
                  paddingRight: 8,
                  paddingTop: 16,
                },
                dimensions.width
              )}
              value={textInputValue}
            />
          )}
        </>
        <>
          {!(SelectedTab === 'itemCode') ? null : (
            <TextInput
              autoFocus={true}
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Item Code'}
              placeholderTextColor={theme.colors.textPlaceholder}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.bGGray,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.custom_rgb0_0_0,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 14,
                  height: 50,
                  opacity: 1,
                  overflow: 'hidden',
                  paddingBottom: 16,
                  paddingLeft: 25,
                  paddingRight: 8,
                  paddingTop: 16,
                },
                dimensions.width
              )}
              value={textInputValue}
            />
          )}
        </>
      </View>
      {/* Track Shipment */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('TrackingDetailsScreen');
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
            marginLeft: 32,
            marginRight: 32,
            marginTop: 25,
            textAlign: 'center',
            textTransform: 'capitalize',
          },
          dimensions.width
        )}
        title={'track shipment'}
      />
    </ScreenContainer>
  );
};

export default withTheme(TrackOrderScreen);
