import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import * as SecureStore from 'expo-secure-store';
import { useRouter } from "expo-router";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from "../src/assets/bg-blur.png"
import Stripes from '../src/assets/stripes.svg'
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { api } from '../src/lib/api'
import { styled } from 'nativewind'
import { useAuthRequest } from 'expo-auth-session/build/AuthRequestHooks'
import { makeRedirectUri } from 'expo-auth-session'
import { useEffect } from 'react'



const StyledStripes = styled(Stripes)

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/3983d0a2be54ce930fe1',
};

export default function App() {

const router = useRouter()

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  

    const [request, response, signInWithGithub] = useAuthRequest(
      {
        clientId: '3983d0a2be54ce930fe1',
        scopes: ['identity'],
        redirectUri: makeRedirectUri({
          scheme: 'nlwspacetime'
        }),
      },
      discovery
    );

     const handleGitHubOAuthCode = async(code: string) => {
        const response = await api.post("/register", {
            code,
        })

        const {token} = response.data

        await SecureStore.setItemAsync("token", token)

        router.push("/memories")
        

    };

    useEffect(() => {

      if (response?.type === 'success') {
        const { code } = response.params;

       handleGitHubOAuthCode(code)

      }
    }, [response]);

    if (!hasLoadedFonts) {
      return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative items-center flex-1 px-8 py-10 bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="items-center justify-center flex-1 gap-6">
        <NLWLogo />

        <View className="space-y-2">
          <Text className="text-2xl leading-tight text-center font-title text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-base leading-relaxed text-center text-gray-100 font-body">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="px-5 py-2 bg-green-500 rounded-full"
          onPress={() => signInWithGithub()}
        >
          <Text className="text-sm text-black uppercase font-alt">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-sm leading-relaxed text-center text-gray-200 font-body">
        Feito com 💜 no NLW da Rocketseat
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}