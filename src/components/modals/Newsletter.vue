<script setup lang="ts">
const visible = defineModel<boolean>('visible')
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    style="border-radius: 0; height: 320px;width: 600px;  display: flex;
  flex-direction: row;padding: 0;margin: 0;"
  >
    <template #container="{ closeCallback }">
      <CloseIcon style="position: absolute;right: 0;cursor: pointer;" :width="25" :height="25" @click="closeCallback" />
      <img src="/images/galleryImages/image-1.jpg" alt="" class="image-style" style="height: 100%;min-width: 180px;">

      <div
        class="flex flex-col gap-4 px-5 py-5"
        style="padding: 12px 18px;"
      >
        <h1 style="font-size: 30px;font-style: italic;">
          S'inscrire dés maintenant
        </h1>
        <h3 style="font-size: 19px;font-weight: 400;">
          Abonnez-vous à notre newsletter pour des mises à jour fraîches et des économies spéciales
        </h3>
        <div class="inline-flex flex-col gap-2">
          <InputText
            id="email"
            placeholder="Votre adresse email"
            class="bg-white-alpha-20 text-primary-50 w-20rem border-none p-3"
            style="width: 100%; margin-bottom: 20px;"
          />
        </div>
        <div class="align-items-center flex gap-3">
          <Button
            label="Sign-In"
            text
            class="text-primary-50 border-white-alpha-30 hover:bg-white-alpha-10 w-full border-1 p-3"
            style="width: 100%;height: 45px;background-color: black;border-radius: 0;color: white;"
            @click="closeCallback"
          />
        </div>
      </div>
    </template>
  </Dialog>
</template>

<style>
.image-style {
  max-width: 128px;
  object-fit: cover;
}
</style>
