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
    await registerUser(orgId, email, phoneNumber)
    // showMessage('info', 'Merci de vous être inscrit(e) à notre newsletter')
  }
  catch (error) {
    console.error('Error during registration:', error)
    // showMessage('error', 'Une erreur s\'est produite')
  }
  finally {
    loading.value = true
    closeCallback()
  }
}
</script>

<template>
  <Dialog
    v-model:visible="visible"

    closable dismissable-mask modal
    style="
      border-radius: 0;
      height: fit-content;
      width: 600px;
      display: flex;
      flex-direction: row;
      padding: 0;
      margin: 0;
    "
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

      <div style="padding: 12px 18px">
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
</style>
