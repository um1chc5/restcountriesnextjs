import { authHttp, nextServerHttp, tokenStorage } from "src/apis/http";
import { differenceInMinutes } from "date-fns";
import { useEffect } from "react";

function CheckTokenExpire() {
  const { accessTokenExpire, accessToken, refreshToken } = tokenStorage;

  useEffect(() => {
    const diff = differenceInMinutes(accessTokenExpire, new Date());
    console.log(diff);
    if (diff < 1 && accessToken) {
      const getNewAccessToken = async () => {
        try {
          const res = await authHttp.post("refresh-access-token", {
            refresh_token: refreshToken,
          });
          console.log(res);
          nextServerHttp.post("/api/renew-access-token", res.data);
        } catch (error) {
          throw error;
        }
      };
      getNewAccessToken();
    } 
  }, []);

  return null;
}

export default CheckTokenExpire;
