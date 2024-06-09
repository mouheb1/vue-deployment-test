<script setup lang="ts">
import { ref } from 'vue'
import { contact } from '@/assets/json/config.json'

const apiUrl = 'https://deltasolution-express.netlify.app/.netlify/functions/api' // TODO: gotta make it into an env

const formState = ref({
  email: '',
  subject: 'contact delta solution',
  name: '',
  surname: '',
  message: '',
  phone: '',
  acceptedTerms: false,
})

const loading = ref(false)
const isFormValid = ref(false)

const validateForm = () => {
  const { email, message, name, surname, phone, acceptedTerms } = formState.value
  isFormValid.value = Boolean(email && message && name && surname && phone && acceptedTerms)
}

const messageCount = ref(0)
const message = ref<any>(null)

const showMessage = (severity: string, content: string) => {
  message.value = {
    id: messageCount.value++,
    severity,
    content,
  }
}

const sendMail = async () => {
  if (!isFormValid.value) {
    showMessage('warn', 'Veuillez remplir tous les champs !')
    return
  }
  loading.value = true

  try {
    const { email, message, name, surname, subject, phone } = formState.value
    const fullMessage = `${message}\nNom: ${surname} Prénom: ${name}\n Téléphone: ${phone}`

    await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        message: fullMessage,
        subject,
      }),
    })

    showMessage('info', 'Votre message a été envoyé avec succès')
  }
  catch (error) {
    console.error('error:', error)
    showMessage('error', 'Une erreur s\'est produite')
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="relative top-0 h-150 bg-cover bg-center bg-no-repeat bg-contact-image before:absolute before:inset-0 before:bg-black before:opacity-40 before:content-['']" />
  <div class="absolute mx-3.5 mt-68 max-w-[95%] w-[95%] pb-20 md:mx-7">
    <div class="text-left text-[3em] text-white font-extrabold">
      Contact Delta Solution
    </div>
    <div class="mb-5 text-left text-2xl text-white font-normal tracking-[0.01em] uppercase">
      CONTACTEZ-NOUS
    </div>
    <div class="flex flex-wrap gap-y-10 md:flex-nowrap md:gap-x-10 md:gap-y-0">
      <div class="bg-[#003f5e] p-10 md:w-[65%] lg:p-20">
        <div class="grid grid-cols-2 mb-2.5 gap-2.5">
          <input
            v-model="formState.surname"
            type="text"
            placeholder="Nom*"
            required
            class="relative block w-full border border-[rgba(0,63,94,0.3)] bg-white p-[13.33333px] px-5 py-3.5 text-black font-sans outline-none"
            @input="validateForm"
          >
          <input
            v-model="formState.name"
            type="text"
            placeholder="Prenom*"
            required
            class="relative block w-full border border-[rgba(0,63,94,0.3)] bg-white p-[13.33333px] px-5 py-3.5 text-black font-sans outline-none"
            @input="validateForm"
          >
          <input
            v-model="formState.phone"
            type="text"
            placeholder="Téléphone*"
            required
            class="relative block w-full border border-[rgba(0,63,94,0.3)] bg-white p-[13.33333px] px-5 py-3.5 text-black font-sans outline-none"
            @input="validateForm"
          >
          <input
            v-model="formState.email"
            type="text"
            placeholder="Email*"
            required
            class="relative block w-full border border-[rgba(0,63,94,0.3)] bg-white p-[13.33333px] px-5 py-3.5 text-black font-sans outline-none"
            @input="validateForm"
          >
        </div>
        <textarea
          v-model="formState.message"
          :cols="20"
          :rows="6"
          placeholder="Message*"
          required
          class="relative mb-2.5 block w-full border border-[rgba(0,63,94,0.3)] bg-white p-[13.33333px] px-5 py-3.5 text-black font-sans outline-none"
          @input="validateForm"
        />

        <input
          v-model="formState.acceptedTerms"
          style="margin: 5px;"
          type="checkbox"
          class="bg-white"
          @change="validateForm"
        >
        <label class="text-sm text-white">
          En soumettant ce formulaire, j'accepte que les informations saisies soient traitées par <strong>S2BAT</strong>
          dans le cadre de ma demande de contact et de la relation commerciale qui peut en découler.
          <a
            href="politique-confidentialite.html"
            title="En savoir plus en consultant notre politique de confidentialité."
            class="underline"
          >En savoir plus en consultant notre politique de confidentialité.</a>*
        </label>

        <div class="mt-4">
          <PrimaryButton
            type="submit"
            :loading="loading"
            @click="sendMail"
          />
        </div>
        <Message
          v-if="message"
          :severity="message.severity"
          @close="() => message = null"
        >
          {{ message.content }}
        </Message>
      </div>

      <div class="flex items-end">
        <ul class="flex flex-col list-none gap-y-2 text-left text-sm">
          <li><strong>Delta Solution</strong></li>
          <li>
            {{ contact.address.street }}
            <br>{{ contact.address.city }}
          </li>
          <li>{{ contact.email }}</li>
          <li>{{ contact.webUrl }}</li>
          <li>
            <a
              :href="`tel:${contact.phone}`"
              itemprop="telephone"
              onclick="gtag('event', 'Appel Téléphonique');"
            >{{ contact.phone }}</a>
          </li>
          <li>
            <div>
              <LocationButton>Plan d'accès</LocationButton>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="min-[475px]:mb-90 min-[475px]:mb-70 mb-90 h-100 md:mb-10 sm:mb-50" />
</template>
