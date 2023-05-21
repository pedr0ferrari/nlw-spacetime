import { View, Text, TouchableOpacity, Switch, TextInput, ScrollView } from "react-native"
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { Link, useRouter } from "expo-router"
import Icon from "@expo/vector-icons/Feather"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useState } from "react"
import * as ImagePicker from 'expo-image-picker';
import { Image } from "react-native"
import * as SecureStore from "expo-secure-store"
import { api } from "../src/lib/api"

export default function NewMemory() {
    const {bottom, top} = useSafeAreaInsets()
    const router = useRouter()
    
    const [preview, setPreview] = useState<string | null>(null)
    const [isPublic, setIsPublic] = useState(false)
    const [content, setContent] = useState("")
    
    async function openImagePicker() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
              });

            if (result.assets[0]) {
                setPreview(result.assets[0].uri)
            }
        } catch (err) {
            //deu erro e nao tratei xD
        }
      
    }

    async function handleCreateMemory() {
        const token = await SecureStore.getItemAsync("token")

        let coverUrl = ""

        if (preview) {
            const uploadFormData = new FormData()

            uploadFormData.append("file", {
                uri: preview,
                name: "image.jpg",
                type: "image/jpeg"
            } as any)

            const uploadResponse = await api.post("/upload", uploadFormData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            })

            coverUrl = uploadResponse.data.fileUrl

        }

        await api.post("/memories", {
            content,
            isPublic,
            coverUrl,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        router.push("/memories")
    }

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

            <TouchableOpacity activeOpacity={0.7} onPress={openImagePicker} className="items-center justify-center h-32 border border-gray-500 border-dashed rounded-lg bg-black/20">
                
                {preview ? (
                    <Image source={{uri: preview}} className="object-cover w-full h-full rounded-lg" />
                ) : (
                    <View className="flex-row items-center gap-2">
                    <Icon name="image" color="#FFF"></Icon>
                    <Text className="text-sm text-gray-200 font-body">Adicionar foto ou vídeo</Text>
                </View>
                )}

            </TouchableOpacity>

            <TextInput multiline value={content} textAlignVertical="top" onChangeText={setContent} className="p-0 text-lg font-body text-gray-50" placeholderTextColor="#56565a" placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer guardar."/>


            <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleCreateMemory}
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