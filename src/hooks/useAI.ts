import { useState } from "react";
import axios, { type AxiosInstance, type AxiosResponse } from "axios";
import type { IGenAiResponse } from "../Interfaces/IGenAiResponse.ts";
import {
  addPrompt,
  updateAiBusy,
  updatePromptRetry,
} from "../store/slices/chatsSlice.ts";
import { useAppDispatch } from "./useAppDispatch.ts";
export interface IClientMethods {
  /**
   * Makes http request to the AI server, sending along user prompt
   *
   * @param prompt user input
   * @param isRetry when true, it resends a prompt to the ai server
   * */
  sendPrompt: (prompt: string, isRetry?: boolean) => void;
  getHistory: () => void;
}

// A one-time ID per chat session
const sessionId = Math.random().toString(36).slice(2);

const useAI = () => {
  const [isBusy, setIsBusy] = useState(false);
  const dispatch = useAppDispatch();
  const backend = import.meta.env.VITE_BACKEND_URL;

  console.log(backend);
  const http: AxiosInstance = axios.create({
    baseURL: backend,
    timeout: 36000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const sendPrompt = (prompt: string, isRetry = false) => {
    const promptTime = Date.now();
    if (!isRetry) {
      dispatch(
        addPrompt({
          timestamp: promptTime,
          isUserPrompt: true,
          prompt,
          sessionId,
        })
      );
    }

    setIsBusy(true);

    http
      .post("/prompt", { prompt })
      .then((res: AxiosResponse<IGenAiResponse>) => {
        dispatch(updateAiBusy(false));
        return { created: res.data.created, message: res.data.message };
      })
      .then((data) => {
        if (data.created && data.message) {
          dispatch(
            addPrompt({
              timestamp: data.created,
              prompt: data.message,
              isUserPrompt: false,
              sessionId,
            })
          );
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          updatePromptRetry({
            timestamp: promptTime,
          })
        );
        dispatch(updateAiBusy(false));
      })
      .finally(() => {
        setIsBusy(false);
      });
  };

  const getHistory = () => {
    //
  };

  const actions: IClientMethods = {
    sendPrompt,
    getHistory,
  };

  const hookTuple: [boolean, IClientMethods] = [isBusy, actions];

  return hookTuple;
};

// exporting a file as default exemplifies SRP: A module should serve only one purpose -- in react context
// here, this means that there cannot be another logic exported from this module

export default useAI;
