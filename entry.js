// THESE IMPORTS MUST BE FROM THESE EXACT LOCATIONS OTHERWISE
// TREE SHAKING DOESN'T WORK
import Vuetify from 'vuetify/lib/framework'
import {VApp} from 'vuetify/lib/components/VApp'
import {VCalendar} from 'vuetify/lib/components/VCalendar'
import {VDialog} from 'vuetify/lib/components/VDialog'
import {VImg} from 'vuetify/lib/components/VImg'
import {
    VCard, VCardActions,
    VCardSubtitle,
    VCardText, VCardTitle
} from 'vuetify/lib/components/VCard'
import {VBtn} from 'vuetify/lib/components/VBtn'
import {VSnackbar} from 'vuetify/lib/components/VSnackbar'

export default {
    Vuetify,
    components: {
        VApp,
        VCalendar,
        VDialog,
        VImg,
        VCard,
        VCardActions,
        VCardSubtitle,
        VCardText,
        VCardTitle,
        VBtn,
        VSnackbar
    }
}
