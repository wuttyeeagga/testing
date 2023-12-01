import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const TrackingDetailsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={false}
      scrollable={true}
    >
      {/* Tracking Details View */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderRadius: 0,
            overflow: 'hidden',
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
          },
          dimensions.width
        )}
      >
        {/* MapWrapper */}
        <View
          style={StyleSheet.applyWidth(
            { borderRadius: 12, height: 220, overflow: 'hidden' },
            dimensions.width
          )}
        >
          <MapView
            apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
            followsUserLocation={true}
            latitude={26.2389}
            loadingEnabled={true}
            loadingIndicatorColor={theme.colors.appGreen}
            longitude={73.0243}
            rotateEnabled={true}
            scrollEnabled={true}
            showsCompass={true}
            showsPointsOfInterest={true}
            showsUserLocation={true}
            style={StyleSheet.applyWidth({ height: '100%' }, dimensions.width)}
            zoom={8}
            zoomEnabled={true}
          >
            <MapMarker
              description={'My Test Address'}
              flat={true}
              latitude={26.2389}
              longitude={73.0243}
              pinColor={theme.colors.appGreen}
              title={'Arvind Limba'}
            />
          </MapView>
        </View>
        <TextInput
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
              marginTop: 30,
              opacity: 1,
              overflow: 'hidden',
              paddingBottom: 16,
              paddingLeft: 25,
              paddingRight: 8,
              paddingTop: 16,
              width: '100%',
            },
            dimensions.width
          )}
          value={textInputValue}
        />
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_400Regular',
              marginTop: 30,
              textAlign: 'left',
            },
            dimensions.width
          )}
        >
          {'On Going'}
        </Text>
        {/* Button Solid */}
        <Button
          disabled={false}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.appGreen,
              borderRadius: 12,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 16,
              height: 51,
              marginBottom: 5,
              marginTop: 10,
              textAlign: 'center',
              textTransform: 'capitalize',
              width: '100%',
            },
            dimensions.width
          )}
          title={'cibadak karang tengah 213'}
        />
      </View>
      {/* Timeline View */}
      <View style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}>
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 16, paddingRight: 16 },
            dimensions.width
          )}
        >
          {/* heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
              },
              dimensions.width
            )}
          >
            {'In Process'}
          </Text>
        </View>
        {/* Timeline */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 36, paddingBottom: 16 },
            dimensions.width
          )}
        >
          <DraftbitApi.FetchPostsGET limit={4}>
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
                    { paddingLeft: 16, paddingRight: 16 },
                    dimensions.width
                  )}
                  data={fetchData}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  listKey={'suV4YOHc'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <>
                        {/* Status view */}
                        <Touchable
                          style={StyleSheet.applyWidth(
                            { width: '100%' },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { flexDirection: 'row' },
                                dimensions.width
                              )}
                            >
                              {/* image */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    backgroundColor: theme.colors.appGreen,
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
                                  color={theme.colors.custom_rgb255_255_255}
                                  name={'Feather/send'}
                                  size={20}
                                />
                              </View>

                              <View
                                style={StyleSheet.applyWidth(
                                  { paddingLeft: 12 },
                                  dimensions.width
                                )}
                              >
                                {/* tab name */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Inter_500Medium',
                                      fontSize: 14,
                                      opacity: 1,
                                      paddingTop: 6,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Recipient City'}
                                </Text>
                                {/* tab name */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      opacity: 0.6,
                                      paddingTop: 6,
                                      textTransform: 'capitalize',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Perumahan griya sakihan 2 no c14'}
                                </Text>
                              </View>
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
                                  textTransform: 'capitalize',
                                },
                                dimensions.width
                              )}
                            >
                              {'22:00'}
                            </Text>
                          </View>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors.appGreen,
                                borderLeftWidth: 2,
                                borderStyle: 'dashed',
                                height: 35,
                                marginLeft: 27,
                                marginTop: 0,
                                width: 2,
                              },
                              dimensions.width
                            )}
                          />
                        </Touchable>
                      </>
                    );
                  }}
                />
              );
            }}
          </DraftbitApi.FetchPostsGET>
          <View
            style={StyleSheet.applyWidth(
              { height: 40, marginTop: -10, width: '100%' },
              dimensions.width
            )}
          />
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_400Regular',
                fontSize: 14,
                marginTop: 16,
                opacity: 0.5,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {"I'll be there soon"}
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TrackingDetailsScreen);
