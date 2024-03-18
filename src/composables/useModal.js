import { ref } from 'vue'

export default function useModal() {
  const isOpen = ref(false)

  const onOpenChange = () => {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    onOpenChange
  }
}
