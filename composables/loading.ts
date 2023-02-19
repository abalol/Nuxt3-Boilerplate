import type { Ref } from 'vue'
export const show = (status: Ref<boolean>) => () => {
  status.value = true;
};
export const hide = (status: Ref<boolean>) => () => {
  status.value = false;
};

export const loadingState = () => {
  const status = useState('status', () => (false))
  return {
    status: readonly(status),
    show: show(status),
    hide: hide(status),
  }
}
