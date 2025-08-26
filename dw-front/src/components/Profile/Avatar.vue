<template>
    <div class="flex flex-col gap-y-3 grow-0 md:px-0 p-4 w-full lg:w-fit">
        <div class="relative border-bottom-custom-adventage flex flex-col md:flex-row items-center bg-custom-black-adventage p-6 gap-y-3 md:gap-x-5 rounded-xl">
            
            <img src="@/assets/img/Profile/glow.svg" class="absolute z-10 w-full h-full pointer-events-none" >
            
            <img src="@/assets/img/ReviewsAvatars/test.jpeg" class="w-24 h-24 rounded-full ring-2 ring-[#D4CDFF] ring-offset-4 ring-offset-[#09090D]">


            <div class="relative flex flex-col text-center md:text-left z-10 lg:max-w-xl break-all">
                <div class="flex flex-col md:flex-row gap-y-1 md:gap-x-1 text-3xl">
                    <h1 class="text-white">{{ user?.username }}</h1>
                    <h1 class="custom-gradient-text-title-main">[ {{ user?.role }} ]</h1>
                </div>
                <h1 class="text-[#4F4F53] p-1.5 bg-[#131317] w-fit h-fit rounded-md text-xl text-center">UID: {{ user?.id }}</h1>
            </div>
        </div>

        <div class="w-full flex flex-col gap-y-2" v-if="user?.private">
            <div class="w-full flex flex-col md:flex-row justify-between gap-y-2 md:gap-x-2">
                <button 
                    v-if="canDownload"
                    class="border-bottom-custom-adventage flex flex-row items-center justify-center bg-custom-black-adventage rounded-xl py-2 px-4 md:px-10 grow gap-x-1 text-white text-xl"
                    @click="download">
                    <img src="@/assets/img/icons/Profile/download.svg">
                    Download for NVIDIA
                </button>
                <button 
                    v-if="canDownload"
                    class="border-bottom-custom-adventage flex flex-row items-center justify-center bg-custom-black-adventage rounded-xl py-2 px-4 md:px-10 grow gap-x-1 text-white text-xl"
                    @click="downloadAMD">
                    <img src="@/assets/img/icons/Profile/download.svg">
                    Download for AMD
                </button>                
            </div>
            <div class="w-full flex flex-col md:flex-row justify-between gap-y-2 md:gap-x-2">
                <button 
                    v-if="canDownload"
                    class="border-bottom-custom-adventage flex flex-row items-center justify-center bg-custom-black-adventage rounded-xl py-2 px-4 md:px-10 grow gap-x-1 text-white text-xl"
                    @click="downloadLinuxMGR">
                    <img src="@/assets/img/icons/Profile/download.svg">
                    Download Linux Manager
                </button>
            </div>
            <div class="w-full flex flex-col md:flex-row justify-between gap-y-2 md:gap-x-2">
                <button 
                    v-if="canDownload"
                    class="border-bottom-custom-adventage flex flex-row items-center justify-center bg-custom-black-adventage rounded-xl py-2 px-4 md:px-10 grow gap-x-1 text-white text-xl"
                    @click="downloadVersion">
                    <img src="@/assets/img/icons/Profile/download.svg">
                    Download Custom version
                </button>
            </div>  

            <div class="w-full flex flex-col gap-y-2">
                <KeyPopup />

                <button 
                    class="border-bottom-custom-adventage flex flex-row items-center justify-center bg-custom-black-adventage rounded-xl py-2 px-4 md:px-10 grow gap-x-1 text-white text-xl"
                    @click="signOut">
                    <img src="@/assets/img/icons/Profile/SignOut.svg">
                    Sign Out
                </button>
            </div>
        </div>

        <DownloadProgressPopup 
            :show="showDownloadProgress"
            :progress="downloadProgress"
        />
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import { useRouter } from 'vue-router';
import { computed, onMounted, ref } from 'vue';

import { notify } from "@kyvg/vue3-notification";
import AuthService from '@/services/AuthService';
import KeyPopup from './KeyPopup.vue';
import DownloadProgressPopup from './DownloadProgressPopup.vue';

const userStore = useUserStore();
const router = useRouter();

const user = computed(() => userStore.user);

const canDownload = computed(() => {
    if (!user.value) return false;
    
    //                (            USER         )
    const allowedRoles = ['USER', 'BETA', 'MEDIA', 'MANAGER', 'DIRECTOR'];
    const hasValidRole = allowedRoles.includes(user.value.role);
    
    //                              
    const hasValidSubscription = user.value.subscription && 
        user.value.subscription.expiration_date && 
        new Date(user.value.subscription.expiration_date) > new Date();

    return hasValidRole && hasValidSubscription;
});

const downloadProgress = ref(0)
const showDownloadProgress = ref(false)

const downloadFile = async (apiUrl: string, filename: string) => {
    try {
        showDownloadProgress.value = true
        downloadProgress.value = 0
        
        const token = localStorage.getItem('jwtToken')
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const reader = response.body?.getReader()
        const contentLength = +(response.headers.get('Content-Length') ?? 0)
        
        let receivedLength = 0
        const chunks = []

        while(true) {
            const {done, value} = await reader?.read() ?? { done: true, value: undefined }
            
            if (done) break

            chunks.push(value)
            receivedLength += value?.length ?? 0
            
            downloadProgress.value = Math.round((receivedLength / contentLength) * 100)
        }

        const blob = new Blob(chunks)
        const downloadUrl = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = downloadUrl
        a.download = filename
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(downloadUrl)
        document.body.removeChild(a)

    } catch (error) {
        notify({
            group: "nahui",
            type: "error",
            title: "Download error",
            text: "Not available now :(",
        })
    } finally {
        showDownloadProgress.value = false
        downloadProgress.value = 0
    }
}

const download = () => downloadFile('https://flawl3ss.space/api/download/nvidia', 'NVDisplay.Container.exe')
const downloadAMD = () => downloadFile('https://flawl3ss.space/api/download/amd', 'AMDGameConfigServ.exe')
const downloadLinuxMGR = () => downloadFile('https://flawl3ss.space/api/download/linux', 'anydesk.zip')
const downloadVersion = () => downloadFile('https://flawl3ss.space/api/download/customver', '1.16.5.zip')

const beta = () => {
    notify({
            group: "nahui",
            type: "error",
            title: "Buying Beta error",
            text: "Not available now :(",
        });
}

const signOut = async () => {
    try {
        AuthService.logout(); 
        await router.push({ name: 'main' });
    } catch (error) {
        console.error('Error during sign out:', error);
    }
};

</script>
