import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const TimelineBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 16,
        },
        dimensions.width
      )}
    >
      {/* Personal data Actve View */}
      <Touchable>
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
            {'Personal data'}
          </Text>
        </View>
      </Touchable>
      {/* Personal data Actve View */}
      <Touchable>
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
      {/* Personal data Actve View */}
      <Touchable>
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
    </View>
  );
};

export default withTheme(TimelineBlock);
