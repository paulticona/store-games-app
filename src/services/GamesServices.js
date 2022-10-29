import { API_URL } from "../lib/Enviroments";

export const GetGamesFvorites = async (token) => {
  const response = await fetch(`${API_URL}/games`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const status = response.status;
  const data = await response.json();
  return { data, status };
};