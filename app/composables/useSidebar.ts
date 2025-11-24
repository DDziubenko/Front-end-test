type SidebarKey = "menu" | "booking";

export const useSidebar = (key: SidebarKey) => {
  const activeSidebar = useState<SidebarKey | null>("sidebar-open", () => null);

  const open = () => {
    activeSidebar.value = key;
  };

  const close = () => {
    if (activeSidebar.value === key) {
      activeSidebar.value = null;
    }
  };

  const toggle = () => {
    activeSidebar.value = activeSidebar.value === key ? null : key;
  };

  const isOpen = computed(() => activeSidebar.value === key);

  return {
    isOpen,
    open,
    close,
    toggle,
    activeSidebar: readonly(activeSidebar),
  };
};
