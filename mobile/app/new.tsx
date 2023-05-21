import { View, Text, TouchableOpacity, Switch, TextInput, ScrollView } from "react-native"
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { Link } from "expo-router"
import Icon from "@expo/vector-icons/Feather"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useState } from "react"

export default function NewMemory() {
    const {bottom, top} = useSafeAreaInsets()
    
    const [isPublic, setIsPublic] = useState(false)



    return (
        <ScrollView className="flex-1 px-8" contentContainerStyle={{paddingBottom: bottom, paddingTop: top}}>
            <View className="flex-row items-center justify-between mt-4">

                <NLWLogo />

                <Link href="/memories" asChild>

                    <TouchableOpacity className="items-center justify-center w-10 h-10 bg-purple-500 rounded-full">
                    <Icon name="arrow-left" size={16} color="#FFF"/>
                    </TouchableOpacity>

        
                </Link>
            </View>

        <View className="mt-6 space-y-6">
            <View className="flex-row items-center gap-2">
                <Switch value={isPublic} onValueChange={setIsPublic} thumbColor={isPublic ? "#9b79ea" : "#9e9ea0"} trackColor={{false: '#767577', true: 'purple'}} />
                <Text className="text-base text-gray-200 font-body">
                    Tornar memória públia
                </Text>
            </View>

            <TouchableOpacity activeOpacity={0.7} className="items-center justify-center h-32 border border-gray-500 border-dashed rounded-lg bg-black/20">
                <View className="flex-row items-center gap-2">
                    <Icon name="image" color="#FFF"></Icon>
                    <Text className="text-sm text-gray-200 font-body">Adicionar foto ou vídeo</Text>
                </View>
            </TouchableOpacity>

            <TextInput multiline className="p-0 text-lg font-body text-gray-50" placeholderTextColor="#56565a" placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer guardar."/>


            <TouchableOpacity
          activeOpacity={0.7}
          className="items-center px-5 py-2 bg-green-500 rounded-full "
          
        >
          <Text className="text-sm text-black uppercase font-alt">
            Salvar
          </Text>
        </TouchableOpacity>
        </View>


        </ScrollView>
    )
}