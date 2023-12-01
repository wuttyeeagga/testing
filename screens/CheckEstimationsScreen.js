import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const CheckEstimationsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [PkgTypeModal, setPkgTypeModal] = React.useState(false);
  const [pkgType, setPkgType] = React.useState('Select Package Type');
  const [selectedPackageSize, setSelectedPackageSize] = React.useState('small');
  const [selectedPackageType, setSelectedPackageType] = React.useState('SR');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={true}
    >
      {/* Container View */}
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
        {/* Packaging type View */}
        <View
          style={StyleSheet.applyWidth(
            { paddingBottom: 16, paddingTop: 16 },
            dimensions.width
          )}
        >
          {/* heading */}
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
            {'Type Of Packaging'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 16,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  setPkgTypeModal(true);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors.bGGray,
                    borderRadius: 15,
                    flexDirection: 'row',
                    height: 55,
                    justifyContent: 'space-between',
                    paddingLeft: 16,
                    paddingRight: 10,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.custom_rgb0_0_0,
                      fontFamily: 'Inter_500Medium',
                      textAlign: 'left',
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {pkgType}
                </Text>
                <Icon
                  color={theme.colors.textPlaceholder}
                  name={'Entypo/chevron-right'}
                  size={24}
                />
              </View>
            </Touchable>
          </View>
        </View>
        {/* Package View */}
        <View
          style={StyleSheet.applyWidth(
            { paddingBottom: 16, paddingTop: 16 },
            dimensions.width
          )}
        >
          {/* heading */}
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
            {'Package'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 16,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <>
              {!(selectedPackageType === 'SR') ? null : (
                <Touchable
                  style={StyleSheet.applyWidth(
                    { width: '45%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.lightInverse,
                        borderBottomWidth: 1,
                        borderColor: theme.colors.appGreen,
                        borderLeftWidth: 1,
                        borderRadius: 15,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        height: 55,
                        justifyContent: 'center',
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
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {'shatter resistant'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            <>
              {selectedPackageType === 'SR' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedPackageType('SR');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { width: '45%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.bGGray,
                        borderRadius: 15,
                        height: 55,
                        justifyContent: 'center',
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.textPlaceholder,
                          fontFamily: 'Inter_500Medium',
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {'shatter resistant'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            <>
              {!(selectedPackageType === 'EB') ? null : (
                <Touchable
                  style={StyleSheet.applyWidth(
                    { width: '45%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.lightInverse,
                        borderBottomWidth: 1,
                        borderColor: theme.colors.appGreen,
                        borderLeftWidth: 1,
                        borderRadius: 15,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        height: 55,
                        justifyContent: 'center',
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
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {'easily broken'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            <>
              {selectedPackageType === 'EB' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedPackageType('EB');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { width: '45%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.bGGray,
                        borderRadius: 15,
                        height: 55,
                        justifyContent: 'center',
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.textPlaceholder,
                          fontFamily: 'Inter_500Medium',
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {'easily broken'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
        </View>
        {/* Size View */}
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
            {'Package Size:'}
          </Text>
          {/* Modes */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* Mode 1 Active */}
            <>
              {!(selectedPackageSize === 'small') ? null : (
                <Touchable
                  style={StyleSheet.applyWidth(
                    { width: '30%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.greenBG,
                        borderRadius: 12,
                        height: 140,
                        justifyContent: 'center',
                        marginTop: 16,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.appGreen}
                      name={'MaterialCommunityIcons/package-variant'}
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
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginTop: 16,
                          opacity: 0.7,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {'< 1 Kg'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Mode 1 Inactive */}
            <>
              {selectedPackageSize === 'small' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedPackageSize('small');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { width: '30%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.bGGray,
                        borderRadius: 12,
                        height: 140,
                        justifyContent: 'center',
                        marginTop: 16,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      name={'MaterialCommunityIcons/package-variant'}
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
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginTop: 16,
                          opacity: 0.7,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {'< 1 Kg'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Mode 2 Active */}
            <>
              {!(selectedPackageSize === 'medium') ? null : (
                <Touchable
                  style={StyleSheet.applyWidth(
                    { width: '30%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.greenBG,
                        borderRadius: 12,
                        height: 140,
                        justifyContent: 'center',
                        marginTop: 16,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.appGreen}
                      name={'MaterialCommunityIcons/package-variant'}
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
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginTop: 16,
                          opacity: 0.7,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {'3 Kg - 10 Kg'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Mode 2 Inactive */}
            <>
              {selectedPackageSize === 'medium' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedPackageSize('medium');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { width: '30%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.bGGray,
                        borderRadius: 12,
                        height: 140,
                        justifyContent: 'center',
                        marginTop: 16,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      name={'MaterialCommunityIcons/package-variant'}
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
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginTop: 16,
                          opacity: 0.7,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {'3 Kg - 10 Kg'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Mode 3 Active */}
            <>
              {!(selectedPackageSize === 'large') ? null : (
                <Touchable
                  style={StyleSheet.applyWidth(
                    { width: '30%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.greenBG,
                        borderRadius: 12,
                        height: 140,
                        justifyContent: 'center',
                        marginTop: 16,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.appGreen}
                      name={'MaterialCommunityIcons/package-variant'}
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
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginTop: 16,
                          opacity: 0.7,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {'10 Kg - 15 Kg'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Mode 3 Inactive */}
            <>
              {selectedPackageSize === 'large' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedPackageSize('large');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { width: '30%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.bGGray,
                        borderRadius: 12,
                        height: 140,
                        justifyContent: 'center',
                        marginTop: 16,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      name={'MaterialCommunityIcons/package-variant'}
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
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginTop: 16,
                          opacity: 0.7,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {'10 Kg - 15 Kg'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
        </View>
        {/* Calculations View */}
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
              {'Price'}
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
              {'$32.00'}
            </Text>
          </View>
        </View>
        {/* Go To Pkg Btn */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('RecipientAddressScreen');
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
          title={'Go To Package'}
        />
      </View>
      <>
        {!PkgTypeModal ? null : (
          <Modal animationType={'none'}>
            {/* heading */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.appGreen,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 18,
                  marginBottom: 30,
                  marginTop: 75,
                  paddingLeft: 26,
                  paddingRight: 26,
                },
                dimensions.width
              )}
            >
              {'Select Package Type'}
            </Text>

            <DraftbitApi.FetchPostsGET limit={12}>
              {({ loading, error, data, refetchPosts }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <FlatList
                    contentContainerStyle={StyleSheet.applyWidth(
                      { flex: 1 },
                      dimensions.width
                    )}
                    data={fetchData}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    listKey={'4XqazDu5'}
                    numColumns={1}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Touchable
                          onPress={() => {
                            try {
                              setPkgTypeModal(false);
                              setPkgType(listData?.id);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_400Regular',
                                paddingBottom: 16,
                                paddingLeft: 26,
                                paddingRight: 26,
                                paddingTop: 16,
                                textTransform: 'capitalize',
                              },
                              dimensions.width
                            )}
                          >
                            {listData?.id}
                          </Text>
                        </Touchable>
                      );
                    }}
                  />
                );
              }}
            </DraftbitApi.FetchPostsGET>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(CheckEstimationsScreen);
