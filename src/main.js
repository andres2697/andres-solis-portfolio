import { createApp } from 'vue'
import './style.css'
import 'tailwindcss/tailwind.css';
import App from './App.vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faInfo,
    faUser,
    faGear,
    faGraduationCap,
    faBriefcase,
    faCaretDown,
    faArrowLeft,
    faArrowRight,
    faAddressCard,
    faListCheck,
    faLocationDot,
    faSchool,
    faLanguage,
    faCertificate,
    faInfoCircle,
    faArrowsSpin,
    faCode,
    faCaretLeft,
    faCaretRight,
    faMagnifyingGlassPlus
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faUser,
    faGear,
    faGraduationCap,
    faBriefcase,
    faCaretDown,
    faArrowLeft,
    faArrowRight,
    faAddressCard,
    faListCheck,
    faLocationDot,
    faSchool,
    faLanguage,
    faCertificate,
    faInfoCircle,
    faInfo,
    faArrowsSpin,
    faCode,
    faCaretLeft,
    faCaretRight,
    faMagnifyingGlassPlus
)

const pinia = createPinia()

const app = createApp(App)
app.use(pinia).component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
