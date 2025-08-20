import API from "./axios";

export const loginApi = async (email, password) => {
  const res = await API.post(
    "/auth/login",
    { email, password },
    { withCredentials: true }
  );
  return res.data.user;
};

export const registerApi = async (username, email, password) => {
  const res = await API.post(
    "/auth/register",
    { username, email, password },
    { withCredentials: true }
  );
  return res.data.user;
};

export const logoutApi = async () => {
  await API.post("/auth/logout", {}, { withCredentials: true });
};
