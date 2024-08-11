<script setup lang="ts">
import { registerUser } from '@/services/userService'

const visible = defineModel<boolean>('visible')

const formState = ref({
  orgId: 'deltasolution',
  email: '',
  phoneNumber: '',
})

const loading = ref(false)
const isFormValid = ref(false)
const showSuccess = ref(false)

const validateForm = () => {
  const { email, phoneNumber } = formState.value
  isFormValid.value = Boolean(email && phoneNumber)
}

const handleSubmit = async (closeCallback: () => void) => {
  if (!isFormValid.value) {
    return
  }
  loading.value = true

  try {
    const { orgId, email, phoneNumber } = formState.value
    const result = await registerUser(orgId, email, phoneNumber)
    if (result.status === 'success') {
      showSuccess.value = true
      setTimeout(() => {
        closeCallback()
      }, 1500)
    }
  }
  catch (error) {
    console.error('Error during registration:', error)
  }
  finally {
    loading.value = false
  }
}

const handleDialogHide = () => {
  const currentDate = new Date()
  const hideUntilDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000) // 24 hours
  hideNewsletterUntil.value = hideUntilDate.toISOString()
}
</script>

<template>
  <Dialog
    v-model:visible="visible"

    closable dismissable-mask modal
    style="
      border-radius: 0;
      height: 360px;
      width: 600px;
      display: flex;
      flex-direction: row;
      padding: 0;
      margin: 0;
    "
    @hide="handleDialogHide"
  >
    <template #container="{ closeCallback }">
      <CloseIcon
        style="position: absolute; right: 0; cursor: pointer"
        :width="25"
        :height="25"
        @click="closeCallback"
      />

      <div style="min-width: 180px">
        <img
          src="/images/logo.png"
          alt=""
          class="image-style"
          style="height: 100%; min-width: 100%; background-color: #2B2A29"
        >
      </div>

      <div v-if="showSuccess">
        <h1
          class="animate-text"
        >
          Merci, Vous êtes maintenant inscrit
        </h1>
        />
      </div>
      <div v-else style="padding: 12px 18px">
        <h1 style="font-size: 30px; font-style: italic">
          S'inscrire dés maintenant
        </h1>
        <h3 style="font-size: 19px; font-weight: 400">
          Abonnez-vous à notre newsletter pour des mises à jour fraîches et des
          économies spéciales
        </h3>
        <InputText
          id="email"
          v-model="formState.email"
          placeholder="Votre adresse email"
          style="width: 100%; margin-bottom: 20px"
          @input="validateForm"
        />
        <InputMask
          id="phoneNumber"
          v-model="formState.phoneNumber"
          mask="+999 99 999 999"
          placeholder="+216 99 999 999"
          fluid
          slot-char=" "
          style="width: 100%; margin-bottom: 20px"
          :auto-clear="false"
          @input="validateForm"
        />
        <div>
          <Button
            label="S'inscrire"
            text
            style="
              width: 100%;
              height: 45px;
              background-color: black;
              border-radius: 0;
              color: white;
            "
            :loading
            @click="() => handleSubmit(closeCallback)"
          />
        </div>
      </div>
    </template>
  </Dialog>
</template>

<style>
.image-style {
  max-width: 128px;
  object-fit: contain;
}

.animate-text {
  font-size: 30px;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.35s ease-in-out;
  /* Trigger animation on page load */
  animation: fadeIn 0.35s ease-in-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
