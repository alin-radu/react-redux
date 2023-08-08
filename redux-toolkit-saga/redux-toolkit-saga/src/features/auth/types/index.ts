export interface Auth_Credentials {
  email: string;
  password: string;
}

export interface Auth_Form extends Auth_Credentials {
  isRegister: boolean;
}
