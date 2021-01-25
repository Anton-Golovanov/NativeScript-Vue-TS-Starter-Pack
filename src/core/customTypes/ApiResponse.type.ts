export type ApiResponse = {
  data: {
    data: {
      [key: string]: string;
    };
    service: string;
    status: string;
    request: string;
    message: string;
    name: string;
    code: string;
    status_code: string;
  };
};
