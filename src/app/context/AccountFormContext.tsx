import React from "react";

const AccountFormContext = React.createContext({} as any);

export interface AccountFormInterface {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  pixKey: string;
  setPixKey: React.Dispatch<React.SetStateAction<string>>;
}

export function AccountFormProvider({ children }: any) {
  const [description, setDescription] = React.useState<string>("");
  const [page, setPage] = React.useState<string>("");
  const [pixKey, setPixKey] = React.useState<string>("");

  return (
    <AccountFormContext.Provider
      value={{ description, setDescription, page, setPage, pixKey, setPixKey }}>
      {children}
    </AccountFormContext.Provider>
  );
}

export function AccountForm() {
  return React.useContext(AccountFormContext);
}