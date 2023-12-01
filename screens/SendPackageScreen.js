import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  Spacer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const SendPackageScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [selectedMode, setSelectedMode] = React.useState('slow');
  const [selectedStep, setSelectedStep] = React.useState('personal');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={true}
    >
      {/* Tabs View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 16,
            paddingBottom: 16,
            paddingLeft: 32,
            paddingRight: 32,
          },
          dimensions.width
        )}
      >
        {/* Personal */}
        <View>
          {/* Active */}
          <>
            {!(selectedStep === 'personal') ? null : (
              <Touchable>
                {/* Personal Active */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  {/* image */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.greenBG,
                        borderRadius: 10,
                        height: 55,
                        justifyContent: 'center',
                        overflow: 'hidden',
                        width: 55,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.appGreen}
                      name={'AntDesign/user'}
                      size={24}
                    />
                  </View>
                  {/* tab name */}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        opacity: 0.6,
                        paddingTop: 6,
                      },
                      dimensions.width
                    )}
                  >
                    {'Personal'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* Inactve */}
          <>
            {selectedStep === 'personal' ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedStep('personal');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Personal Inactive */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  {/* image */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.bGGray,
                        borderRadius: 10,
                        height: 55,
                        justifyContent: 'center',
                        overflow: 'hidden',
                        width: 55,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon name={'AntDesign/user'} size={24} />
                  </View>
                  {/* tab name */}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        opacity: 0.6,
                        paddingTop: 6,
                      },
                      dimensions.width
                    )}
                  >
                    {'Personal'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
        {/* Divider Active */}
        <>
          {selectedStep === 'personal' ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 4,
                  borderColor: theme.colors.appGreen,
                  borderStyle: 'dotted',
                  flex: 1,
                  height: 2,
                  marginTop: -16,
                },
                dimensions.width
              )}
            />
          )}
        </>
        {/* Divider Inactive */}
        <>
          {!(selectedStep === 'personal') ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 4,
                  borderColor: theme.colors.divider,
                  borderStyle: 'dotted',
                  flex: 1,
                  marginTop: -16,
                },
                dimensions.width
              )}
            />
          )}
        </>
        {/* Package */}
        <View>
          {/* Active */}
          <>
            {!(selectedStep === 'package') ? null : (
              <Touchable>
                {/* Package Active */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  {/* image */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.greenBG,
                        borderRadius: 10,
                        height: 55,
                        justifyContent: 'center',
                        overflow: 'hidden',
                        width: 55,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.appGreen}
                      name={'Octicons/package'}
                      size={24}
                    />
                  </View>
                  {/* tab name */}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        opacity: 0.6,
                        paddingTop: 6,
                      },
                      dimensions.width
                    )}
                  >
                    {'Package'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* Inactive */}
          <>
            {selectedStep === 'package' ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedStep('package');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Package Inactive */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  {/* image */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.bGGray,
                        borderRadius: 10,
                        height: 55,
                        justifyContent: 'center',
                        overflow: 'hidden',
                        width: 55,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon name={'Octicons/package'} size={24} />
                  </View>
                  {/* tab name */}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        opacity: 0.6,
                        paddingTop: 6,
                      },
                      dimensions.width
                    )}
                  >
                    {'Package'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
        {/* Divider Active */}
        <>
          {!(selectedStep === 'finish') ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 4,
                  borderColor: theme.colors.appGreen,
                  borderStyle: 'dotted',
                  flex: 1,
                  height: 2,
                  marginTop: -16,
                },
                dimensions.width
              )}
            />
          )}
        </>
        {/* Divider Inactive */}
        <>
          {selectedStep === 'finish' ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 4,
                  borderColor: theme.colors.divider,
                  borderStyle: 'dotted',
                  flex: 1,
                  marginTop: -16,
                },
                dimensions.width
              )}
            />
          )}
        </>
        {/* Finish */}
        <View>
          {/* Active */}
          <>
            {!(selectedStep === 'finish') ? null : (
              <Touchable>
                {/* Finish Active */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  {/* image */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.greenBG,
                        borderRadius: 10,
                        height: 55,
                        justifyContent: 'center',
                        overflow: 'hidden',
                        width: 55,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.appGreen}
                      name={'Feather/send'}
                      size={24}
                    />
                  </View>
                  {/* tab name */}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        opacity: 0.6,
                        paddingTop: 6,
                      },
                      dimensions.width
                    )}
                  >
                    {'Finish'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
          {/* Inactive */}
          <>
            {selectedStep === 'finish' ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setSelectedStep('finish');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                {/* Finish Inactive */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  {/* image */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.bGGray,
                        borderRadius: 10,
                        height: 55,
                        justifyContent: 'center',
                        overflow: 'hidden',
                        width: 55,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon name={'Feather/send'} size={24} />
                  </View>
                  {/* tab name */}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 12,
                        opacity: 0.6,
                        paddingTop: 6,
                      },
                      dimensions.width
                    )}
                  >
                    {'Finish'}
                  </Text>
                </View>
              </Touchable>
            )}
          </>
        </View>
      </View>
      {/* Personal Data View */}
      <>
        {!(selectedStep === 'personal') ? null : (
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
            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {"Recipient's Name"}
              </Text>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Enter Name'}
                placeholderTextColor={theme.colors.textPlaceholder}
                selectionColor={theme.colors.appGreen}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.bGGray,
                    borderBottomWidth: 1,
                    borderColor: theme.colors.divider,
                    borderLeftWidth: 1,
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 50,
                    marginTop: 10,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
                textContentType={'none'}
                value={textInputValue}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {"Recipient's Address"}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors.bGGray,
                    borderBottomWidth: 1,
                    borderColor: theme.colors.divider,
                    borderLeftWidth: 1,
                    borderRadius: 12,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    paddingLeft: 16,
                    paddingRight: 10,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors.appGreen}
                  name={'Entypo/location-pin'}
                  size={24}
                />
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setTextInputValue(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={'Enter Address'}
                  placeholderTextColor={theme.colors.textPlaceholder}
                  style={StyleSheet.applyWidth(
                    {
                      borderRadius: 8,
                      height: 50,
                      paddingBottom: 8,
                      paddingLeft: 16,
                      paddingRight: 8,
                      paddingTop: 8,
                      width: '85%',
                    },
                    dimensions.width
                  )}
                  textContentType={'none'}
                  value={textInputValue}
                />
                <Touchable>
                  <Icon
                    color={theme.colors.textPlaceholder}
                    name={'Entypo/chevron-right'}
                    size={24}
                  />
                </Touchable>
              </View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { marginTop: 8, paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {"Recipient's Number"}
              </Text>
              <TextInput
                keyboardType={'numeric'}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'+1  (415) xxx-xxx'}
                placeholderTextColor={theme.colors.textPlaceholder}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.bGGray,
                    borderBottomWidth: 1,
                    borderColor: theme.colors.divider,
                    borderLeftWidth: 1,
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 50,
                    marginTop: 10,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
                textContentType={'none'}
                value={textInputValue}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'Postal Zip'}
              </Text>
              <TextInput
                keyboardType={'numeric'}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'00000'}
                placeholderTextColor={theme.colors.textPlaceholder}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.bGGray,
                    borderBottomWidth: 1,
                    borderColor: theme.colors.divider,
                    borderLeftWidth: 1,
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 50,
                    marginTop: 10,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
                textContentType={'none'}
                value={textInputValue}
              />
            </View>
            {/* Button Solid */}
            <Button
              onPress={() => {
                try {
                  setSelectedStep('package');
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
              title={'Next'}
            />
          </View>
        )}
      </>
      {/* Package View */}
      <>
        {!(selectedStep === 'package') ? null : (
          <View
            style={StyleSheet.applyWidth(
              {
                paddingBottom: 16,
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 16,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 16, paddingTop: 16, width: '100%' },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'Select Shipping'}
              </Text>
              {/* Modes */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', marginTop: 16 },
                  dimensions.width
                )}
              >
                {/* Slow */}
                <View
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                >
                  {/* Mode 1 Active */}
                  <>
                    {!(selectedMode === 'slow') ? null : (
                      <Touchable>
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              backgroundColor: theme.colors.greenBG,
                              borderRadius: 12,
                              height: 140,
                              justifyContent: 'center',
                              paddingBottom: 12,
                              paddingLeft: 12,
                              paddingRight: 12,
                              paddingTop: 12,
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            name={'FontAwesome/bicycle'}
                            size={40}
                            style={StyleSheet.applyWidth(
                              { opacity: 0.5 },
                              dimensions.width
                            )}
                          />
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.appGreen,
                                fontFamily: 'Inter_600SemiBold',
                                marginTop: 22,
                                opacity: 0.7,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'Sameday'}
                          </Text>

                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.appGreen,
                                fontFamily: 'Inter_400Regular',
                                marginTop: 4,
                                opacity: 0.7,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'4 - 8 Hours'}
                          </Text>
                        </View>
                      </Touchable>
                    )}
                  </>
                  {/* Mode 1 Inactive */}
                  <>
                    {selectedMode === 'slow' ? null : (
                      <Touchable
                        onPress={() => {
                          try {
                            setSelectedMode('slow');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              backgroundColor: theme.colors.bGGray,
                              borderRadius: 12,
                              height: 140,
                              justifyContent: 'center',
                              paddingBottom: 12,
                              paddingLeft: 12,
                              paddingRight: 12,
                              paddingTop: 12,
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            name={'FontAwesome/bicycle'}
                            size={40}
                            style={StyleSheet.applyWidth(
                              { opacity: 0.5 },
                              dimensions.width
                            )}
                          />
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_600SemiBold',
                                marginTop: 22,
                                opacity: 0.7,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'Sameday'}
                          </Text>

                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_400Regular',
                                marginTop: 4,
                                opacity: 0.7,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'4 - 8 Hours'}
                          </Text>
                        </View>
                      </Touchable>
                    )}
                  </>
                </View>
                <Spacer bottom={8} left={8} right={8} top={8} />
                {/* Medium */}
                <View
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                >
                  {/* Mode 2 Active */}
                  <>
                    {!(selectedMode === 'medium') ? null : (
                      <Touchable>
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              backgroundColor: theme.colors.greenBG,
                              borderRadius: 12,
                              height: 140,
                              justifyContent: 'center',
                              paddingBottom: 12,
                              paddingLeft: 12,
                              paddingRight: 12,
                              paddingTop: 12,
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            name={'MaterialIcons/electric-scooter'}
                            size={40}
                            style={StyleSheet.applyWidth(
                              { opacity: 0.5 },
                              dimensions.width
                            )}
                          />
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.appGreen,
                                fontFamily: 'Inter_600SemiBold',
                                marginTop: 22,
                                opacity: 0.7,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'Regular'}
                          </Text>

                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.appGreen,
                                fontFamily: 'Inter_400Regular',
                                marginTop: 4,
                                opacity: 0.7,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'4 - 6 Days'}
                          </Text>
                        </View>
                      </Touchable>
                    )}
                  </>
                  {/* Mode 2 Inactive */}
                  <>
                    {selectedMode === 'medium' ? null : (
                      <Touchable
                        onPress={() => {
                          try {
                            setSelectedMode('medium');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              backgroundColor: theme.colors.bGGray,
                              borderRadius: 12,
                              height: 140,
                              justifyContent: 'center',
                              paddingBottom: 12,
                              paddingLeft: 12,
                              paddingRight: 12,
                              paddingTop: 12,
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            name={'MaterialIcons/electric-scooter'}
                            size={40}
                            style={StyleSheet.applyWidth(
                              { opacity: 0.5 },
                              dimensions.width
                            )}
                          />
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_600SemiBold',
                                marginTop: 22,
                                opacity: 0.7,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'Regular'}
                          </Text>

                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_400Regular',
                                marginTop: 4,
                                opacity: 0.7,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'4 - 6 Days'}
                          </Text>
                        </View>
                      </Touchable>
                    )}
                  </>
                </View>
                <Spacer bottom={8} left={8} right={8} top={8} />
                {/* Fast */}
                <View
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                >
                  {/* Mode 3 Active */}
                  <>
                    {!(selectedMode === 'fast') ? null : (
                      <Touchable>
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              backgroundColor: theme.colors.greenBG,
                              borderRadius: 12,
                              height: 140,
                              justifyContent: 'center',
                              paddingBottom: 12,
                              paddingLeft: 12,
                              paddingRight: 12,
                              paddingTop: 12,
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            name={'Ionicons/rocket-outline'}
                            size={40}
                            style={StyleSheet.applyWidth(
                              { opacity: 0.5 },
                              dimensions.width
                            )}
                          />
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.appGreen,
                                fontFamily: 'Inter_600SemiBold',
                                marginTop: 22,
                                opacity: 0.7,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'Express'}
                          </Text>

                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.appGreen,
                                fontFamily: 'Inter_400Regular',
                                fontSize: 12,
                                marginTop: 4,
                                opacity: 0.7,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'1 - 2 Days'}
                          </Text>
                        </View>
                      </Touchable>
                    )}
                  </>
                  {/* Mode 3 Inactive */}
                  <>
                    {selectedMode === 'fast' ? null : (
                      <Touchable
                        onPress={() => {
                          try {
                            setSelectedMode('fast');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              backgroundColor: theme.colors.bGGray,
                              borderRadius: 12,
                              height: 140,
                              justifyContent: 'center',
                              paddingBottom: 12,
                              paddingLeft: 12,
                              paddingRight: 12,
                              paddingTop: 12,
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            name={'Ionicons/rocket-outline'}
                            size={40}
                            style={StyleSheet.applyWidth(
                              { opacity: 0.5 },
                              dimensions.width
                            )}
                          />
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_600SemiBold',
                                marginTop: 22,
                                opacity: 0.7,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'Express'}
                          </Text>

                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_400Regular',
                                fontSize: 12,
                                marginTop: 4,
                                opacity: 0.7,
                                textAlign: 'center',
                              },
                              dimensions.width
                            )}
                          >
                            {'1 - 2 Days'}
                          </Text>
                        </View>
                      </Touchable>
                    )}
                  </>
                </View>
              </View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'Notes'}
              </Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={newTextAreaValue => {
                  try {
                    setTextAreaValue(newTextAreaValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Type...'}
                placeholderTextColor={theme.colors.textPlaceholder}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.bGGray,
                    borderBottomWidth: 1,
                    borderColor: theme.colors.divider,
                    borderLeftWidth: 1,
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 140,
                    marginTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                  },
                  dimensions.width
                )}
                value={textAreaValue}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                { borderStyle: 'dashed', paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Document'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_500Medium',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'$32.00'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Courier'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_500Medium',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'$2.00'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Express'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_500Medium',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'$10.00'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Warranty'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_500Medium',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'$15.00'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                    paddingBottom: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Discount'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_500Medium',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'$0'}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors.medium,
                    borderStyle: 'dashed',
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                    paddingTop: 20,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'Total'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.appGreen,
                      fontFamily: 'Inter_700Bold',
                      fontSize: 16,
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'$59.00'}
                </Text>
              </View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
              <TextInput
                keyboardType={'numeric'}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Promo'}
                placeholderTextColor={theme.colors.custom_rgb0_128_0}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.greenBG,
                    borderBottomWidth: 1,
                    borderColor: theme.colors.divider,
                    borderLeftWidth: 1,
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    fontFamily: 'Inter_500Medium',
                    height: 50,
                    marginTop: 10,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
                textContentType={'none'}
                value={textInputValue}
              />
            </View>
            {/* Button Solid */}
            <Button
              onPress={() => {
                try {
                  setSelectedStep('finish');
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
              title={'Continue'}
            />
          </View>
        )}
      </>
      {/* Finish View */}
      <>
        {!(selectedStep === 'finish') ? null : (
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: '70%',
                justifyContent: 'center',
                paddingLeft: 16,
                paddingRight: 16,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.appGreen,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 30,
                  marginBottom: 50,
                  marginTop: 100,
                },
                dimensions.width
              )}
            >
              {'Finish'}
            </Text>
            {/* Check Estimates */}
            <Button
              onPress={() => {
                try {
                  navigation.navigate('CheckEstimationsScreen');
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
                  width: '100%',
                },
                dimensions.width
              )}
              title={'Check Estimates'}
            />
          </View>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(SendPackageScreen);
