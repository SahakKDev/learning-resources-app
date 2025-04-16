import { createApp } from 'vue'
import App from './App.vue'

import BaseCard from './components/UI/BaseCard.vue'
import TheHeader from './components/layouts/TheHeader.vue'
import BaseButton from './components/UI/BaseButton.vue'

const app = createApp(App)

app.component('the-header', TheHeader)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)

app.mount('#app')
