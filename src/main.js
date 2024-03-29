import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUser, faRightToBracket, faStar, faChevronDown, faChevronUp, faFaceSmile, faGear, faImage } from '@fortawesome/free-solid-svg-icons'


library.add(faGithub, faLinkedinIn, faEnvelope, faUser, faRightToBracket, faStar, faChevronDown, faChevronUp, faFaceSmile, faGear, faImage)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
