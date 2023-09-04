import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { affiliateData } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function Destinations() { 
    const navigation = useNavigation();
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {
        affiliateData.map((item, index)=>{
            return (
                <DestinationCard navigation={navigation} item={item} key={index} />
            )
        })
      }
    </View>
  )
}


const DestinationCard = ({item, navigation})=>{
    const [isFavourite, toggleFavourite] = useState(false);
    return (
        <TouchableOpacity
            onPress={()=> navigation.navigate('Destination', {...item})}
            style={{width: wp(45), height: wp(50)}}
            className="flex justify-end relative p-4 py-6 space-y-2 mb-5">
                <Image
                    source={item.image}
                    style={{width: wp(45), height: wp(50), borderRadius: 35, flex: 1, resizeMode: 'contain'}}
                    className="absolute"
                />

            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.6)']}
                style={{width: wp(45), height: hp(25), borderBottomLeftRadius: 35, borderBottomRightRadius: 35}}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                className="absolute bottom-0"
            />

            <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)} style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="absolute top-1 right-3 rounded-full p-3">
                <HeartIcon size={wp(5)} color={isFavourite? "red": "whitesmoke"} />
            </TouchableOpacity>

            <Text style={{fontSize: wp(4)}} className="text-white font-semibold">{item.title}</Text>
            <Text style={{fontSize: wp(2.2)}} className="text-white">{item.shortDescription}</Text>

        </TouchableOpacity>
    )
}