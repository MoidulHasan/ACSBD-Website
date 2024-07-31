export default defineNuxtRouteMiddleware((to, from) => {
  const { authorized, user } = storeToRefs(useAuthStore());
  const token = useCookie("token");
  const userCookie = useCookie("user");
  useCookie("redirectTo").value = to.path;

  if (token.value && userCookie.value) {
    authorized.value = true;
    user.value = userCookie.value;
  }

  if (token.value && (to?.name === "sign-in" || to?.name === "registration")) {
    return navigateTo("/");
  }

  if (!token.value && to?.name !== "registration") {
    abortNavigation();
    return navigateTo("/sign-in");
  }
});
