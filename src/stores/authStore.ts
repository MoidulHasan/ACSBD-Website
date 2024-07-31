import type {
  IUser,
  IAuthSuccessResponse,
  ICreateResponse,
} from "~/contracts/common";

interface ILoginPayload {
  email: string;
  password: string;
}

interface IRegisterPayLoad extends ILoginPayload {
  name: string;
}

export const useAuthStore = defineStore("authStore", () => {
  const { $apiClient } = useNuxtApp();

  const user = ref<IUser | null>(null);
  const authorized = ref(false);
  const wishListStore = useWishListStore();

  const authenticateUser = async ({ email, password }: ILoginPayload) => {
    const response = await $apiClient<IAuthSuccessResponse>("/login", {
      method: "POST",
      body: {
        email,
        password,
      },
    }).catch((error) => error.data);

    if (response.message === "Authorized" && response.token) {
      const token = useCookie("token");
      const userCookie = useCookie("user");

      token.value = response.token;
      userCookie.value = response.user;

      authorized.value = true;
      user.value = response.user;
    }

    return response;
  };

  const registerUser = async ({ name, email, password }: IRegisterPayLoad) => {
    const response = await $apiClient("/user/register", {
      method: "POST",
      body: {
        name,
        email,
        password,
      },
    }).catch((error) => error.data);
    if ((response.status = "success" && response.token)) {
      const token = useCookie("token");
      const userCookie = useCookie("user");

      token.value = response.token;
      userCookie.value = response.user;

      authorized.value = true;
      user.value = response.user;
    }
    return response;
  };

  const logoutUser = async () => {
    const response = await $apiClient<ICreateResponse>("/logout", {
      method: "POST",
    }).catch((error) => error.data);

    if (response.message === "success") {
      const token = useCookie("token");
      const userCookie = useCookie("user");

      token.value = null;
      userCookie.value = null;

      authorized.value = false;
      user.value = null;
      wishListStore.removeWishList();
    }

    return response;
  };

  const isAuthenticated = () => authorized.value;

  return {
    user,
    authorized,
    isAuthenticated,
    authenticateUser,
    registerUser,
    logoutUser,
  };
});
